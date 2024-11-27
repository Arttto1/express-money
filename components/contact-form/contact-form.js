"use client";

import { useState } from "react";

import "../../app/globals.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Mensagem enviada!");
        setFormData({
          nome: "",
          sobrenome: "",
          email: "",
          telefone: "",
          mensagem: "",
        });
      } else {
        setStatus("Erro ao enviar a mensagem.");
      }
    } catch (error) {
      setStatus("Erro ao enviar a mensagem.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex  flex-col flex-1 gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <div className="flex flex-col">
          <label htmlFor="nome" className="font-medium">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={formData.nome}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-customLightBlue"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="sobrenome" className="font-medium">
            Sobrenome
          </label>
          <input
            type="text"
            name="sobrenome"
            id="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-customLightBlue"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-customLightBlue"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="telefone" className="font-medium">
            Telefone com DDD
          </label>
          <input
            type="tel"
            name="telefone"
            id="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-customLightBlue"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="mensagem" className="font-medium">
          Mensagem
        </label>
        <textarea
          name="mensagem"
          id="mensagem"
          rows={5}
          value={formData.mensagem}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-customLightBlue resize-none"
        ></textarea>
        {status === "Enviando..." ? (
          status
        ) : (
          <button
            className="mt-2 w-fit ml-auto border-[3px] border-customLightBlue px-2 py-1 rounded-md hover:scale-105 hover:bg-customLightBlue transition-transform duration-300"
            type="submit"
          >
            Enviar Email
          </button>
        )}
      </div>
    </form>
  );
}
