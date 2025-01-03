"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function PreOrder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Split name into first and last name
    const nameParts = formData.name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/pre-order`,
        {
          firstName,
          lastName,
          email: formData.email,
          phoneNumber: formData.phone,
        }
      );

      console.log("Server response:", data);

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "" });
      setError("");
    } catch (err) {
      console.error("Error:", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Алдаа гарлаа");
      } else {
        setError("Сервертэй холбогдоход алдаа гарлаа");
      }
    }
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Багшаар бүртгүүлэх</h1>
            <p className="text-xl text-gray-400">
              Та өөрийн мэдээллээ үлдээснээр бид тантай эхний ээлжинд холбогдох
              болно.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            {success ? (
              <div className="text-center">
                <div className="text-green-500 mb-4">
                  Амжилттай бүртгэгдлээ!
                </div>
                <Link
                  href="/"
                  className="btn text-white bg-purple-600 hover:bg-purple-700 rounded-lg"
                >
                  Нүүр хуудас руу буцах
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Нэр <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-input w-full text-gray-300 rounded-lg"
                      placeholder="Таны нэр"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Имэйл <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input w-full text-gray-300 rounded-lg"
                      placeholder="example@gmail.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="phone"
                    >
                      Утасны дугаар <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-input w-full text-gray-300 rounded-lg"
                      placeholder="99999999"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full rounded-lg">
                      Бүртгүүлэх
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
