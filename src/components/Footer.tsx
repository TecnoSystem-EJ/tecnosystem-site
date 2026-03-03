import React from 'react'
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

export default async function Footer() {
    const client = createClient();
    await client.getSingle("home").catch(() => notFound());

    return (
        <div className="m-8 font-dm text-red-600 font-medium text-center mx-auto">
            <p>©{new Date().getFullYear()} Tecno System | All Rights Reserved</p>
        </div>
    )
}