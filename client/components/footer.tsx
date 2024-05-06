import React from "react"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Sanda Loncar. Alle Rechte vorbehalten. <Link className ="underline" href="/impressum">Impressum</Link>
      </small>
    </footer>
  );
}
