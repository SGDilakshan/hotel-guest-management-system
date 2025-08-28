"use client";

import type { CreateGuestData, UpdateGuestData } from "@/lib/pocketbase";

interface GuestFormProps {
  formData: CreateGuestData | UpdateGuestData;
  onChange: (data: CreateGuestData | UpdateGuestData) => void;
  errors: Record<string, string>;
}

export default function GuestForm({ formData, onChange, errors }: GuestFormProps) {
  
  const safeFormData: CreateGuestData | UpdateGuestData = formData || {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    date_of_birth: "",
  };
  
  const safeErrors = errors || {};

  const handleChange = (field: keyof (CreateGuestData | UpdateGuestData), value: string) => {
    if (onChange) {
      onChange({
        ...safeFormData,
        [field]: value,
      });
    }
  };

  return (
    <div className="space-y-6">
     
      <div>
        <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={safeFormData.first_name || ""}
              onChange={(e) => handleChange("first_name", e.target.value)}
              className={`input-field ${safeErrors.first_name ? "border-red-500 focus:border-red-500" : ""}`}
              required
              placeholder="Enter first name"
              autoComplete="given-name"
            />
            {safeErrors.first_name && (
              <p className="text-red-600 text-sm mt-1">{safeErrors.first_name}</p>
            )}
          </div>

          <div>
            <label htmlFor="last_name" className="block text-sm font-medium mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={safeFormData.last_name || ""}
              onChange={(e) => handleChange("last_name", e.target.value)}
              className={`input-field ${safeErrors.last_name ? "border-red-500 focus:border-red-500" : ""}`}
              required
              placeholder="Enter last name"
              autoComplete="family-name"
            />
            {safeErrors.last_name && (
              <p className="text-red-600 text-sm mt-1">{safeErrors.last_name}</p>
            )}
          </div>
        </div>
      </div>

   
      <div>
        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={safeFormData.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`input-field ${safeErrors.email ? "border-red-500 focus:border-red-500" : ""}`}
              required
              placeholder="user@example.com"
              autoComplete="email"
            />
            {safeErrors.email && (
              <p className="text-red-600 text-sm mt-1">{safeErrors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={safeFormData.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="input-field"
              placeholder="+1-555-0123"
              autoComplete="tel"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={safeFormData.address || ""}
              onChange={(e) => handleChange("address", e.target.value)}
              rows={3}
              className="input-field"
              placeholder="Street, City, State, ZIP"
              autoComplete="street-address"
            />
          </div>
        </div>
      </div>

     
      <div>
        <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
        <div>
          <label htmlFor="date_of_birth" className="block text-sm font-medium mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={safeFormData.date_of_birth || ""}
            onChange={(e) => handleChange("date_of_birth", e.target.value)}
            className="input-field"
            autoComplete="bday"
          />
        </div>
      </div>
    </div>
  );
}