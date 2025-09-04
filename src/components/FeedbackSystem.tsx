import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  Award,
  Users,
  Heart,
  Lightbulb
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const FeedbackSystem = () => {
  const { t } = useLanguage();
  const [feedbackType, setFeedbackType] = useState('general');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const feedbackStats = {
    totalSubmitted: 24,
    responded: 20,
    avgResponseTime: '2 hours',
    satisfactionScore: 4.6,
    improvements: 8
  };

  const recentFeedback = [
    {
      id: 1,
      type: 'doctor_consultation',
      subject: t('consultationWithDrPriya'),
      rating: 5,
      comment: t('excellentServiceQuick'),
      date: '2024-01-20',
      status: 'responded',
      response: t('thankYouForFeedback')
    },
    {
      id: 2,
      type: 'app_feature',
      subject: t('medicationReminders'),
      rating: 4,
      comment: t('reminderFeatureGreat'),
      date: '2024-01-18',
      status: 'acknowledged',
      response: null
    },
    {
      id: 3,
      type: 'improvement',
      subject: t('languageSupport'),
      rating: 3,
      comment: t('needMoreLocalLanguages'),
      date: '2024-01-15',
      status: 'implemented',
      response: t('addedPunjabiSupport')
    }
  ];

  const feedbackCategories = [
    {
      id: 'doctor_consultation',
      name: t('doctorConsultation'),
      description: t('rateDoctorExperience'),
      icon: Users,
      color: 'text-blue-600'
    },
    {
      id: 'app_feature',
      name: t('appFeatures'),
      description: t('feedbackOnAppFeatures'),
      icon: Heart,
      color: 'text-pink-600'
    },
    {
      id: 'improvement',
      name: t('suggestions'),
      description: t('suggestImprovements'),
      icon: Lightbulb,
      color: 'text-yellow-600'
    },
    {
      id: 'technical',
      name: t('technicalIssues'),
      description: t('reportBugsIssues'),
      icon: AlertCircle,
      color: 'text-red-600'
    }
  ];

  const impactStories = [
    {
      title: t('improvedAppointmentBooking'),
      description: t('basedOnUserFeedback'),
      impact: t('increaseBookingSuccess'),
      date: '2024-01-10'
    },
    {
      title: t('addedPunjabiLanguage'),
      description: t('communityRequestedFeature'),
      impact: t('increasePunjabiUsers'),
      date: '2024-01-05'
    },
    {
      title: t('enhancedMedicationReminders'),
      description: t('improvedBasedOnFeedback'),
      impact: t('improveMedicationAdherence'),
      date: '2023-12-28'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'responded': return 'bg-green-500';
      case 'acknowledged': return 'bg-blue-500';
      case 'implemented': return 'bg-purple-500';
      case 'pending': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const handleSubmitFeedback = () => {
    if (feedback.trim() && rating > 0) {
      // Here you would typically send feedback to your backend
      console.log('Submitting feedback:', { feedbackType, rating, feedback });
      setFeedback('');
      setRating(0);
      // Show success message
    }
  };

  return (
    <div className="space-y-6">
      {/* Feedback Stats */}
      <Card className="bg-gradient-to-r from-primary-soft to-secondary-soft border-none">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-primary" />
            {t('yourVoiceMatters')}
          </CardTitle>
          <CardDescription className="text-primary/80">
            {t('helpUsImproveHealthcare')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">{feedbackStats.totalSubmitted}</div>
              <div className="text-sm text-secondary/80">{t('feedbackSubmitted')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{feedbackStats.responded}</div>
              <div className="text-sm text-accent/80">{t('responded')}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{feedbackStats.avgResponseTime}</div>
              <div className="text-sm text-primary/80">{t('avgResponseTime')}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center text-2xl font-bold text-yellow-600">
                <Star className="h-6 w-6 mr-1 fill-current" />
                {feedbackStats.satisfactionScore}
              </div>
              <div className="text-sm text-muted-foreground">{t('satisfactionScore')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{feedbackStats.improvements}</div>
              <div className="text-sm text-green-600/80">{t('improvementsMade')}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Submit New Feedback */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-accent" />
              {t('shareFeedback')}
            </CardTitle>
            <CardDescription>
              {t('helpUsServeYouBetter')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Feedback Categories */}
            <div>
              <label className="text-sm font-medium mb-2 block">{t('feedbackCategory')}</label>
              <div className="grid grid-cols-2 gap-2">
                {feedbackCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFeedbackType(category.id)}
                    className={`p-3 border rounded-lg text-left transition-all ${
                      feedbackType === category.id 
                        ? 'border-primary bg-primary-soft/20' 
                        : 'border-muted hover:bg-accent-soft/20'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <category.icon className={`h-4 w-4 ${category.color}`} />
                      <span className="font-semibold text-sm">{category.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="text-sm font-medium mb-2 block">{t('rateExperience')}</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`p-1 ${star <= rating ? 'text-yellow-500' : 'text-muted-foreground'}`}
                  >
                    <Star className={`h-6 w-6 ${star <= rating ? 'fill-current' : ''}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Text */}
            <div>
              <label className="text-sm font-medium mb-2 block">{t('detailedFeedback')}</label>
              <Textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder={t('shareThoughtsExperience')}
                rows={4}
              />
            </div>

            <Button 
              onClick={handleSubmitFeedback}
              disabled={!feedback.trim() || rating === 0}
              className="w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              {t('submitFeedback')}
            </Button>
          </CardContent>
        </Card>

        {/* Recent Feedback */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-secondary" />
              {t('myFeedback')}
            </CardTitle>
            <CardDescription>
              {t('trackFeedbackStatus')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentFeedback.map((item) => (
              <div key={item.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-sm">{item.subject}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 ${
                              star <= item.rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">{item.comment}</p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={
                    item.status === 'implemented' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                    item.status === 'responded' ? 'bg-green-50 text-green-700 border-green-200' :
                    'bg-blue-50 text-blue-700 border-blue-200'
                  }>
                    {t(item.status)}
                  </Badge>
                </div>
                
                {item.response && (
                  <div className="mt-3 p-2 bg-muted/50 rounded text-xs">
                    <span className="font-medium">{t('response')}: </span>
                    {item.response}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Impact Stories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 mr-2 text-purple-600" />
            {t('yourImpact')}
          </CardTitle>
          <CardDescription>
            {t('seeHowFeedbackHelped')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {impactStories.map((story, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">{story.title}</h4>
                    <p className="text-sm text-muted-foreground">{story.description}</p>
                  </div>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    {story.date}
                  </Badge>
                </div>
                <div className="flex items-center mt-3">
                  <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-700">{story.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackSystem;