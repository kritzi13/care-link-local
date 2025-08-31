import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Play, BookOpen, Heart, Users, Stethoscope, Pill, Baby, Shield, Globe, Wifi, WifiOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useOfflineContent } from "@/hooks/useOfflineContent";

const HealthEducation = () => {
  const [language, setLanguage] = useState<'en' | 'hi' | 'pa'>('en');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { content, isLoaded } = useOfflineContent(language);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const translations = {
    en: {
      title: 'Health Education',
      subtitle: 'Learn About Your Health',
      description: 'Simple, easy-to-understand health information in your language. Learn how to stay healthy and take care of your family.',
      backToHome: 'Back to Home',
      connectDoctor: 'Connect Doctor',
      healthBasics: 'Health Basics',
      nutrition: 'Nutrition',
      medicineSafety: 'Medicine Safety',
      motherChild: 'Mother & Child',
      prevention: 'Prevention',
      essential: 'Essential knowledge for better health and wellbeing',
      emergencyTitle: 'Emergency Health Information',
      emergencyDesc: 'Important numbers and steps for health emergencies',
      emergencyHelpline: 'Emergency Helpline',
      poisonControl: 'Poison Control',
      mentalHealth: 'Mental Health',
      viewGuide: 'View Emergency Guide',
      watch: 'Watch',
      read: 'Read',
      offlineMode: 'Offline Mode Active'
    },
    hi: {
      title: 'स्वास्थ्य शिक्षा',
      subtitle: 'अपने स्वास्थ्य के बारे में जानें',
      description: 'आपकी भाषा में सरल, समझने योग्य स्वास्थ्य जानकारी। जानें कि कैसे स्वस्थ रहें और अपने परिवार की देखभाल करें।',
      backToHome: 'होम पर वापस',
      connectDoctor: 'डॉक्टर से जुड़ें',
      healthBasics: 'स्वास्थ्य की मूल बातें',
      nutrition: 'पोषण',
      medicineSafety: 'दवा की सुरक्षा',
      motherChild: 'मां और बच्चा',
      prevention: 'रोकथाम',
      essential: 'बेहतर स्वास्थ्य और कल्याण के लिए आवश्यक ज्ञान',
      emergencyTitle: 'आपातकालीन स्वास्थ्य जानकारी',
      emergencyDesc: 'स्वास्थ्य आपातकाल के लिए महत्वपूर्ण नंबर और कदम',
      emergencyHelpline: 'आपातकालीन हेल्पलाइन',
      poisonControl: 'जहर नियंत्रण',
      mentalHealth: 'मानसिक स्वास्थ्य',
      viewGuide: 'आपातकालीन गाइड देखें',
      watch: 'देखें',
      read: 'पढ़ें',
      offlineMode: 'ऑफ़लाइन मोड सक्रिय'
    },
    pa: {
      title: 'ਸਿਹਤ ਸਿੱਖਿਆ',
      subtitle: 'ਆਪਣੀ ਸਿਹਤ ਬਾਰੇ ਜਾਣੋ',
      description: 'ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸਰਲ, ਸਮਝਣ ਯੋਗ ਸਿਹਤ ਜਾਣਕਾਰੀ। ਸਿੱਖੋ ਕਿ ਕਿਵੇਂ ਸਿਹਤਮੰਦ ਰਹਿਣਾ ਹੈ ਅਤੇ ਆਪਣੇ ਪਰਿਵਾਰ ਦੀ ਦੇਖਭਾਲ ਕਰਨੀ ਹੈ।',
      backToHome: 'ਘਰ ਵਾਪਸ',
      connectDoctor: 'ਡਾਕਟਰ ਨਾਲ ਜੁੜੋ',
      healthBasics: 'ਸਿਹਤ ਦੀਆਂ ਮੂਲ ਗੱਲਾਂ',
      nutrition: 'ਪੋਸ਼ਣ',
      medicineSafety: 'ਦਵਾਈ ਦੀ ਸੁਰੱਖਿਆ',
      motherChild: 'ਮਾਂ ਅਤੇ ਬੱਚਾ',
      prevention: 'ਰੋਕਥਾਮ',
      essential: 'ਬਿਹਤਰ ਸਿਹਤ ਅਤੇ ਕਲਿਆਣ ਲਈ ਜ਼ਰੂਰੀ ਗਿਆਨ',
      emergencyTitle: 'ਐਮਰਜੈਂਸੀ ਸਿਹਤ ਜਾਣਕਾਰੀ',
      emergencyDesc: 'ਸਿਹਤ ਐਮਰਜੈਂਸੀ ਲਈ ਮਹੱਤਵਪੂਰਨ ਨੰਬਰ ਅਤੇ ਕਦਮ',
      emergencyHelpline: 'ਐਮਰਜੈਂਸੀ ਹੈਲਪਲਾਇਨ',
      poisonControl: 'ਜ਼ਹਿਰ ਨਿਯੰਤਰਣ',
      mentalHealth: 'ਮਾਨਸਿਕ ਸਿਹਤ',
      viewGuide: 'ਐਮਰਜੈਂਸੀ ਗਾਈਡ ਦੇਖੋ',
      watch: 'ਦੇਖੋ',
      read: 'ਪੜ੍ਹੋ',
      offlineMode: 'ਔਫਲਾਈਨ ਮੋਡ ਸਰਗਰਮ'
    }
  };

  const t = translations[language];

  const categories = [
    {
      id: "basics",
      label: t.healthBasics,
      icon: Stethoscope,
      color: "primary"
    },
    {
      id: "nutrition",
      label: t.nutrition,
      icon: Heart,
      color: "secondary"
    },
    {
      id: "medicine",
      label: t.medicineSafety,
      icon: Pill,
      color: "accent"
    },
    {
      id: "maternal",
      label: t.motherChild,
      icon: Baby,
      color: "primary"
    },
    {
      id: "prevention",
      label: t.prevention,
      icon: Shield,
      color: "secondary"
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-lg">Loading health content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.backToHome}
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">{t.title}</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Offline/Online Indicator */}
            <div className="flex items-center space-x-2 text-sm">
              {isOnline ? (
                <Wifi className="h-4 w-4 text-green-500" />
              ) : (
                <div className="flex items-center space-x-1 text-amber-600">
                  <WifiOff className="h-4 w-4" />
                  <span className="hidden sm:inline">{t.offlineMode}</span>
                </div>
              )}
            </div>
            
            {/* Language Selector */}
            <Select value={language} onValueChange={(value) => setLanguage(value as 'en' | 'hi' | 'pa')}>
              <SelectTrigger className="w-32">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
                <SelectItem value="pa">ਪੰਜਾਬੀ</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="healthcare" asChild>
              <Link to="/dashboard">{t.connectDoctor}</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t.subtitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
      </section>

      {/* Education Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="basics" className="space-y-8">
            {/* Category Navigation */}
            <TabsList className="grid w-full grid-cols-5 bg-muted/50">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center gap-2 py-4"
                >
                  <category.icon className="h-5 w-5" />
                  <span className="text-xs">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content for each category */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{category.label}</h3>
                  <p className="text-muted-foreground">
                    {t.essential}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {content[category.id]?.map((contentItem, index) => (
                    <Card key={index} className="hover:shadow-care transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2">
                            {contentItem.type === 'video' ? 
                              <Play className="h-5 w-5 text-primary" /> : 
                              <BookOpen className="h-5 w-5 text-secondary" />
                            }
                            <Badge variant={contentItem.type === 'video' ? 'default' : 'secondary'}>
                              {contentItem.type === 'video' ? 
                                (language === 'hi' ? 'वीडियो' : language === 'pa' ? 'ਵੀਡੀਓ' : 'Video') : 
                                (language === 'hi' ? 'लेख' : language === 'pa' ? 'ਲੇਖ' : 'Article')}
                            </Badge>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {contentItem.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{contentItem.title}</CardTitle>
                        <CardDescription>
                          {contentItem.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{contentItem.language}</span>
                          </div>
                          <Button size="sm" variant="healthcare">
                            {contentItem.type === 'video' ? t.watch : t.read}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )) || (
                    <div className="col-span-full text-center py-8 text-muted-foreground">
                      No content available in this category
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="border-care bg-gradient-care text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t.emergencyTitle}</CardTitle>
              <CardDescription className="text-white/90">
                {t.emergencyDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">{t.emergencyHelpline}</h4>
                  <p className="text-2xl font-bold">108</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">{t.poisonControl}</h4>
                  <p className="text-2xl font-bold">1066</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">{t.mentalHealth}</h4>
                  <p className="text-2xl font-bold">9152987821</p>
                </div>
              </div>
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                {t.viewGuide}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HealthEducation;