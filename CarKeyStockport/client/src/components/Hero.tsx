import { Phone, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Locksmith_programming_car_key_edfb7aad.png";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 text-center text-white">
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight" data-testid="text-hero-title">
          Lost Your Car Keys in Stockport?
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium" data-testid="text-hero-subtitle">
          24/7 Emergency Car Key Replacement & Programming Service
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="text-lg">24/7 Available</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-lg">Insurance Approved</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-lg">5-Star Rated</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
            data-testid="button-call-now"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToServices}
            className="text-white border-2 border-white backdrop-blur-sm bg-white/10 hover:bg-white/20 text-lg px-8 py-6 h-auto font-semibold"
            data-testid="button-our-services"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
