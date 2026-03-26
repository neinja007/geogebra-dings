import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz · GeoGebra Befehle und Werkzeuge",
  description: "Datenschutzerklärung",
}

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">Datenschutz</h1>
      <p className="mt-6 text-muted-foreground">Wir sammeln keine Daten.</p>
    </div>
  )
}
