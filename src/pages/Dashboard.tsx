import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Upload, 
  Calendar, 
  Pill, 
  Heart, 
  BookOpen, 
  Bell,
  Phone,
  Clock,
  MapPin,
  Star
} from "lucide-react";

const Dashboard = () => {
  const quickActions = [
    {
      icon: MessageCircle,
      title: "Chat with Doctor",
      description: "Start WhatsApp conversation",
      action: "Open WhatsApp",
      color: "primary",
      urgent: false
    },
    {
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule your visit",
      action: "Book Now",
      color: "secondary",
      urgent: false
    },
    {
      icon: Upload,
      title: "Share Report",
      description: "Upload medical reports",
      action: "Upload",
      color: "accent",
      urgent: false
    },
    {
      icon: Heart,
      title: "Get Volunteer Help",
      description: "Connect with local support",
      action: "Find Help",
      color: "primary",
      urgent: true
    }
  ];

  const recentActivity = [
    {
      type: "appointment",
      title: "Dr. Priya Sharma consultation",
      time: "Tomorrow, 10:00 AM",
      status: "confirmed"
    },
    {
      type: "prescription",
      title: "Blood pressure medication",
      time: "Ready for pickup",
      status: "ready"
    },
    {
      type: "report",
      title: "Blood test results",
      time: "2 days ago",
      status: "viewed"
    }
  ];

  const availableDoctors = [
    {
      name: "Dr. Priya Sharma",
      specialty: "General Medicine",
      rating: 4.8,
      status: "online",
      languages: ["Hindi", "English"]
    },
    {
      name: "Dr. Amit Patel",
      specialty: "Pediatrics",
      rating: 4.9,
      status: "online",
      languages: ["Hindi", "Gujarati", "English"]
    },
    {
      name: "Dr. Sunita Reddy",
      specialty: "Women's Health",
      rating: 4.7,
      status: "busy",
      languages: ["Telugu", "Hindi", "English"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Heart className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Welcome, Rajesh</h1>
                <p className="text-sm text-muted-foreground flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Khandwa Village, MP
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-secondary-soft text-secondary">
                <Bell className="h-3 w-3 mr-1" />
                3 Reminders
              </Badge>
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Emergency
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">What do you need today?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-care transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                  action.urgent ? 'ring-2 ring-accent' : ''
                }`}
              >
                {action.urgent && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                    Urgent
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    action.color === 'primary' ? 'bg-primary-soft' :
                    action.color === 'secondary' ? 'bg-secondary-soft' : 'bg-accent-soft'
                  }`}>
                    <action.icon className={`h-6 w-6 ${
                      action.color === 'primary' ? 'text-primary' :
                      action.color === 'secondary' ? 'text-secondary' : 'text-accent'
                    }`} />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription className="text-sm">{action.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="healthcare" size="sm" className="w-full">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Doctors */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                  Available Doctors
                </CardTitle>
                <CardDescription>
                  Connect instantly via WhatsApp or schedule a call
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {availableDoctors.map((doctor, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent-soft/50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold">{doctor.name}</h3>
                        <Badge 
                          variant={doctor.status === 'online' ? 'default' : 'secondary'}
                          className={doctor.status === 'online' ? 'bg-secondary text-secondary-foreground' : ''}
                        >
                          {doctor.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{doctor.specialty}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
                          {doctor.rating}
                        </div>
                        <div>
                          Languages: {doctor.languages.join(", ")}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="healthcare" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-secondary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'confirmed' ? 'bg-secondary' :
                      activity.status === 'ready' ? 'bg-accent' : 'bg-muted-foreground'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Health Education */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-accent" />
                  Health Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-accent-soft rounded-lg">
                    <h4 className="font-semibold text-accent text-sm mb-1">
                      Monsoon Health Care
                    </h4>
                    <p className="text-xs text-accent/80">
                      Tips to stay healthy during rainy season
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Tips
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;