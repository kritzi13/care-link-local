import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Upload, Calendar, Pill, Heart, BookOpen, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-healthcare.jpg";

const Index = () => {
  const features = [
    {
      icon: Phone,
      title: "Phone Registration",
      description: "Simple phone-based signup with local helper assistance",
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Doctors",
      description: "Connect with doctors via familiar WhatsApp chats and calls",
      color: "secondary"
    },
    {
      icon: Upload,
      title: "Upload Reports",
      description: "Share medical reports and symptoms easily through photos",
      color: "accent"
    },
    {
      icon: Calendar,
      title: "Book Appointments",
      description: "Schedule doctor visits with simple one-click booking",
      color: "primary"
    },
    {
      icon: Pill,
      title: "Prescriptions",
      description: "Access prescriptions and find nearby pharmacies",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Volunteer Help",
      description: "Connect with NGOs and volunteers for support",
      color: "accent"
    },
    {
      icon: BookOpen,
      title: "Health Education",
      description: "Learn about health, nutrition, and medicine in local language",
      color: "primary"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Get appointment and medication reminders via WhatsApp",
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-care bg-clip-text text-transparent">
              CareLink
            </h1>
          </div>
          <Button variant="healthcare" size="lg">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-care opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Healthcare for
            <span className="block text-accent-soft">Every Village</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Connecting rural communities with doctors through WhatsApp. 
            Simple, familiar, and accessible healthcare for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="shadow-care" asChild>
              <Link to="/register">Start Registration</Link>
            </Button>
            <Button variant="outline-white" size="xl" asChild>
              <Link to="/dashboard">Connect with Doctor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              Simple Healthcare, 
              <span className="text-primary"> Powerful Impact</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to access quality healthcare, designed for rural communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const isHealthEducation = feature.title === "Health Education";
              
              if (isHealthEducation) {
                return (
                  <Link key={index} to="/health-education">
                    <Card className="border-0 shadow-soft hover:shadow-care transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardHeader className="text-center pb-4">
                        <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                          feature.color === 'primary' ? 'bg-primary-soft' :
                          feature.color === 'secondary' ? 'bg-secondary-soft' : 'bg-accent-soft'
                        }`}>
                          <feature.icon className={`h-8 w-8 ${
                            feature.color === 'primary' ? 'text-primary' :
                            feature.color === 'secondary' ? 'text-secondary' : 'text-accent'
                          }`} />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardDescription className="text-sm leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                );
              }
              
              return (
                <Card key={index} className="border-0 shadow-soft hover:shadow-care transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      feature.color === 'primary' ? 'bg-primary-soft' :
                      feature.color === 'secondary' ? 'bg-secondary-soft' : 'bg-accent-soft'
                    }`}>
                      <feature.icon className={`h-8 w-8 ${
                        feature.color === 'primary' ? 'text-primary' :
                        feature.color === 'secondary' ? 'text-secondary' : 'text-accent'
                      }`} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-care">
        <div className="container mx-auto px-4 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Transform Rural Healthcare?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of patients already connected to quality healthcare through CareLink
          </p>
          <Button variant="hero" size="xl" className="shadow-care" asChild>
            <Link to="/register">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CareLink</span>
          </div>
          <p className="text-muted-foreground">
            Empowering rural communities with accessible healthcare
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;