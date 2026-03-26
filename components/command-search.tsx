"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Fuse from "fuse.js"
import { Search, Heart } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { elements, tags, type Element } from "@/lib/commands"
import { CommandCard } from "@/components/command-card"
import { FormatExampleCard } from "@/components/format-example-card"

const ALL_TAGS_VALUE = "__all__"

const fuse = new Fuse<Element>(elements, {
  keys: [
    { name: "name", weight: 2 },
    { name: "description", weight: 1.3 },
    { name: "tags", weight: 1 },
    { name: "parameters", weight: 1 },
  ],
  threshold: 0.4,
})

export function CommandSearch() {
  const [query, setQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState(ALL_TAGS_VALUE)

  const isIdle = query.trim() === "" && selectedTag === ALL_TAGS_VALUE

  const results = useMemo(() => {
    let pool: Element[]

    if (query.trim()) {
      pool = fuse.search(query).map((r) => r.item)
    } else {
      pool = elements
    }

    if (selectedTag !== ALL_TAGS_VALUE) {
      pool = pool.filter((c) =>
        c.tags.includes(selectedTag as (typeof tags)[number])
      )
    }

    return pool
  }, [query, selectedTag])

  return (
    <div className="flex min-h-svh flex-col">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-6">
        {/* Header */}
        <header className="flex flex-col gap-4 border-b py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className="size-8 shrink-0"
            />
            <h1 className="text-xl font-semibold tracking-tight">
              GeoGebra Befehle und Werkzeuge
            </h1>
          </div>

          {/* Search + Tag select — max width ⅔ of previous 56rem (max-w-4xl) */}
          <div className="flex w-full max-w-[min(100%,calc(56rem*2/3))] sm:shrink-0 sm:justify-end">
            <div className="relative min-w-0 flex-1">
              <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Suche nach Befehlen und Werkzeugen"
                className="rounded-r-none border-r-0 pl-8"
              />
            </div>
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-[180px] shrink-0 rounded-l-none">
                <SelectValue placeholder="Tag Auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL_TAGS_VALUE}>Alle Tags</SelectItem>
                {tags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </header>

        {/* Results */}
        <main className="flex-1 py-8">
          {isIdle ? (
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="mt-5 space-y-4 text-foreground">
                <p>Diese Liste wurde im Rahmen eines Matheauftrags erstellt.</p>
                <p>
                  Gib etwas in die Funktionsleiste ein oder wähle eine Kategorie
                  aus, um mit der Suche zu beginnen.
                </p>
                <p>
                  Fehler, Verbesserungsvorschläge oder fehlende Befehle und
                  Tools bitte an{" "}
                  <a
                    href="mailto:support@lateininator.com"
                    className="text-blue-500 underline underline-offset-2"
                  >
                    support@lateininator.com
                  </a>{" "}
                  schicken. Oder an{" "}
                  <a
                    href="mailto:julian.friedrich@khev.at"
                    className="text-blue-500 underline underline-offset-2"
                  >
                    julian.friedrich@khev.at
                  </a>
                  , aber nur mit einem vernünftigen Grund.
                </p>
              </div>
              <div className="min-w-0">
                <FormatExampleCard />
              </div>
            </div>
          ) : results.length === 0 ? (
            <p className="py-12 text-center text-muted-foreground">
              Keine Ergebnisse gefunden.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {results.map((el) => (
                <CommandCard key={el.name} element={el} />
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="grid grid-cols-1 gap-4 border-t py-4 text-sm text-muted-foreground sm:grid-cols-3 sm:items-center">
          <div className="text-left">
            <Link
              href="/datenschutz"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Datenschutz
            </Link>
          </div>
          <div className="text-center">
            Mit{" "}
            <Heart className="inline size-4 fill-purple-500 text-purple-500" />{" "}
            von Julian und{" "}
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Anton
            </a>
          </div>
          <div className="text-right">
            <a
              href="https://github.com/neinja007/geogebra-dings"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Projekt ist Open-Source
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
