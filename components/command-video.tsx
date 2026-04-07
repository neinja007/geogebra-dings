"use client"

import { useState } from "react"
import { VideoOff } from "lucide-react"

import { EXAMPLE_VIDEO_SUFFIX } from "@/config"

type CommandVideoProps = {
  /** File name without extension (usually the command name) */
  basename: string
  className?: string
}

export function CommandVideo({ basename, className }: CommandVideoProps) {
  const [missing, setMissing] = useState(false)

  if (missing) {
    return (
      <div
        className={`flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/40 px-4 text-center text-sm text-foreground ${className ?? ""}`}
      >
        <VideoOff className="size-8 opacity-60" aria-hidden />
        <span>Kein Video vorhanden</span>
      </div>
    )
  }

  return (
    <video
      className={`w-full rounded-lg ${className ?? ""}`}
      src={`/${basename}.${EXAMPLE_VIDEO_SUFFIX}`}
      autoPlay
      loop
      muted
      playsInline
      onError={() => setMissing(true)}
    />
  )
}
