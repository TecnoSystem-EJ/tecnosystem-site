"use client";
import React, { useRef, useState } from "react";
import Input from "./Input";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
          }
        )
        .then(
          () => {
            alert("Mensagem enviada!");
          },
          (error) => {
            alert(error.text);
          },
        );
    }
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="flex flex-col gap-4 md:mt-10" id="contact">
      <h2 className="text-3xl font-primary text-primary-main my-3 font-400">
        Entre em contato
      </h2>

      <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Seu nome"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="phone"
          placeholder="Seu número"
          value={phone}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          type="submit"
          className="font-secondary font-normal mt-2 bg-primary-main text-gray-300 text-lg h-12 rounded-md hover:bg-primary-main hover:opacity-70 transition duration-300 ease-in-out">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
