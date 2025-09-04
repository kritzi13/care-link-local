import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Download, 
  Upload, 
  Search, 
  Filter,
  Calendar,
  User,
  Activity,
  Pill,
  Stethoscope,
  TestTube,
  Heart,
  Eye,
  Share,
  Lock,
  Cloud,
  Smartphone
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HealthRecords = () => {
  const { t } = useLanguage();

  const healthRecords = [
    {
      id: 1,
      type: 'consultation',
      title: t('consultationDrPriya'),
      doctor: 'Dr. Priya Sharma',
      date: '2024-01-20',
      category: 'General Medicine',
      status: 'completed',
      summary: t('bloodPressureCheckup'),
      attachments: 2,
      icon: Stethoscope,
      offline: true
    },
    {
      id: 2,
      type: 'lab_report',
      title: t('bloodTestResults'),
      doctor: 'Lab Technician',
      date: '2024-01-18',
      category: 'Laboratory',
      status: 'reviewed',
      summary: t('allParametersNormal'),
      attachments: 1,
      icon: TestTube,
      offline: true
    },
    {
      id: 3,
      type: 'prescription',
      title: t('hypertensionMedication'),
      doctor: 'Dr. Priya Sharma',
      date: '2024-01-20',
      category: 'Prescription',
      status: 'active',
      summary: 'Amlodipine 5mg, Metoprolol 25mg',
      attachments: 1,
      icon: Pill,
      offline: true
    },
    {
      id: 4,
      type: 'vital_signs',
      title: t('dailyVitalSigns'),
      doctor: 'Self-recorded',
      date: '2024-01-22',
      category: 'Monitoring',
      status: 'recorded',
      summary: t('bpHeartRateNormal'),
      attachments: 0,
      icon: Heart,
      offline: true
    },
    {
      id: 5,
      type: 'specialist',
      title: t('eyeExamination'),
      doctor: 'Dr. Ravi Ophthalmologist',
      date: '2024-01-15',
      category: 'Specialist',
      status: 'completed',
      summary: t('visionTestNormal'),
      attachments: 3,
      icon: Eye,
      offline: false
    }
  ];

  const consultationHistory = [
    {
      date: '2024-01-20',
      doctor: 'Dr. Priya Sharma',
      type: 'Video Call',
      duration: '15 min',
      diagnosis: t('hypertensionManagement'),
      prescription: t('continueMedication'),
      followUp: '2 weeks'
    },
    {
      date: '2024-01-05',
      doctor: 'Dr. Amit Patel',
      type: 'WhatsApp Chat',
      duration: '25 min',
      diagnosis: t('diabetesConsultation'),
      prescription: t('adjustDosage'),
      followUp: '1 month'
    },
    {
      date: '2023-12-20',
      doctor: 'Dr. Sunita Reddy',
      type: 'In-person',
      duration: '30 min',
      diagnosis: t('routineCheckup'),
      prescription: t('noMedicationNeeded'),
      followUp: '3 months'
    }
  ];

  const offlineStats = {
    totalRecords: 24,
    offlineAvailable: 20,
    lastSync: '2 hours ago',
    storageUsed: '45 MB',
    storageLimit: '100 MB'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'active': return 'bg-blue-500';
      case 'reviewed': return 'bg-purple-500';
      case 'recorded': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'consultation': return 'text-blue-600 bg-blue-50';
      case 'lab_report': return 'text-purple-600 bg-purple-50';
      case 'prescription': return 'text-green-600 bg-green-50';
      case 'vital_signs': return 'text-red-600 bg-red-50';
      case 'specialist': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Offline Access Status */}
      <Card className="bg-gradient-to-r from-primary-soft to-secondary-soft border-none">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Smartphone className="h-6 w-6 mr-2 text-primary" />
              {t('offlineHealthRecords')}
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <Cloud className="h-3 w-3 mr-1" />
              {t('synced')}
            </Badge>
          </CardTitle>
          <CardDescription className="text-primary/80">
            {t('accessRecordsAnywhere')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">{offlineStats.totalRecords}</div>
              <div className="text-sm text-secondary/80">{t('totalRecords')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{offlineStats.offlineAvailable}</div>
              <div className="text-sm text-accent/80">{t('offlineAvailable')}</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-primary">{offlineStats.storageUsed}</div>
              <div className="text-sm text-primary/80">{t('storageUsed')}</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-muted-foreground">{offlineStats.lastSync}</div>
              <div className="text-sm text-muted-foreground">{t('lastSync')}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="records" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="records">{t('healthRecords')}</TabsTrigger>
          <TabsTrigger value="consultations">{t('consultationHistory')}</TabsTrigger>
        </TabsList>

        <TabsContent value="records" className="space-y-4">
          {/* Search and Filter */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  {t('myHealthRecords')}
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  {t('uploadRecord')}
                </Button>
              </div>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder={t('searchRecords')} className="pl-10" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  {t('filter')}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {healthRecords.map((record) => (
                  <div key={record.id} className="p-4 border rounded-lg hover:bg-accent-soft/20 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full ${record.offline ? 'bg-green-50' : 'bg-muted'}`}>
                          <record.icon className={`h-5 w-5 ${record.offline ? 'text-green-600' : 'text-muted-foreground'}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{record.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {record.doctor}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {record.date}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{record.summary}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {record.offline && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                            <Smartphone className="h-3 w-3 mr-1" />
                            {t('offline')}
                          </Badge>
                        )}
                        <Badge className={getTypeColor(record.type)}>
                          {t(record.type)}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(record.status)}`}></div>
                        <span className="text-sm text-muted-foreground">{t(record.status)}</span>
                        {record.attachments > 0 && (
                          <span className="text-sm text-muted-foreground">
                            {record.attachments} {t('attachments')}
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          {t('view')}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          {t('download')}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="h-4 w-4 mr-2" />
                          {t('share')}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consultations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="h-5 w-5 mr-2 text-secondary" />
                {t('consultationHistory')}
              </CardTitle>
              <CardDescription>
                {t('allYourConsultations')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {consultationHistory.map((consultation, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{consultation.doctor}</h3>
                          <Badge variant="outline">{consultation.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {consultation.date}
                          </span>
                          <span>{consultation.duration}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        {t('viewReport')}
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-muted-foreground">{t('diagnosis')}: </span>
                        <span>{consultation.diagnosis}</span>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">{t('prescription')}: </span>
                        <span>{consultation.prescription}</span>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">{t('followUp')}: </span>
                        <span>{consultation.followUp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Privacy & Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="h-5 w-5 mr-2 text-green-600" />
            {t('privacySecurity')}
          </CardTitle>
          <CardDescription>
            {t('yourDataIsSecure')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold">{t('encrypted')}</h4>
              <p className="text-sm text-muted-foreground">{t('endToEndEncryption')}</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold">{t('secureBackup')}</h4>
              <p className="text-sm text-muted-foreground">{t('cloudBackupSecure')}</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Smartphone className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold">{t('offlineFirst')}</h4>
              <p className="text-sm text-muted-foreground">{t('worksWithoutInternet')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthRecords;