import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, BookOpen, Heart, Users, Stethoscope, Pill, Baby, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HealthEducation = () => {
  const categories = [
    {
      id: "basics",
      label: "Health Basics",
      icon: Stethoscope,
      color: "primary"
    },
    {
      id: "nutrition",
      label: "Nutrition",
      icon: Heart,
      color: "secondary"
    },
    {
      id: "medicine",
      label: "Medicine Safety",
      icon: Pill,
      color: "accent"
    },
    {
      id: "maternal",
      label: "Mother & Child",
      icon: Baby,
      color: "primary"
    },
    {
      id: "prevention",
      label: "Prevention",
      icon: Shield,
      color: "secondary"
    }
  ];

  const educationContent = {
    basics: [
      {
        title: "When to See a Doctor",
        description: "Learn the warning signs that require immediate medical attention",
        duration: "5 min read",
        language: "Hindi • English",
        type: "article"
      },
      {
        title: "Basic First Aid",
        description: "Simple first aid steps everyone should know",
        duration: "8 min video",
        language: "Hindi • English",
        type: "video"
      },
      {
        title: "Understanding Your Body",
        description: "Basic body functions and health signs to watch for",
        duration: "6 min read",
        language: "Hindi • English",
        type: "article"
      }
    ],
    nutrition: [
      {
        title: "Healthy Eating on a Budget",
        description: "Nutritious meals with local, affordable ingredients",
        duration: "10 min video",
        language: "Hindi • English",
        type: "video"
      },
      {
        title: "Children's Nutrition",
        description: "Essential nutrients for growing children",
        duration: "7 min read",
        language: "Hindi • English",
        type: "article"
      },
      {
        title: "Clean Water & Food Safety",
        description: "Preventing illness through safe food practices",
        duration: "5 min video",
        language: "Hindi • English",
        type: "video"
      }
    ],
    medicine: [
      {
        title: "Taking Medicine Safely",
        description: "How to read prescriptions and take medicines correctly",
        duration: "6 min video",
        language: "Hindi • English",
        type: "video"
      },
      {
        title: "Storing Medicines",
        description: "Proper storage to keep medicines effective",
        duration: "4 min read",
        language: "Hindi • English",
        type: "article"
      },
      {
        title: "Common Medicine Mistakes",
        description: "Avoiding dangerous medication errors",
        duration: "5 min read",
        language: "Hindi • English",
        type: "article"
      }
    ],
    maternal: [
      {
        title: "Pregnancy Care",
        description: "Essential care during pregnancy for mother and baby",
        duration: "12 min video",
        language: "Hindi • English",
        type: "video"
      },
      {
        title: "Newborn Care",
        description: "Basic care for newborns in the first months",
        duration: "8 min video",
        language: "Hindi • English",
        type: "video"
      },
      {
        title: "Child Development",
        description: "Tracking healthy growth and development milestones",
        duration: "10 min read",
        language: "Hindi • English",
        type: "article"
      }
    ],
    prevention: [
      {
        title: "Preventing Common Diseases",
        description: "Simple steps to prevent illness in your community",
        duration: "9 min video",
        language: "Hindi • English",
        type: "video"
      },
      {
        title: "Vaccination Guide",
        description: "Understanding vaccines for children and adults",
        duration: "7 min read",
        language: "Hindi • English",
        type: "article"
      },
      {
        title: "Hygiene Practices",
        description: "Daily hygiene habits for better health",
        duration: "6 min video",
        language: "Hindi • English",
        type: "video"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">Health Education</h1>
            </div>
          </div>
          <Button variant="healthcare" asChild>
            <Link to="/dashboard">Connect Doctor</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Learn About Your Health
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, easy-to-understand health information in your language. 
            Learn how to stay healthy and take care of your family.
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
                    Essential knowledge for better health and wellbeing
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {educationContent[category.id as keyof typeof educationContent].map((content, index) => (
                    <Card key={index} className="hover:shadow-care transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2">
                            {content.type === 'video' ? 
                              <Play className="h-5 w-5 text-primary" /> : 
                              <BookOpen className="h-5 w-5 text-secondary" />
                            }
                            <Badge variant={content.type === 'video' ? 'default' : 'secondary'}>
                              {content.type === 'video' ? 'Video' : 'Article'}
                            </Badge>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {content.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{content.title}</CardTitle>
                        <CardDescription>
                          {content.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{content.language}</span>
                          </div>
                          <Button size="sm" variant="healthcare">
                            {content.type === 'video' ? 'Watch' : 'Read'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
              <CardTitle className="text-2xl">Emergency Health Information</CardTitle>
              <CardDescription className="text-white/90">
                Important numbers and steps for health emergencies
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Emergency Helpline</h4>
                  <p className="text-2xl font-bold">108</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Poison Control</h4>
                  <p className="text-2xl font-bold">1066</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Mental Health</h4>
                  <p className="text-2xl font-bold">9152987821</p>
                </div>
              </div>
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                View Emergency Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HealthEducation;