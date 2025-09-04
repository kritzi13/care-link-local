import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  Pill,
  Activity,
  Heart,
  User,
  Bell,
  Stethoscope,
  FileText,
  Plus
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const FollowUpCare = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('reminders');

  const upcomingReminders = [
    {
      id: 1,
      type: 'medication',
      title: t('bloodPressureMedication'),
      subtitle: 'Amlodipine 5mg',
      time: '09:00 AM',
      date: 'Today',
      status: 'pending',
      priority: 'high',
      icon: Pill
    },
    {
      id: 2,
      type: 'appointment',
      title: t('followUpConsultation'),
      subtitle: 'Dr. Priya Sharma',
      time: '02:30 PM',
      date: 'Tomorrow',
      status: 'confirmed',
      priority: 'medium',
      icon: Stethoscope
    },
    {
      id: 3,
      type: 'test',
      title: t('bloodSugarCheck'),
      subtitle: t('fastingGlucoseTest'),
      time: '07:00 AM',
      date: 'Dec 8',
      status: 'scheduled',
      priority: 'low',
      icon: Activity
    },
    {
      id: 4,
      type: 'medication',
      title: t('diabetesMedication'),
      subtitle: 'Metformin 500mg',
      time: '08:00 PM',
      date: 'Today',
      status: 'completed',
      priority: 'high',
      icon: Pill
    }
  ];

  const careTracking = [
    {
      category: t('medicationAdherence'),
      currentStreak: 15,
      targetStreak: 30,
      progress: 50,
      status: 'good',
      lastUpdate: '2 hours ago'
    },
    {
      category: t('appointmentAttendance'),
      currentStreak: 8,
      targetStreak: 10,
      progress: 80,
      status: 'excellent',
      lastUpdate: '1 day ago'
    },
    {
      category: t('healthMonitoring'),
      currentStreak: 12,
      targetStreak: 20,
      progress: 60,
      status: 'good',
      lastUpdate: '3 hours ago'
    }
  ];

  const motivationalMessages = [
    {
      id: 1,
      message: t('greatJobTakingMeds'),
      type: 'encouragement',
      time: '1 hour ago',
      read: false
    },
    {
      id: 2,
      message: t('reminderHealthCheckup'),
      type: 'reminder',
      time: '3 hours ago',
      read: false
    },
    {
      id: 3,
      message: t('congratsConsistency'),
      type: 'achievement',
      time: '1 day ago',
      read: true
    }
  ];

  const doctorFollowUps = [
    {
      id: 1,
      doctor: 'Dr. Priya Sharma',
      specialty: 'General Medicine',
      lastConsult: '5 days ago',
      nextFollowUp: 'Tomorrow 2:30 PM',
      status: 'scheduled',
      notes: t('reviewBloodPressure'),
      priority: 'high'
    },
    {
      id: 2,
      doctor: 'Dr. Amit Patel',
      specialty: 'Endocrinology',
      lastConsult: '2 weeks ago',
      nextFollowUp: 'Dec 15, 2024',
      status: 'pending',
      notes: t('diabetesManagementReview'),
      priority: 'medium'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'confirmed': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'scheduled': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Care Tracking Overview */}
      <Card className="bg-gradient-to-r from-primary-soft to-secondary-soft border-none">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="h-6 w-6 mr-2 text-primary" />
            {t('yourCareJourney')}
          </CardTitle>
          <CardDescription className="text-primary/80">
            {t('trackingYourHealthProgress')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {careTracking.map((item, index) => (
              <div key={index} className="bg-white/50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-sm">{item.category}</h4>
                  <Badge variant="outline" className={
                    item.status === 'excellent' ? 'bg-green-50 text-green-700 border-green-200' :
                    item.status === 'good' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                    'bg-yellow-50 text-yellow-700 border-yellow-200'
                  }>
                    {t(item.status)}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <Progress value={item.progress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{item.currentStreak}/{item.targetStreak} {t('days')}</span>
                    <span>{item.lastUpdate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Reminders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-accent" />
                {t('upcomingReminders')}
              </div>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                {t('addReminder')}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingReminders.map((reminder) => (
              <div 
                key={reminder.id}
                className={`p-4 border-l-4 rounded-lg ${getPriorityColor(reminder.priority)}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-full">
                      <reminder.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{reminder.title}</h4>
                      <p className="text-xs text-muted-foreground">{reminder.subtitle}</p>
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(reminder.status)}`}></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {reminder.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {reminder.time}
                    </span>
                  </div>
                  {reminder.status !== 'completed' && (
                    <Button variant="outline" size="sm">
                      {reminder.status === 'pending' ? t('complete') : t('reschedule')}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Doctor Follow-ups */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2 text-secondary" />
              {t('doctorFollowUps')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {doctorFollowUps.map((followUp) => (
              <div key={followUp.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold">{followUp.doctor}</h4>
                    <p className="text-sm text-muted-foreground">{followUp.specialty}</p>
                  </div>
                  <Badge variant={followUp.status === 'scheduled' ? 'default' : 'outline'}>
                    {t(followUp.status)}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('lastConsult')}:</span>
                    <span>{followUp.lastConsult}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('nextFollowUp')}:</span>
                    <span className="font-medium">{followUp.nextFollowUp}</span>
                  </div>
                  <div className="mt-3 p-2 bg-muted/50 rounded text-xs">
                    <span className="font-medium">{t('notes')}: </span>
                    {followUp.notes}
                  </div>
                </div>
                <div className="flex space-x-2 mt-3">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    {t('call')}
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t('message')}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Motivational Messages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2 text-pink-500" />
            {t('motivationalMessages')}
          </CardTitle>
          <CardDescription>
            {t('encouragementAndReminders')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {motivationalMessages.map((message) => (
              <div 
                key={message.id}
                className={`p-4 border rounded-lg ${
                  !message.read ? 'bg-accent-soft/20 border-accent/20' : 'bg-muted/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm">{message.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!message.read && (
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {t(message.type)}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FollowUpCare;