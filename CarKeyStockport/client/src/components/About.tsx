import { Clock, Shield, Award, Wrench } from "lucide-react";

export default function About() {
  const trustSignals = [
    { icon: Clock, title: "24/7 Service", description: "Available anytime, day or night" },
    { icon: Shield, title: "Insurance Approved", description: "Fully licensed and insured" },
    { icon: Award, title: "Certified Technicians", description: "Trained and experienced" },
    { icon: Wrench, title: "No Call-Out Fee", description: "Transparent pricing" },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-foreground" data-testid="text-about-title">
              About Lost Car Keys Stockport
            </h2>
            <p className="text-lg mb-4 text-foreground" data-testid="text-about-description">
              We are Stockport's leading car key replacement and emergency locksmith service, operating 24 hours a day, 7 days a week. Part of the trusted CarKeysInStockport.co.uk family, we specialize in getting you back on the road quickly and affordably.
            </p>
            <p className="text-base mb-6 text-muted-foreground">
              With years of experience and cutting-edge key programming equipment, our certified technicians can replace and program keys for all major car manufacturers. Whether you've lost your keys, need a spare, or are locked out, we're here to help with fast, professional service you can trust.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-card-border rounded-md p-6 text-center hover-elevate"
                  data-testid={`card-trust-${index}`}
                >
                  <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-sm mb-1 text-card-foreground">{signal.title}</h3>
                  <p className="text-xs text-muted-foreground">{signal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
