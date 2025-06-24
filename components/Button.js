"use client";
import React, { useState } from "react";
import { fetchUser } from "../lib/utils";

export default function Button() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const renderUser = async () => {
    setError("");
    try {
      const data = await fetchUser();
      setUser(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <button
        onClick={renderUser}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Crear Usuario
      </button>

      {user && (
        <div className="mt-20 p-4 bg-gray-100 rounded shadow w-full max-w-md">
          <p>
            <strong>Nombre:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Teléfono:</strong> {user.phone}
          </p>
          <p>
            <strong>Compañía:</strong> {user.company.name}
          </p>
        </div>
      )}
    </div>
  );
}
