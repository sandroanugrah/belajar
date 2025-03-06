"use client";

import { useState } from "react";
import Input from "@/components/Input";

export default function Login() {
  // State untuk menyimpan data input
  const [data, aturData] = useState({ email: "", kataSandi: "" });

  // Fungsi untuk mengubah nilai input berdasarkan event
  const ubahInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    aturData({ ...data, [e.target.name]: e.target.value });
  };

  // Fungsi untuk menangani submit formulir
  const kirimFormulir = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", data.email);
    console.log("Kata Sandi:", data.kataSandi);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gradient-to-b from-blue-300 to-blue-400 dark:from-gray-800 dark:to-gray-900">
      {/* Container utama */}
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        {/* Judul form */}
        <h2 className="text-xl font-semibold text-center mb-4 text-gray-700 dark:text-white">
          Silahkan Masukkan Email dan Kata Sandi Anda
        </h2>

        {/* Formulir login */}
        <form onSubmit={kirimFormulir} className="flex flex-col gap-4">
          {/* Input untuk Email */}
          <Input
            label="Alamat Email"
            type="email"
            name="email"
            value={data.email}
            onChange={ubahInput}
          />

          {/* Input untuk Kata Sandi */}
          <Input
            label="Kata Sandi"
            type="password"
            name="kataSandi"
            value={data.kataSandi}
            onChange={ubahInput}
          />

          {/* Tombol Masuk */}
          <button
            type="submit"
            className="w-full bg-[#5DADE2] text-white py-2 rounded-lg hover:bg-[#4A90E2] transition"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
