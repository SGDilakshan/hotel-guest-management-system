"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useNavigate, useSearchParams } from "react-router-dom"
import { ArrowLeft, Edit, Save, X, Trash2, Mail, Phone, MapPin, Calendar } from "lucide-react"
import { useGuest, useUpdateGuest, useDeleteGuest } from "@/hooks/useGuests"
import GuestForm from "@/components/GuestForm"
import type { UpdateGuestData } from "@/lib/pocketbase"

export default function GuestDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const isEditMode = searchParams.get("edit") === "true"

  const [isEditing, setIsEditing] = useState(isEditMode)
  const [formData, setFormData] = useState<UpdateGuestData>({})

  const { data: guest, isLoading, error } = useGuest(id!)
  const updateGuest = useUpdateGuest()
  const deleteGuest = useDeleteGuest()

  useEffect(() => {
    if (guest) {
      setFormData({
        first_name: guest.first_name,
        last_name: guest.last_name,
        email: guest.email,
        phone: guest.phone || "",
        address: guest.address || "",
        date_of_birth: guest.date_of_birth || "",
      })
    }
  }, [guest])

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!id) return

    try {
      // Remove empty optional fields
      const cleanData = Object.entries(formData).reduce((acc, [key, value]) => {
        if (value !== "") {
          acc[key as keyof UpdateGuestData] = value as string
        }
        return acc
      }, {} as UpdateGuestData)

      await updateGuest.mutateAsync({ id, data: cleanData })
      setIsEditing(false)
    } catch (error) {
      console.error("Failed to update guest:", error)
      alert("Failed to update guest. Please try again.")
    }
  }

  const handleDelete = async () => {
    if (!guest || !id) return

    if (window.confirm(`Are you sure you want to delete ${guest.first_name} ${guest.last_name}?`)) {
      try {
        await deleteGuest.mutateAsync(id)
        navigate("/guests")
      } catch (error) {
        console.error("Failed to delete guest:", error)
        alert("Failed to delete guest. Please try again.")
      }
    }
  }

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
        <p className="mt-2 text-gray-600">Loading guest details...</p>
      </div>
    )
  }

  if (error || !guest) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">Guest not found</div>
        <button onClick={() => navigate("/guests")} className="btn-primary">
          Back to Guests
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/guests")}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            title="Back to Guests"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{isEditing ? "Edit Guest" : "Guest Details"}</h1>
        </div>

        {!isEditing && (
          <div className="flex space-x-2">
            <button onClick={() => setIsEditing(true)} className="btn-secondary flex items-center">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </button>
            <button onClick={handleDelete} disabled={deleteGuest.isPending} className="btn-danger flex items-center">
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="card p-6">
        {isEditing ? (
          <form onSubmit={handleUpdate} className="space-y-6">
            <GuestForm formData={formData} onChange={setFormData} errors={{}} />

            {/* Actions */}
            <div className="flex justify-end space-x-3 pt-6 border-t">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false)
                  // Reset form data
                  setFormData({
                    first_name: guest.first_name,
                    last_name: guest.last_name,
                    email: guest.email,
                    phone: guest.phone || "",
                    address: guest.address || "",
                    date_of_birth: guest.date_of_birth || "",
                  })
                }}
                className="btn-secondary flex items-center"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </button>
              <button type="submit" disabled={updateGuest.isPending} className="btn-primary flex items-center">
                {updateGuest.isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <p className="text-gray-900">{guest.first_name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <p className="text-gray-900">{guest.last_name}</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-gray-900">{guest.email}</span>
                </div>
                {guest.phone && (
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-gray-900">{guest.phone}</span>
                  </div>
                )}
                {guest.address && (
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-400 mr-3 mt-0.5" />
                    <span className="text-gray-900">{guest.address}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h2>
              <div className="space-y-3">
                {guest.date_of_birth && (
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-gray-900">Born: {new Date(guest.date_of_birth).toLocaleDateString()}</span>
                  </div>
                )}
                <div className="text-sm text-gray-500">
                  <p>Created: {new Date(guest.created).toLocaleString()}</p>
                  <p>Last Updated: {new Date(guest.updated).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
