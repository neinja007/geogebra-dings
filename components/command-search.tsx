"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { Search, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { commands, tags, type Command } from "@/lib/commands";

const ALL_TAGS_VALUE = "__all__";

const fuse = new Fuse<Command>(commands, {
  keys: [
    { name: "name", weight: 2 },
    { name: "description", weight: 1.3 },
    { name: "tags", weight: 1 },
    { name: "arguments", weight: 1 },
  ],
  threshold: 0.4,
});

export function CommandSearch() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(ALL_TAGS_VALUE);

  const results = useMemo(() => {
    let pool: Command[];

    if (query.trim()) {
      pool = fuse.search(query).map((r) => r.item);
    } else {
      pool = commands;
    }

    if (selectedTag !== ALL_TAGS_VALUE) {
      pool = pool.filter((c) =>
        c.tags.includes(selectedTag as (typeof tags)[number])
      );
    }

    return pool;
  }, [query, selectedTag]);

  return (
    <div className="flex min-h-svh flex-col">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-semibold tracking-tight">
          GeoGebra Befehle und Werkzeuge
        </h1>

        {/* Search + Tag select, merged */}
        <div className="flex w-full max-w-md">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Suche nach Befehlen und Werkzeugen"
              className="rounded-r-none border-r-0 pl-8"
            />
          </div>
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-[180px] rounded-l-none">
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
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <p className="text-muted-foreground">
          {results.length === 0 && commands.length === 0
            ? "Noch keine Befehle vorhanden."
            : "results"}
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t px-6 py-4 text-center text-sm text-muted-foreground">
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
      </footer>
    </div>
  );
}
