"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import GuestForm from "@/components/GuestForm";
import { useCreateGuest } from "@/hooks/useGuests";
import { pb } from "@/lib/pocketbase"; // make sure you import your PocketBase client
import type { CreateGuestData } from "@/lib/pocketbase";

export default function AddGuest() {
  const navigate = useNavigate();
  const createGuest = useCreateGuest();

  const [formData, setFormData] = useState<CreateGuestData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    date_of_birth: "",
    user: pb.authStore.model?.id, // link to logged-in user
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFormDataChange = (data: Partial<CreateGuestData>) => {
    const updated = { ...formData, ...data };
    setFormData(updated);

    // Clear errors for fields that now have valid values
    if (Object.keys(errors).length > 0) {
      const newErrors = { ...errors };
      let shouldUpdate = false;

      if (updated.first_name?.trim() && errors.first_name) {
        delete newErrors.first_name;
        shouldUpdate = true;
      }
      if (updated.last_name?.trim() && errors.last_name) {
        delete newErrors.last_name;
        shouldUpdate = true;
      }
      if (updated.email?.trim() && errors.email) {
        delete newErrors.email;
        shouldUpdate = true;
      }

      if (shouldUpdate) setErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const newErrors: Record<string, string> = {};

    // Validate required fields
    if (!formData.first_name?.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name?.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email?.trim()) newErrors.email = "Email is required";

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email?.trim() && !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Prepare payload
      const payload: CreateGuestData = {
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        email: formData.email.trim(),
        user: pb.authStore.model?.id, // assign current logged-in user
      };

      if (formData.phone?.trim()) payload.phone = formData.phone.trim();
      if (formData.address?.trim()) payload.address = formData.address.trim();
      if (formData.date_of_birth?.trim()) payload.date_of_birth = formData.date_of_birth.trim();

      await createGuest.mutateAsync(payload);

      // Navigate back to guest list on success
      navigate("/guests");
    } catch (error: any) {
      console.error("Failed to create guest:", error);

      if (error?.response?.data) {
        const apiErrors: Record<string, string> = {};
        const errorData = error.response.data;

        if (errorData.data) {
          Object.keys(errorData.data).forEach((field) => {
            const fieldError = errorData.data[field];
            if (fieldError.message) apiErrors[field] = fieldError.message;
          });
        }

        if (Object.keys(apiErrors).length > 0) {
          setErrors(apiErrors);
        } else {
          alert("Failed to create guest. Please try again.");
        }
      } else {
        alert("Failed to create guest. Please check your connection and try again.");
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/guests")}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
          title="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-2xl font-bold">Add New Guest</h1>
      </div>

      <div className="card p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <GuestForm formData={formData} onChange={handleFormDataChange} errors={errors} />
          <div className="flex justify-end space-x-3 pt-6 border-t">
            <button
              type="button"
              onClick={() => navigate("/guests")}
              className="btn-secondary"
              disabled={createGuest.isPending}
            >
              Cancel
            </button>
            <button type="submit" disabled={createGuest.isPending} className="btn-primary flex items-center">
              {createGuest.isPending ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Creating...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Create Guest
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
