import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { EXAMPLE_VIDEO_SUFFIX } from "@/config"
import type { Element } from "@/lib/commands"

export function CommandCard({ element }: { element: Element }) {
  return (
    <Card>
      <div className="flex flex-col lg:flex-row">
        {/* Left half: info */}
        <div className="flex flex-1 flex-col lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-lg">{element.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-3">
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {element.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Parameters */}
            <div className="text-sm">
              <span className="font-medium">Parameter: </span>
              {element.parameters.map((p, i) => (
                <span key={p}>
                  {i > 0 && ", "}
                  {p}
                </span>
              ))}
              {element.optionalParameters?.map((p) => (
                <span key={p} className="text-muted-foreground">
                  , {p}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground">
              {element.description}
            </p>
          </CardContent>
        </div>

        {/* Right half: video */}
        <div className="flex items-center p-4 lg:w-1/2 lg:pl-0">
          <video
            className="w-full rounded-lg"
            src={`/videos/${element.name}.${EXAMPLE_VIDEO_SUFFIX}`}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </Card>
  )
}
