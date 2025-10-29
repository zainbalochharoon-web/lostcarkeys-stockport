import { Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const phoneNumber = "+44 161 XXX XXXX";
  const email = "info@lostcarkeys-stockport.co.uk";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4 text-foreground" data-testid="text-contact-title">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch for fast, professional car key replacement service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-2xl mb-6 text-foreground">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a 
                      href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                      className="text-3xl md:text-4xl font-bold text-primary hover:text-primary/80 transition-colors"
                      data-testid="link-phone"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a 
                      href={`mailto:${email}`}
                      className="text-lg text-primary hover:text-primary/80 transition-colors"
                      data-testid="link-email"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Business Hours</p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">24/7 Emergency Service</span><br />
                      Available every day, all day and night
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <a 
                href="https://carkeysinstockport.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                data-testid="link-main-website"
              >
                <ExternalLink className="w-4 h-4" />
                Visit our main website for full services
              </a>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-md p-8">
            <h3 className="font-semibold text-2xl mb-6 text-card-foreground">Quick Response</h3>
            <p className="text-muted-foreground mb-6">
              For immediate assistance, call us now. We're available 24/7 for all car key emergencies in Stockport and surrounding areas.
            </p>
            <div className="space-y-4">
              <Button 
                onClick={handleCallClick}
                className="w-full h-auto py-4 text-lg font-semibold"
                data-testid="button-call-contact"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {phoneNumber}
              </Button>
              <Button 
                onClick={handleEmailClick}
                variant="outline"
                className="w-full h-auto py-4 text-lg font-semibold"
                data-testid="button-email-contact"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              Average response time: Under 30 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
