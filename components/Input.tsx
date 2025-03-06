"use client";

import { InputProps } from "@/interfaces/inputProps";

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
