import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ServiceAreas() {
  const mainArea = "Stockport";
  const nearbyAreas = [
    "Cheadle", "Bramhall", "Hazel Grove", "Marple",
    "Reddish", "Heaton Moor", "Heaton Mersey", "Heaton Chapel",
    "Davenport", "Stepping Hill", "Offerton", "Woodley",
    "Bredbury", "Romiley", "Gatley", "Cheadle Hulme"
  ];

  return (
    <section id="areas" className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-foreground" data-testid="text-areas-title">
            Service Areas
          </h2>
          <p className="text-lg text-muted-foreground">
            Serving Stockport and surrounding areas across Greater Manchester
          </p>
        </div>

        <div className="mb-8 text-center">
          <Badge 
            className="text-lg px-6 py-3 bg-primary text-primary-foreground font-semibold"
            data-testid="badge-main-area"
          >
            <MapPin className="w-4 h-4 mr-2" />
            {mainArea}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {nearbyAreas.map((area, index) => (
            <Badge 
              key={index}
              variant="secondary"
              className="text-base px-4 py-2"
              data-testid={`badge-area-${index}`}
            >
              {area}
            </Badge>
          ))}
        </div>

        <p className="text-center mt-8 text-muted-foreground">
          Don't see your area listed? Contact us - we may still be able to help!
        </p>
      </div>
    </section>
  );
}
