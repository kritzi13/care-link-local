import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Brain, 
  AlertTriangle, 
  Shield, 
  Pill, 
  Activity, 
  Clock,
  TrendingUp,
  Zap,
  Heart
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const AIHealthAssistant = () => {
  const { t } = useLanguage();
  const [currentAlert, setCurrentAlert] = useState(0);
  
  // Simulate rotating alerts every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlert(prev => (prev + 1) % aiAlerts.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Dummy AI analysis data
  const aiAlerts = [
    {
      type: "viral-outbreak",
      severity: "high",
      title: "Dengue Alert in Your Area",
      titleHi: "आपके क्षेत्र में डेंगू अलर्ट",
      titlePa: "ਤੁਹਾਡੇ ਇਲਾਕੇ ਵਿੱਚ ਡੇਂਗੂ ਅਲਰਟ",
      message: "15 cases reported nearby. Use mosquito nets, avoid water stagnation.",
      messageHi: "आस-पास 15 केस रिपोर्ट हुए हैं। मच्छरदानी का उपयोग करें, पानी जमा न होने दें।",
      messagePa: "ਨੇੜੇ 15 ਕੇਸ ਰਿਪੋਰਟ ਹੋਏ ਹਨ। ਮੱਛਰਦਾਨੀ ਵਰਤੋ, ਪਾਣੀ ਜਮ੍ਹਾ ਨਾ ਹੋਣ ਦਿਓ।",
      action: "View Prevention Tips",
      actionHi: "रोकथाम के सुझाव देखें",
      actionPa: "ਰੋਕਥਾਮ ਦੇ ਸੁਝਾਅ ਦੇਖੋ"
    },
    {
      type: "weather-health",
      severity: "medium",
      title: "Cold Wave Health Alert",
      titleHi: "शीत लहर स्वास्थ्य अलर्ट",
      titlePa: "ਠੰਡ ਦੀ ਲਹਿਰ ਸਿਹਤ ਅਲਰਟ",
      message: "Temperature dropping to 5°C. Risk of respiratory issues increased.",
      messageHi: "तापमान 5°C तक गिर रहा है। सांस की समस्याओं का जोखिम बढ़ गया है।",
      messagePa: "ਤਾਪਮਾਨ 5°C ਤੱਕ ਡਿੱਗ ਰਿਹਾ ਹੈ। ਸਾਹ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ ਦਾ ਜੋਖਮ ਵਧ਼ ਗਿਆ ਹੈ।",
      action: "Get Warmth Tips",
      actionHi: "गर्म रहने के सुझाव पाएं",
      actionPa: "ਗਰਮ ਰਹਿਣ ਦੇ ਸੁਝਾਅ ਲਓ"
    },
    {
      type: "medication-interaction",
      severity: "high",
      title: "Prescription Interaction Found",
      titleHi: "दवा के बीच रिएक्शन मिला",
      titlePa: "ਦਵਾਈ ਵਿੱਚ ਪਰਸਪਰ ਪ੍ਰਭਾਵ ਮਿਲਿਆ",
      message: "Your BP medicine may interact with new antibiotic. Consult doctor.",
      messageHi: "आपकी BP की दवा नई एंटीबायोटिक के साथ रिएक्ट कर सकती है। डॉक्टर से सलाह लें।",
      messagePa: "ਤੁਹਾਡੀ BP ਦੀ ਦਵਾਈ ਨਵੀਂ ਐਂਟੀਬਾਇਓਟਿਕ ਨਾਲ ਪ੍ਰਭਾਵਤ ਹੋ ਸਕਦੀ ਹੈ। ਡਾਕਟਰ ਨੂੰ ਪੁੱਛੋ।",
      action: "Call Doctor Now",
      actionHi: "अभी डॉक्टर को कॉल करें",
      actionPa: "ਹੁਣੇ ਡਾਕਟਰ ਨੂੰ ਕਾਲ ਕਰੋ"
    }
  ];

  const aiInsights = [
    {
      icon: Activity,
      title: "Health Pattern Analysis",
      titleHi: "स्वास्थ्य पैटर्न विश्लेषण",
      titlePa: "ਸਿਹਤ ਪੈਟਰਨ ਵਿਸ਼ਲੇਸ਼ਣ",
      insight: "Your BP readings show 15% improvement this month",
      insightHi: "आपकी BP रीडिंग इस महीने में 15% सुधार दिखा रही है",
      insightPa: "ਤੁਹਾਡੀ BP ਰੀਡਿੰਗ ਇਸ ਮਹੀਨੇ 15% ਸੁਧਾਰ ਦਿਖਾ ਰਹੀ ਹੈ",
      status: "positive"
    },
    {
      icon: Pill,
      title: "Medication Adherence",
      titleHi: "दवा पालन",
      titlePa: "ਦਵਾਈ ਪਾਲਣਾ",
      insight: "95% adherence rate - Excellent! Skip rate decreased by 40%",
      insightHi: "95% पालन दर - उत्कृष्ट! छूटने की दर 40% कम हुई है",
      insightPa: "95% ਪਾਲਣਾ ਦਰ - ਸ਼ਾਨਦਾਰ! ਛੁਟਣ ਦੀ ਦਰ 40% ਘੱਟ ਗਈ ਹੈ",
      status: "positive"
    },
    {
      icon: TrendingUp,
      title: "Risk Prediction",
      titleHi: "जोखिम पूर्वानुमान",
      titlePa: "ਜੋਖਮ ਪੂਰਵ-ਅਨੁਮਾਨ",
      insight: "Low risk for diabetes complications based on current lifestyle",
      insightHi: "वर्तमान जीवनशैली के आधार पर मधुमेह जटिलताओं का कम जोखिम",
      insightPa: "ਮੌਜੂਦਾ ਜੀਵਨਸ਼ੈਲੀ ਦੇ ਆਧਾਰ ਤੇ ਸ਼ੂਗਰ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ ਦਾ ਘੱਟ ਜੋਖਮ",
      status: "positive"
    }
  ];

  const smartReminders = [
    {
      time: "8:00 AM",
      medication: "Metformin 500mg",
      note: "Take with breakfast to avoid stomach upset",
      noteHi: "पेट खराब न होने के लिए नाश्ते के साथ लें",
      notePa: "ਪੇਟ ਖਰਾਬ ਨਾ ਹੋਣ ਲਈ ਨਾਸ਼ਤੇ ਨਾਲ ਲਓ",
      status: "pending"
    },
    {
      time: "2:00 PM",
      medication: "BP Check",
      note: "AI suggests checking after lunch for accurate reading",
      noteHi: "AI सुझाता है दोपहर के खाने के बाद सटीक रीडिंग के लिए चेक करें",
      notePa: "AI ਸੁਝਾਅ ਦਿੰਦਾ ਹੈ ਦੁਪਹਿਰ ਦੇ ਖਾਣੇ ਬਾਅਦ ਸਹੀ ਰੀਡਿੰਗ ਲਈ ਚੈੱਕ ਕਰੋ",
      status: "completed"
    },
    {
      time: "8:00 PM",
      medication: "Evening Vitamins",
      note: "Best absorbed with dinner. Set phone reminder",
      noteHi: "रात के खाने के साथ बेहतर अवशोषण। फोन रिमाइंडर सेट करें",
      notePa: "ਰਾਤ ਦੇ ਖਾਣੇ ਨਾਲ ਬਿਹਤਰ ਸੋਖਣਾ। ਫੋਨ ਰਿਮਾਇੰਡਰ ਸੈੱਟ ਕਰੋ",
      status: "upcoming"
    }
  ];

  const { language } = useLanguage();
  const currentAlertData = aiAlerts[currentAlert];

  const getTitle = (item: any, key: string) => {
    if (language === 'hi') return item[`${key}Hi`] || item[key];
    if (language === 'pa') return item[`${key}Pa`] || item[key];
    return item[key];
  };

  const getMessage = (item: any, key: string) => {
    if (language === 'hi') return item[`${key}Hi`] || item[key];
    if (language === 'pa') return item[`${key}Pa`] || item[key];
    return item[key];
  };

  return (
    <div className="space-y-6">
      {/* AI Health Alert - Rotating */}
      <Alert className={`border-l-4 ${
        currentAlertData.severity === 'high' 
          ? 'border-l-accent bg-accent-soft/20' 
          : 'border-l-secondary bg-secondary-soft/20'
      }`}>
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <AlertTriangle className={`h-5 w-5 mt-0.5 ${
              currentAlertData.severity === 'high' ? 'text-accent' : 'text-secondary'
            }`} />
            <div className="flex-1">
              <AlertTitle className="flex items-center space-x-2">
                <span>{getTitle(currentAlertData, 'title')}</span>
                <Badge variant={currentAlertData.severity === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                  AI Alert
                </Badge>
              </AlertTitle>
              <AlertDescription className="mt-1">
                {getMessage(currentAlertData, 'message')}
              </AlertDescription>
            </div>
          </div>
          <Button size="sm" variant="outline" className="ml-4">
            {getMessage(currentAlertData, 'action')}
          </Button>
        </div>
      </Alert>

      {/* AI Health Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-primary" />
            <span>AI Health Insights</span>
          </CardTitle>
          <CardDescription>
            Personalized analysis based on your health data and local health trends
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiInsights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
              <insight.icon className={`h-5 w-5 mt-1 ${
                insight.status === 'positive' ? 'text-secondary' : 'text-accent'
              }`} />
              <div className="flex-1">
                <h4 className="font-medium text-sm">{getTitle(insight, 'title')}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {getMessage(insight, 'insight')}
                </p>
              </div>
              {insight.status === 'positive' && (
                <Badge variant="secondary" className="bg-secondary-soft text-secondary text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Good
                </Badge>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Smart Medication Reminders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-accent" />
            <span>Smart Reminders</span>
          </CardTitle>
          <CardDescription>
            AI-optimized timing based on your routine and medication absorption
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {smartReminders.map((reminder, index) => (
            <div key={index} className={`flex items-center justify-between p-3 rounded-lg border ${
              reminder.status === 'completed' 
                ? 'bg-secondary-soft/30 border-secondary-soft' 
                : reminder.status === 'pending'
                ? 'bg-accent-soft/30 border-accent-soft'
                : 'bg-muted/30 border-muted'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  reminder.status === 'completed' 
                    ? 'bg-secondary' 
                    : reminder.status === 'pending'
                    ? 'bg-accent animate-pulse'
                    : 'bg-muted-foreground'
                }`}></div>
                <div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{reminder.time}</span>
                    <span className="text-sm">{reminder.medication}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {getMessage(reminder, 'note')}
                  </p>
                </div>
              </div>
              {reminder.status === 'pending' && (
                <Button size="sm" variant="healthcare">
                  Take Now
                </Button>
              )}
              {reminder.status === 'completed' && (
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  ✓ Done
                </Badge>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Prevention Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-primary" />
            <span>Daily Prevention Tips</span>
          </CardTitle>
          <CardDescription>
            Personalized based on your location, season, and health profile
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-primary-soft/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="h-4 w-4 text-primary" />
                <span className="font-medium text-sm">Heart Health</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {language === 'hi' 
                  ? 'आज 30 मिनट टहलें। वायु गुणवत्ता अच्छी है।' 
                  : language === 'pa'
                  ? 'ਅੱਜ 30 ਮਿੰਟ ਤੁਰੋ। ਹਵਾ ਦੀ ਗੁਣਵੱਤਾ ਚੰਗੀ ਹੈ।'
                  : 'Walk for 30 minutes today. Air quality is good.'}
              </p>
            </div>
            <div className="p-4 bg-secondary-soft/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-4 w-4 text-secondary" />
                <span className="font-medium text-sm">Immunity</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {language === 'hi' 
                  ? 'गर्म पानी और नींबू लें। विटामिन C बढ़ाएं।' 
                  : language === 'pa'
                  ? 'ਗਰਮ ਪਾਣੀ ਅਤੇ ਨਿੰਬੂ ਲਓ। ਵਿਟਾਮਿਨ C ਵਧਾਓ।'
                  : 'Take warm water with lemon. Boost Vitamin C.'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIHealthAssistant;