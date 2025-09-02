import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Pill, 
  Clock, 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  RefreshCw,
  Info,
  Phone
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  frequency: string;
  duration: string;
  doctor: string;
  prescribedDate: string;
  refillsLeft: number;
  status: 'active' | 'completed' | 'pending_refill';
  instructions: string;
  nextDose?: string;
  sideEffects: string[];
}

const PrescriptionManager = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [prescriptions] = useState<Prescription[]>([
    {
      id: "1",
      medication: "Amlodipine",
      dosage: "5mg",
      frequency: "Once daily",
      duration: "3 months",
      doctor: "Dr. Priya Sharma",
      prescribedDate: "2024-01-15",
      refillsLeft: 2,
      status: "active",
      instructions: "Take with food in the morning",
      nextDose: "Tomorrow 8:00 AM",
      sideEffects: ["Swelling", "Dizziness", "Fatigue"]
    },
    {
      id: "2",
      medication: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      duration: "6 months",
      doctor: "Dr. Amit Patel",
      prescribedDate: "2024-01-20",
      refillsLeft: 0,
      status: "pending_refill",
      instructions: "Take with meals",
      nextDose: "Today 7:00 PM",
      sideEffects: ["Nausea", "Stomach upset"]
    },
    {
      id: "3",
      medication: "Vitamin D3",
      dosage: "1000 IU",
      frequency: "Once daily",
      duration: "2 months",
      doctor: "Dr. Sunita Reddy",
      prescribedDate: "2024-02-01",
      refillsLeft: 1,
      status: "completed",
      instructions: "Take with breakfast",
      sideEffects: []
    }
  ]);

  const handleSetReminder = (prescription: Prescription) => {
    toast({
      title: t('reminderSet'),
      description: `${t('reminderFor')} ${prescription.medication} - ${prescription.nextDose}`,
    });
  };

  const handleRefillRequest = (prescription: Prescription) => {
    toast({
      title: t('refillRequested'),
      description: `${t('refillRequestFor')} ${prescription.medication}`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-secondary text-secondary-foreground';
      case 'pending_refill': return 'bg-accent text-accent-foreground';
      case 'completed': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4" />;
      case 'pending_refill': return <AlertTriangle className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Pill className="h-5 w-5 mr-2 text-primary" />
          {t('myPrescriptions')}
        </CardTitle>
        <CardDescription>
          {t('manageMedications')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {prescriptions.map((prescription) => (
          <div key={prescription.id} className="border rounded-lg p-4 hover:bg-accent-soft/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-lg">{prescription.medication}</h3>
                  <Badge className={getStatusColor(prescription.status)}>
                    {getStatusIcon(prescription.status)}
                    <span className="ml-1">{t(prescription.status)}</span>
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>{prescription.dosage}</strong> - {prescription.frequency}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t('prescribedBy')}: {prescription.doctor}
                </p>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Info className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>{prescription.medication}</DialogTitle>
                    <DialogDescription>
                      {t('prescriptionDetails')}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm">{t('dosageInstructions')}</h4>
                      <p className="text-sm text-muted-foreground">{prescription.instructions}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm">{t('duration')}</h4>
                      <p className="text-sm text-muted-foreground">{prescription.duration}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm">{t('refillsRemaining')}</h4>
                      <p className="text-sm text-muted-foreground">{prescription.refillsLeft}</p>
                    </div>
                    
                    {prescription.sideEffects.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-sm text-accent">{t('possibleSideEffects')}</h4>
                        <ul className="text-sm text-muted-foreground list-disc list-inside">
                          {prescription.sideEffects.map((effect, index) => (
                            <li key={index}>{effect}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Phone className="h-4 w-4 mr-2" />
                        {t('callDoctor')}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {prescription.nextDose && prescription.status === 'active' && (
              <div className="flex items-center justify-between bg-primary-soft rounded-lg p-3 mb-3">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{t('nextDose')}: {prescription.nextDose}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleSetReminder(prescription)}
                >
                  <Calendar className="h-4 w-4 mr-1" />
                  {t('remind')}
                </Button>
              </div>
            )}

            <div className="flex space-x-2">
              {prescription.status === 'pending_refill' && (
                <Button 
                  variant="healthcare" 
                  size="sm"
                  onClick={() => handleRefillRequest(prescription)}
                  className="flex-1"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  {t('requestRefill')}
                </Button>
              )}
              
              {prescription.status === 'active' && prescription.refillsLeft === 0 && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleRefillRequest(prescription)}
                  className="flex-1"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  {t('requestRefill')}
                </Button>
              )}
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t">
          <Button variant="healthcare" className="w-full">
            <Pill className="h-4 w-4 mr-2" />
            {t('addNewPrescription')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrescriptionManager;