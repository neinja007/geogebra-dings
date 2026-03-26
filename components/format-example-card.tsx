import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CommandVideo } from "@/components/command-video"

/** Static example card explaining the layout (idle state). */
export function FormatExampleCard() {
  return (
    <Card>
      <div className="flex flex-col lg:flex-row">
        <div className="flex min-h-0 flex-1 flex-col lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-lg">Funktionsname</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-3">
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="secondary">Tag 1</Badge>
              <Badge variant="secondary">Tag 2</Badge>
            </div>

            <div className="text-sm text-foreground">
              <span className="font-medium">Parameter: </span>
              Parameter 1, Parameter 2, (Optionales Argument)
            </div>

            <p className="mt-auto text-sm text-foreground">
              Kurzbeschreibung, was der Befehl oder das Werkzeug in GeoGebra
              bewirkt.
            </p>
          </CardContent>
        </div>

        <div className="flex items-center p-4 lg:w-1/2 lg:pl-0">
          <CommandVideo basename="Funktionsname" />
        </div>
      </div>
    </Card>
  )
}
