import { Key, Car, Lock, Copy, Radio, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Key,
      title: "Lost Car Key Replacement",
      description: "Complete car key replacement service for all makes and models. We can cut and program new keys on-site."
    },
    {
      icon: Radio,
      title: "Key Programming & Coding",
      description: "Advanced programming for transponder keys, smart keys, and proximity keys using dealer-grade equipment."
    },
    {
      icon: Lock,
      title: "Emergency Lockout Service",
      description: "Locked out of your car? We provide fast, damage-free entry to get you back in quickly."
    },
    {
      icon: Copy,
      title: "Spare Key Duplication",
      description: "Get a spare key cut and programmed before you need it. Avoid the stress of being without a backup."
    },
    {
      icon: Car,
      title: "Transponder Key Services",
      description: "Specialist transponder key repair, replacement, and programming for enhanced vehicle security."
    },
    {
      icon: Smartphone,
      title: "Remote Key Fob Replacement",
      description: "Replace damaged or lost key fobs with genuine or high-quality aftermarket alternatives."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-foreground" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional car key solutions for all your automotive locksmith needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-card-border rounded-md p-8 hover-elevate transition-transform duration-200 hover:-translate-y-1"
                data-testid={`card-service-${index}`}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
