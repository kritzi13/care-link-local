import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Heart, Users, Shield } from "lucide-react";
import { useState } from "react";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    age: "",
    village: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-care flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-8 w-8 text-white" />
            <h1 className="text-3xl font-bold text-white">CareLink</h1>
          </div>
          <p className="text-white/90">Join thousands getting better healthcare</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  num <= step 
                    ? 'bg-white text-primary' 
                    : 'bg-white/30 text-white'
                }`}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <Card className="shadow-care">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {step === 1 && "Welcome to CareLink"}
              {step === 2 && "Tell us about yourself"}
              {step === 3 && "Almost there!"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Enter your phone number to get started"}
              {step === 2 && "Help us provide better care"}
              {step === 3 && "Connect with local helpers"}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="bg-primary-soft p-4 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary">Your privacy is protected</p>
                      <p className="text-xs text-primary/80">We only use your number to connect you with doctors</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Your age"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="village">Village/Area</Label>
                  <Input
                    id="village"
                    placeholder="Your village or area name"
                    value={formData.village}
                    onChange={(e) => handleInputChange("village", e.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="bg-secondary-soft p-6 rounded-lg text-center">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-secondary mb-2">Local Helper Available</h3>
                  <p className="text-sm text-secondary/80 mb-4">
                    Rajesh Kumar from your area is ready to help you complete your registration and answer any questions.
                  </p>
                  <Button variant="secondary" size="sm" className="mb-2">
                    Call Helper: +91 98765 43210
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Or continue on your own - you're all set!
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              {step > 1 && (
                <Button variant="outline" onClick={prevStep}>
                  Back
                </Button>
              )}
              
              <Button 
                variant="healthcare" 
                onClick={step === 3 ? () => window.location.href = "/dashboard" : nextStep}
                className="ml-auto"
              >
                {step === 3 ? "Enter CareLink" : "Continue"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-white/80 text-sm">
            Need help? Call our support: <span className="font-medium">1800-CARE-LINK</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;