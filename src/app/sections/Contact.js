"use client";

import { useState } from "react";

export default function ContactForm({ onSide = false }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    carDetail: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const textColor = onSide ? "text-white" : "text-black";
  const placeHolderColor = onSide
    ? "placeholder:text-gray-100"
    : "placeholder:text-gray-400";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.carDetail.trim())
      newErrors.carDetail = "Car detail is required";
    if (!formData.reason.trim())
      newErrors.reason = "Reason for selling is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("carDetail", formData.carDetail);
      formDataToSend.append("reason", formData.reason);
      formDataToSend.append("pageUrl", window.location.href);

      // Simulate API call - replace with actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          carDetail: "",
          reason: "",
        });
        setErrors({});
        if (typeof window.gtag_report_conversion === "function") {
          window.gtag_report_conversion("/thank-you");
        } else {
          window.location.href = "/thank-you";
        }
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to submit form. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30 max-w-5xl mx-auto">
      <h3 className={`text-2xl font-bold ${textColor} mb-6`}>
        Get Your Cash Offer
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium ${textColor} mb-1 `}
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-primary focus:border-transparent`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className={`block text-sm font-medium ${textColor} mb-1 `}
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-primary focus:border-transparent`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium ${textColor} mb-1 `}
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-primary focus:border-transparent`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="city"
              className={`block text-sm font-medium ${textColor} mb-1 `}
            >
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
                errors.city ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-primary focus:border-transparent`}
              placeholder="Enter your city"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>
        </div>

        {/* Replaced Car Make / Model / Year with Car Detail textarea */}
        <div>
          <label
            htmlFor="carDetail"
            className={`block text-sm font-medium ${textColor} mb-1 `}
          >
            Car Detail *
          </label>
          <textarea
            id="carDetail"
            name="carDetail"
            value={formData.carDetail}
            onChange={handleInputChange}
            rows={2}
            className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
              errors.carDetail ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-primary focus:border-transparent`}
            placeholder="Enter car make, model and year"
          />
          {errors.carDetail && (
            <p className="text-red-500 text-sm mt-1">{errors.carDetail}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="reason"
            className={`block text-sm font-medium ${textColor} mb-1 `}
          >
            Reason for selling your car? *
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            rows={3}
            className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
              errors.reason ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-primary focus:border-transparent`}
            placeholder="Tell us why you're selling your car"
          />
          {errors.reason && (
            <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
          )}
        </div>

        {errors.submit && (
          <p className="text-red-500 text-sm">{errors.submit}</p>
        )}
        {submitSuccess && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
            Thank you! Your submission has been received. We'll contact you
            shortly.
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-full transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Get Cash Offer Now"}
        </button>
      </form>
    </div>
  );
}
