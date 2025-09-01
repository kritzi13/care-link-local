import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Upload, Calendar, Pill, Heart, BookOpen, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import heroImage from "@/assets/hero-healthcare.jpg";

const Index = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Phone,
      title: t('phoneRegistration'),
      description: t('phoneRegistrationDesc'),
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: t('whatsappDoctors'),
      description: t('whatsappDoctorsDesc'),
      color: "secondary"
    },
    {
      icon: Upload,
      title: t('uploadReports'),
      description: t('uploadReportsDesc'),
      color: "accent"
    },
    {
      icon: Calendar,
      title: t('bookAppointments'),
      description: t('bookAppointmentsDesc'),
      color: "primary"
    },
    {
      icon: Pill,
      title: t('prescriptions'),
      description: t('prescriptionsDesc'),
      color: "secondary"
    },
    {
      icon: Heart,
      title: t('volunteerHelp'),
      description: t('volunteerHelpDesc'),
      color: "accent"
    },
    {
      icon: BookOpen,
      title: t('healthEducation'),
      description: t('healthEducationDesc'),
      color: "primary"
    },
    {
      icon: Bell,
      title: t('smartReminders'),
      description: t('smartRemindersDesc'),
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
              {t('carelink')}
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <Button variant="healthcare" size="lg">
              <Link to="/register">{t('getStarted')}</Link>
            </Button>
          </div>
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
            {t('healthcareForEveryVillage')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="shadow-care" asChild>
              <Link to="/register">{t('startRegistration')}</Link>
            </Button>
            <Button variant="outline-white" size="xl" asChild>
              <Link to="/dashboard">{t('connectWithDoctor')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              {t('simpleHealthcarePowerfulImpact')}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('featuresDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const isHealthEducation = feature.title === t('healthEducation');
              
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
            {t('readyToTransform')}
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          <Button variant="hero" size="xl" className="shadow-care" asChild>
            <Link to="/register">{t('startYourJourney')}</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">{t('carelink')}</span>
          </div>
          <p className="text-muted-foreground">
            {t('empoweringCommunities')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;