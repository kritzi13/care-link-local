import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'pa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Header
    'carelink': 'CareLink',
    'getStarted': 'Get Started',
    
    // Hero Section
    'healthcareForEveryVillage': 'Healthcare for Every Village',
    'heroDescription': 'Connecting rural communities with doctors through WhatsApp. Simple, familiar, and accessible healthcare for everyone.',
    'startRegistration': 'Start Registration',
    'connectWithDoctor': 'Connect with Doctor',
    
    // Features
    'simpleHealthcarePowerfulImpact': 'Simple Healthcare, Powerful Impact',
    'featuresDescription': 'Everything you need to access quality healthcare, designed for rural communities',
    'phoneRegistration': 'Phone Registration',
    'phoneRegistrationDesc': 'Simple phone-based signup with local helper assistance',
    'whatsappDoctors': 'WhatsApp Doctors',
    'whatsappDoctorsDesc': 'Connect with doctors via familiar WhatsApp chats and calls',
    'uploadReports': 'Upload Reports',
    'uploadReportsDesc': 'Share medical reports and symptoms easily through photos',
    'bookAppointments': 'Book Appointments',
    'bookAppointmentsDesc': 'Schedule doctor visits with simple one-click booking',
    'prescriptions': 'Prescriptions',
    'prescriptionsDesc': 'Access prescriptions and find nearby pharmacies',
    'volunteerHelp': 'Volunteer Help',
    'volunteerHelpDesc': 'Connect with NGOs and volunteers for support',
    'healthEducation': 'Health Education',
    'healthEducationDesc': 'Learn about health, nutrition, and medicine in local language',
    'smartReminders': 'Smart Reminders',
    'smartRemindersDesc': 'Get appointment and medication reminders via WhatsApp',
    
    // CTA Section
    'readyToTransform': 'Ready to Transform Rural Healthcare?',
    'ctaDescription': 'Join thousands of patients already connected to quality healthcare through CareLink',
    'startYourJourney': 'Start Your Journey',
    
    // Footer
    'empoweringCommunities': 'Empowering rural communities with accessible healthcare',
    
    // Register Page
    'welcomeToCareLink': 'Welcome to CareLink',
    'tellUsAboutYourself': 'Tell us about yourself',
    'almostThere': 'Almost there!',
    'enterPhoneToStart': 'Enter your phone number to get started',
    'helpUsProvide': 'Help us provide better care',
    'connectWithHelpers': 'Connect with local helpers',
    'phoneNumber': 'Phone Number',
    'privacyProtected': 'Your privacy is protected',
    'privacyDescription': 'We only use your number to connect you with doctors',
    'fullName': 'Full Name',
    'enterFullName': 'Enter your full name',
    'age': 'Age',
    'yourAge': 'Your age',
    'villageArea': 'Village/Area',
    'yourVillage': 'Your village or area name',
    'localHelperAvailable': 'Local Helper Available',
    'helperDescription': 'Rajesh Kumar from your area is ready to help you complete your registration and answer any questions.',
    'callHelper': 'Call Helper: +91 98765 43210',
    'continueOnYour': 'Or continue on your own - you\'re all set!',
    'back': 'Back',
    'continue': 'Continue',
    'enterCareLink': 'Enter CareLink',
    'needHelp': 'Need help? Call our support: 1800-CARE-LINK',
    'joinThousands': 'Join thousands getting better healthcare',
    
    // Dashboard
    'welcome': 'Welcome',
    'reminders': 'Reminders',
    'emergency': 'Emergency',
    'whatDoYouNeed': 'What do you need today?',
    'chatWithDoctor': 'Chat with Doctor',
    'startWhatsapp': 'Start WhatsApp conversation',
    'openWhatsapp': 'Open WhatsApp',
    'bookAppointment': 'Book Appointment',
    'scheduleVisit': 'Schedule your visit',
    'bookNow': 'Book Now',
    'shareReport': 'Share Report',
    'uploadMedical': 'Upload medical reports',
    'upload': 'Upload',
    'getVolunteerHelp': 'Get Volunteer Help',
    'connectLocalSupport': 'Connect with local support',
    'findHelp': 'Find Help',
    'urgent': 'Urgent',
    'availableDoctors': 'Available Doctors',
    'connectInstantly': 'Connect instantly via WhatsApp or schedule a call',
    'online': 'online',
    'busy': 'busy',
    'languages': 'Languages',
    'recentActivity': 'Recent Activity',
    'healthTips': 'Health Tips',
    'monsoonHealthCare': 'Monsoon Health Care',
    'monsoonTips': 'Tips to stay healthy during rainy season',
    'viewAllTips': 'View All Tips',
    
    // Health Education
    'learnAboutHealth': 'Learn About Your Health',
    'healthEducationHero': 'Simple, easy-to-understand health information in your language. Learn how to stay healthy and take care of your family.',
    'backToHome': 'Back to Home',
    'healthBasics': 'Health Basics',
    'nutrition': 'Nutrition',
    'medicineSafety': 'Medicine Safety',
    'motherChild': 'Mother & Child',
    'prevention': 'Prevention',
    'essentialKnowledge': 'Essential knowledge for better health and wellbeing',
    'video': 'Video',
    'article': 'Article',
    'watch': 'Watch',
    'read': 'Read',
    'emergencyHealthInfo': 'Emergency Health Information',
    'emergencyDescription': 'Important numbers and steps for health emergencies',
    'emergencyHelpline': 'Emergency Helpline',
    'poisonControl': 'Poison Control',
    'mentalHealth': 'Mental Health',
    'viewEmergencyGuide': 'View Emergency Guide',
    
    // Health Education Content
    'whenToSeeDoctor': 'When to See a Doctor',
    'whenToSeeDoctorDesc': 'Learn the warning signs that require immediate medical attention',
    'basicFirstAid': 'Basic First Aid',
    'basicFirstAidDesc': 'Simple first aid steps everyone should know',
    'understandingBody': 'Understanding Your Body',
    'understandingBodyDesc': 'Basic body functions and health signs to watch for',
    'healthyEating': 'Healthy Eating on a Budget',
    'healthyEatingDesc': 'Nutritious meals with local, affordable ingredients',
    'childrensNutrition': 'Children\'s Nutrition',
    'childrensNutritionDesc': 'Essential nutrients for growing children',
    'cleanWaterFood': 'Clean Water & Food Safety',
    'cleanWaterFoodDesc': 'Preventing illness through safe food practices',
    'takingMedicine': 'Taking Medicine Safely',
    'takingMedicineDesc': 'How to read prescriptions and take medicines correctly',
    'storingMedicines': 'Storing Medicines',
    'storingMedicinesDesc': 'Proper storage to keep medicines effective',
    'medicineMistakes': 'Common Medicine Mistakes',
    'medicineMistakesDesc': 'Avoiding dangerous medication errors',
    'pregnancyCare': 'Pregnancy Care',
    'pregnancyCareDesc': 'Essential care during pregnancy for mother and baby',
    'newbornCare': 'Newborn Care',
    'newbornCareDesc': 'Basic care for newborns in the first months',
    'childDevelopment': 'Child Development',
    'childDevelopmentDesc': 'Tracking healthy growth and development milestones',
    'preventingDiseases': 'Preventing Common Diseases',
    'preventingDiseasesDesc': 'Simple steps to prevent illness in your community',
    'vaccinationGuide': 'Vaccination Guide',
    'vaccinationGuideDesc': 'Understanding vaccines for children and adults',
    'hygienePractices': 'Hygiene Practices',
    'hygienePracticesDesc': 'Daily hygiene habits for better health',
  },
  
  hi: {
    // Header
    'carelink': 'केयरलिंक',
    'getStarted': 'शुरू करें',
    
    // Hero Section
    'healthcareForEveryVillage': 'हर गांव के लिए स्वास्थ्य सेवा',
    'heroDescription': 'व्हाट्सऐप के माध्यम से ग्रामीण समुदायों को डॉक्टरों से जोड़ना। सरल, परिचित और सबके लिए सुलभ स्वास्थ्य सेवा।',
    'startRegistration': 'पंजीकरण शुरू करें',
    'connectWithDoctor': 'डॉक्टर से जुड़ें',
    
    // Features
    'simpleHealthcarePowerfulImpact': 'सरल स्वास्थ्य सेवा, शक्तिशाली प्रभाव',
    'featuresDescription': 'गुणवत्तापूर्ण स्वास्थ्य सेवा तक पहुंचने के लिए आपको जो कुछ भी चाहिए, ग्रामीण समुदायों के लिए डिज़ाइन किया गया',
    'phoneRegistration': 'फोन पंजीकरण',
    'phoneRegistrationDesc': 'स्थानीय सहायक की सहायता से सरल फोन-आधारित साइनअप',
    'whatsappDoctors': 'व्हाट्सऐप डॉक्टर',
    'whatsappDoctorsDesc': 'परिचित व्हाट्सऐप चैट और कॉल के माध्यम से डॉक्टरों से जुड़ें',
    'uploadReports': 'रिपोर्ट अपलोड करें',
    'uploadReportsDesc': 'फोटो के माध्यम से मेडिकल रिपोर्ट और लक्षण आसानी से साझा करें',
    'bookAppointments': 'अपॉइंटमेंट बुक करें',
    'bookAppointmentsDesc': 'सरल वन-क्लिक बुकिंग के साथ डॉक्टर की मुलाकात शेड्यूल करें',
    'prescriptions': 'प्रिस्क्रिप्शन',
    'prescriptionsDesc': 'प्रिस्क्रिप्शन तक पहुंच और नजदीकी फार्मेसी खोजें',
    'volunteerHelp': 'स्वयंसेवक सहायता',
    'volunteerHelpDesc': 'सहायता के लिए NGO और स्वयंसेवकों से जुड़ें',
    'healthEducation': 'स्वास्थ्य शिक्षा',
    'healthEducationDesc': 'स्थानीय भाषा में स्वास्थ्य, पोषण और दवा के बारे में जानें',
    'smartReminders': 'स्मार्ट रिमाइंडर',
    'smartRemindersDesc': 'व्हाट्सऐप के माध्यम से अपॉइंटमेंट और दवा की याददिलाने वाली सूचनाएं प्राप्त करें',
    
    // CTA Section
    'readyToTransform': 'ग्रामीण स्वास्थ्य सेवा को बदलने के लिए तैयार हैं?',
    'ctaDescription': 'हजारों मरीज़ों के साथ जुड़ें जो पहले से ही केयरलिंक के माध्यम से गुणवत्तापूर्ण स्वास्थ्य सेवा से जुड़े हुए हैं',
    'startYourJourney': 'अपनी यात्रा शुरू करें',
    
    // Footer
    'empoweringCommunities': 'सुलभ स्वास्थ्य सेवा के साथ ग्रामीण समुदायों को सशक्त बनाना',
    
    // Register Page
    'welcomeToCareLink': 'केयरलिंक में आपका स्वागत है',
    'tellUsAboutYourself': 'अपने बारे में बताएं',
    'almostThere': 'लगभग हो गया!',
    'enterPhoneToStart': 'शुरू करने के लिए अपना फोन नंबर दर्ज करें',
    'helpUsProvide': 'बेहतर देखभाल प्रदान करने में हमारी सहायता करें',
    'connectWithHelpers': 'स्थानीय सहायकों से जुड़ें',
    'phoneNumber': 'फोन नंबर',
    'privacyProtected': 'आपकी गोपनीयता सुरक्षित है',
    'privacyDescription': 'हम आपका नंबर केवल आपको डॉक्टरों से जोड़ने के लिए उपयोग करते हैं',
    'fullName': 'पूरा नाम',
    'enterFullName': 'अपना पूरा नाम दर्ज करें',
    'age': 'उम्र',
    'yourAge': 'आपकी उम्र',
    'villageArea': 'गांव/क्षेत्र',
    'yourVillage': 'आपका गांव या क्षेत्र का नाम',
    'localHelperAvailable': 'स्थानीय सहायक उपलब्ध',
    'helperDescription': 'आपके क्षेत्र से राजेश कुमार आपका पंजीकरण पूरा करने और किसी भी प्रश्न का उत्तर देने के लिए तैयार है।',
    'callHelper': 'सहायक को कॉल करें: +91 98765 43210',
    'continueOnYour': 'या अपने दम पर जारी रखें - आप तैयार हैं!',
    'back': 'वापस',
    'continue': 'जारी रखें',
    'enterCareLink': 'केयरलिंक में प्रवेश करें',
    'needHelp': 'मदद चाहिए? हमारे सपोर्ट को कॉल करें: 1800-CARE-LINK',
    'joinThousands': 'बेहतर स्वास्थ्य सेवा पाने वाले हजारों लोगों के साथ जुड़ें',
    
    // Dashboard
    'welcome': 'स्वागत',
    'reminders': 'रिमाइंडर',
    'emergency': 'आपातकाल',
    'whatDoYouNeed': 'आज आपको क्या चाहिए?',
    'chatWithDoctor': 'डॉक्टर से चैट करें',
    'startWhatsapp': 'व्हाट्सऐप बातचीत शुरू करें',
    'openWhatsapp': 'व्हाट्सऐप खोलें',
    'bookAppointment': 'अपॉइंटमेंट बुक करें',
    'scheduleVisit': 'अपनी मुलाकात शेड्यूल करें',
    'bookNow': 'अभी बुक करें',
    'shareReport': 'रिपोर्ट साझा करें',
    'uploadMedical': 'मेडिकल रिपोर्ट अपलोड करें',
    'upload': 'अपलोड करें',
    'getVolunteerHelp': 'स्वयंसेवक सहायता प्राप्त करें',
    'connectLocalSupport': 'स्थानीय सहायता से जुड़ें',
    'findHelp': 'सहायता खोजें',
    'urgent': 'तत्काल',
    'availableDoctors': 'उपलब्ध डॉक्टर',
    'connectInstantly': 'व्हाट्सऐप के माध्यम से तुरंत जुड़ें या कॉल शेड्यूल करें',
    'online': 'ऑनलाइन',
    'busy': 'व्यस्त',
    'languages': 'भाषाएं',
    'recentActivity': 'हाल की गतिविधि',
    'healthTips': 'स्वास्थ्य सुझाव',
    'monsoonHealthCare': 'मानसून स्वास्थ्य देखभाल',
    'monsoonTips': 'बारिश के मौसम में स्वस्थ रहने के सुझाव',
    'viewAllTips': 'सभी सुझाव देखें',
    
    // Health Education
    'learnAboutHealth': 'अपने स्वास्थ्य के बारे में जानें',
    'healthEducationHero': 'आपकी भाषा में सरल, समझने योग्य स्वास्थ्य जानकारी। स्वस्थ रहने और अपने परिवार की देखभाल करने के बारे में जानें।',
    'backToHome': 'होम पर वापस जाएं',
    'healthBasics': 'स्वास्थ्य की मूल बातें',
    'nutrition': 'पोषण',
    'medicineSafety': 'दवा सुरक्षा',
    'motherChild': 'मां और बच्चा',
    'prevention': 'रोकथाम',
    'essentialKnowledge': 'बेहतर स्वास्थ्य और कल्याण के लिए आवश्यक ज्ञान',
    'video': 'वीडियो',
    'article': 'लेख',
    'watch': 'देखें',
    'read': 'पढ़ें',
    'emergencyHealthInfo': 'आपातकालीन स्वास्थ्य जानकारी',
    'emergencyDescription': 'स्वास्थ्य आपातकाल के लिए महत्वपूर्ण नंबर और कदम',
    'emergencyHelpline': 'आपातकालीन हेल्पलाइन',
    'poisonControl': 'विष नियंत्रण',
    'mentalHealth': 'मानसिक स्वास्थ्य',
    'viewEmergencyGuide': 'आपातकालीन गाइड देखें',
    
    // Health Education Content
    'whenToSeeDoctor': 'डॉक्टर से कब मिलें',
    'whenToSeeDoctorDesc': 'उन चेतावनी संकेतों के बारे में जानें जिनके लिए तत्काल चिकित्सा की आवश्यकता होती है',
    'basicFirstAid': 'बुनियादी प्राथमिक चिकित्सा',
    'basicFirstAidDesc': 'सरल प्राथमिक चिकित्सा के कदम जो हर किसी को जानना चाहिए',
    'understandingBody': 'अपने शरीर को समझना',
    'understandingBodyDesc': 'शरीर की बुनियादी कार्यप्रणाली और देखने योग्य स्वास्थ्य संकेत',
    'healthyEating': 'बजट में स्वस्थ खाना',
    'healthyEatingDesc': 'स्थानीय, किफायती सामग्री के साथ पौष्टिक भोजन',
    'childrensNutrition': 'बच्चों का पोषण',
    'childrensNutritionDesc': 'बढ़ते बच्चों के लिए आवश्यक पोषक तत्व',
    'cleanWaterFood': 'स्वच्छ पानी और खाद्य सुरक्षा',
    'cleanWaterFoodDesc': 'सुरक्षित खाद्य प्रथाओं के माध्यम से बीमारी की रोकथाम',
    'takingMedicine': 'दवा सुरक्षित तरीके से लेना',
    'takingMedicineDesc': 'प्रिस्क्रिप्शन पढ़ने और दवाइयां सही तरीके से लेने का तरीका',
    'storingMedicines': 'दवाओं का भंडारण',
    'storingMedicinesDesc': 'दवाओं को प्रभावी रखने के लिए उचित भंडारण',
    'medicineMistakes': 'दवा की सामान्य गलतियां',
    'medicineMistakesDesc': 'खतरनाक दवा की त्रुटियों से बचना',
    'pregnancyCare': 'गर्भावस्था की देखभाल',
    'pregnancyCareDesc': 'मां और बच्चे के लिए गर्भावस्था के दौरान आवश्यक देखभाल',
    'newbornCare': 'नवजात की देखभाल',
    'newbornCareDesc': 'पहले महीनों में नवजात शिशुओं की बुनियादी देखभाल',
    'childDevelopment': 'बाल विकास',
    'childDevelopmentDesc': 'स्वस्थ विकास और विकास मील के पत्थर को ट्रैक करना',
    'preventingDiseases': 'सामान्य बीमारियों की रोकथाम',
    'preventingDiseasesDesc': 'अपने समुदाय में बीमारी को रोकने के सरल कदम',
    'vaccinationGuide': 'टीकाकरण गाइड',
    'vaccinationGuideDesc': 'बच्चों और वयस्कों के लिए टीकों को समझना',
    'hygienePractices': 'स्वच्छता प्रथाएं',
    'hygienePracticesDesc': 'बेहतर स्वास्थ्य के लिए दैनिक स्वच्छता की आदतें',
  },
  
  pa: {
    // Header
    'carelink': 'ਕੇਅਰਲਿੰਕ',
    'getStarted': 'ਸ਼ੁਰੂ ਕਰੋ',
    
    // Hero Section
    'healthcareForEveryVillage': 'ਹਰ ਪਿੰਡ ਲਈ ਸਿਹਤ ਸੇਵਾ',
    'heroDescription': 'ਵਟਸਐਪ ਰਾਹੀਂ ਪੇਂਡੂ ਭਾਈਚਾਰਿਆਂ ਨੂੰ ਡਾਕਟਰਾਂ ਨਾਲ ਜੋੜਨਾ। ਸਿੱਧੀ, ਜਾਣੀ-ਪਛਾਣੀ ਅਤੇ ਸਭ ਲਈ ਪਹੁੰਚਯੋਗ ਸਿਹਤ ਸੇਵਾ।',
    'startRegistration': 'ਰਜਿਸਟਰੇਸ਼ਨ ਸ਼ੁਰੂ ਕਰੋ',
    'connectWithDoctor': 'ਡਾਕਟਰ ਨਾਲ ਜੁੜੋ',
    
    // Features
    'simpleHealthcarePowerfulImpact': 'ਸਾਦੀ ਸਿਹਤ ਸੇਵਾ, ਸ਼ਕਤੀਸ਼ਾਲੀ ਪ੍ਰਭਾਵ',
    'featuresDescription': 'ਗੁਣਵੱਤਾ ਸਿਹਤ ਸੇਵਾ ਤੱਕ ਪਹੁੰਚ ਲਈ ਤੁਹਾਨੂੰ ਜੋ ਕੁਝ ਚਾਹੀਦਾ ਹੈ, ਪੇਂਡੂ ਭਾਈਚਾਰਿਆਂ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ',
    'phoneRegistration': 'ਫੋਨ ਰਜਿਸਟਰੇਸ਼ਨ',
    'phoneRegistrationDesc': 'ਸਥਾਨਕ ਸਹਾਇਕ ਦੀ ਸਹਾਇਤਾ ਨਾਲ ਸਿੱਧਾ ਫੋਨ-ਅਧਾਰਤ ਸਾਇਨਅਪ',
    'whatsappDoctors': 'ਵਟਸਐਪ ਡਾਕਟਰ',
    'whatsappDoctorsDesc': 'ਜਾਣੇ-ਪਛਾਣੇ ਵਟਸਐਪ ਚੈਟ ਅਤੇ ਕਾਲਾਂ ਰਾਹੀਂ ਡਾਕਟਰਾਂ ਨਾਲ ਜੁੜੋ',
    'uploadReports': 'ਰਿਪੋਰਟਾਂ ਅਪਲੋਡ ਕਰੋ',
    'uploadReportsDesc': 'ਫੋਟੋਆਂ ਰਾਹੀਂ ਮੈਡੀਕਲ ਰਿਪੋਰਟਾਂ ਅਤੇ ਲੱਛਣ ਆਸਾਨੀ ਨਾਲ ਸਾਂਝੇ ਕਰੋ',
    'bookAppointments': 'ਮੁਲਾਕਾਤਾਂ ਬੁੱਕ ਕਰੋ',
    'bookAppointmentsDesc': 'ਸਿੱਧੀ ਵਨ-ਕਲਿੱਕ ਬੁਕਿੰਗ ਨਾਲ ਡਾਕਟਰ ਦੀ ਮੁਲਾਕਾਤ ਸ਼ਿਡਿਊਲ ਕਰੋ',
    'prescriptions': 'ਨੁਸਖੇ',
    'prescriptionsDesc': 'ਨੁਸਖਿਆਂ ਤੱਕ ਪਹੁੰਚ ਅਤੇ ਨੇੜਲੀ ਦਵਾਈ ਦੀ ਦੁਕਾਨ ਲੱਭੋ',
    'volunteerHelp': 'ਸੇਵਾਦਾਰ ਸਹਾਇਤਾ',
    'volunteerHelpDesc': 'ਸਹਾਇਤਾ ਲਈ NGO ਅਤੇ ਸੇਵਾਦਾਰਾਂ ਨਾਲ ਜੁੜੋ',
    'healthEducation': 'ਸਿਹਤ ਸਿੱਖਿਆ',
    'healthEducationDesc': 'ਸਥਾਨਕ ਭਾਸ਼ਾ ਵਿੱਚ ਸਿਹਤ, ਪੋਸ਼ਣ ਅਤੇ ਦਵਾਈ ਬਾਰੇ ਸਿੱਖੋ',
    'smartReminders': 'ਸਮਾਰਟ ਰਿਮਾਇੰਡਰ',
    'smartRemindersDesc': 'ਵਟਸਐਪ ਰਾਹੀਂ ਮੁਲਾਕਾਤ ਅਤੇ ਦਵਾਈ ਦੇ ਰਿਮਾਇੰਡਰ ਪ੍ਰਾਪਤ ਕਰੋ',
    
    // CTA Section
    'readyToTransform': 'ਪੇਂਡੂ ਸਿਹਤ ਸੇਵਾ ਨੂੰ ਬਦਲਣ ਲਈ ਤਿਆਰ ਹੋ?',
    'ctaDescription': 'ਹਜ਼ਾਰਾਂ ਮਰੀਜ਼ਾਂ ਨਾਲ ਜੁੜੋ ਜੋ ਪਹਿਲਾਂ ਹੀ ਕੇਅਰਲਿੰਕ ਰਾਹੀਂ ਗੁਣਵੱਤਾ ਸਿਹਤ ਸੇਵਾ ਨਾਲ ਜੁੜੇ ਹੋਏ ਹਨ',
    'startYourJourney': 'ਆਪਣੀ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ',
    
    // Footer
    'empoweringCommunities': 'ਪਹੁੰਚਯੋਗ ਸਿਹਤ ਸੇਵਾ ਨਾਲ ਪੇਂਡੂ ਭਾਈਚਾਰਿਆਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ',
    
    // Register Page
    'welcomeToCareLink': 'ਕੇਅਰਲਿੰਕ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
    'tellUsAboutYourself': 'ਸਾਨੂੰ ਆਪਣੇ ਬਾਰੇ ਦੱਸੋ',
    'almostThere': 'ਲਗਭਗ ਹੋ ਗਿਆ!',
    'enterPhoneToStart': 'ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਆਪਣਾ ਫੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ',
    'helpUsProvide': 'ਬਿਹਤਰ ਦੇਖਭਾਲ ਪ੍ਰਦਾਨ ਕਰਨ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰੋ',
    'connectWithHelpers': 'ਸਥਾਨਕ ਸਹਾਇਕਾਂ ਨਾਲ ਜੁੜੋ',
    'phoneNumber': 'ਫੋਨ ਨੰਬਰ',
    'privacyProtected': 'ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਸੁਰੱਖਿਤ ਹੈ',
    'privacyDescription': 'ਅਸੀਂ ਤੁਹਾਡਾ ਨੰਬਰ ਸਿਰਫ਼ ਤੁਹਾਨੂੰ ਡਾਕਟਰਾਂ ਨਾਲ ਜੋੜਨ ਲਈ ਵਰਤਦੇ ਹਾਂ',
    'fullName': 'ਪੂਰਾ ਨਾਮ',
    'enterFullName': 'ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਰਜ ਕਰੋ',
    'age': 'ਉਮਰ',
    'yourAge': 'ਤੁਹਾਡੀ ਉਮਰ',
    'villageArea': 'ਪਿੰਡ/ਇਲਾਕਾ',
    'yourVillage': 'ਤੁਹਾਡੇ ਪਿੰਡ ਜਾਂ ਇਲਾਕੇ ਦਾ ਨਾਮ',
    'localHelperAvailable': 'ਸਥਾਨਕ ਸਹਾਇਕ ਉਪਲਬਧ',
    'helperDescription': 'ਤੁਹਾਡੇ ਇਲਾਕੇ ਤੋਂ ਰਾਜੇਸ਼ ਕੁਮਾਰ ਤੁਹਾਡਾ ਰਜਿਸਟਰੇਸ਼ਨ ਪੂਰਾ ਕਰਨ ਅਤੇ ਕੋਈ ਵੀ ਸਵਾਲ ਦਾ ਜਵਾਬ ਦੇਣ ਲਈ ਤਿਆਰ ਹੈ।',
    'callHelper': 'ਸਹਾਇਕ ਨੂੰ ਕਾਲ ਕਰੋ: +91 98765 43210',
    'continueOnYour': 'ਜਾਂ ਆਪਣੇ ਦਮ ਤੇ ਜਾਰੀ ਰੱਖੋ - ਤੁਸੀਂ ਤਿਆਰ ਹੋ!',
    'back': 'ਪਿੱਛੇ',
    'continue': 'ਜਾਰੀ ਰੱਖੋ',
    'enterCareLink': 'ਕੇਅਰਲਿੰਕ ਵਿੱਚ ਦਾਖ਼ਲ ਹੋਵੋ',
    'needHelp': 'ਮਦਦ ਚਾਹੀਦੀ? ਸਾਡੇ ਸਪੋਰਟ ਨੂੰ ਕਾਲ ਕਰੋ: 1800-CARE-LINK',
    'joinThousands': 'ਬਿਹਤਰ ਸਿਹਤ ਸੇਵਾ ਪਾਣ ਵਾਲੇ ਹਜ਼ਾਰਾਂ ਲੋਕਾਂ ਨਾਲ ਜੁੜੋ',
    
    // Dashboard
    'welcome': 'ਸੁਆਗਤ',
    'reminders': 'ਰਿਮਾਇੰਡਰ',
    'emergency': 'ਐਮਰਜੈਂਸੀ',
    'whatDoYouNeed': 'ਅੱਜ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ?',
    'chatWithDoctor': 'ਡਾਕਟਰ ਨਾਲ ਚੈਟ ਕਰੋ',
    'startWhatsapp': 'ਵਟਸਐਪ ਗੱਲਬਾਤ ਸ਼ੁਰੂ ਕਰੋ',
    'openWhatsapp': 'ਵਟਸਐਪ ਖੋਲ੍ਹੋ',
    'bookAppointment': 'ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰੋ',
    'scheduleVisit': 'ਆਪਣੀ ਮੁਲਾਕਾਤ ਸ਼ਿਡਿਊਲ ਕਰੋ',
    'bookNow': 'ਹੁਣੇ ਬੁੱਕ ਕਰੋ',
    'shareReport': 'ਰਿਪੋਰਟ ਸਾਂਝੀ ਕਰੋ',
    'uploadMedical': 'ਮੈਡੀਕਲ ਰਿਪੋਰਟਾਂ ਅਪਲੋਡ ਕਰੋ',
    'upload': 'ਅਪਲੋਡ ਕਰੋ',
    'getVolunteerHelp': 'ਸੇਵਾਦਾਰ ਸਹਾਇਤਾ ਲਓ',
    'connectLocalSupport': 'ਸਥਾਨਕ ਸਹਾਇਤਾ ਨਾਲ ਜੁੜੋ',
    'findHelp': 'ਸਹਾਇਤਾ ਲੱਭੋ',
    'urgent': 'ਜ਼ਰੂਰੀ',
    'availableDoctors': 'ਉਪਲਬਧ ਡਾਕਟਰ',
    'connectInstantly': 'ਵਟਸਐਪ ਰਾਹੀਂ ਤੁਰੰਤ ਜੁੜੋ ਜਾਂ ਕਾਲ ਸ਼ਿਡਿਊਲ ਕਰੋ',
    'online': 'ਆਨਲਾਈਨ',
    'busy': 'ਵਿਅਸਤ',
    'languages': 'ਭਾਸ਼ਾਵਾਂ',
    'recentActivity': 'ਹਾਲ ਦੀ ਗਤੀਵਿਧੀ',
    'healthTips': 'ਸਿਹਤ ਸੁਝਾਅ',
    'monsoonHealthCare': 'ਮਾਨਸੂਨ ਸਿਹਤ ਦੇਖਭਾਲ',
    'monsoonTips': 'ਬਾਰਸ਼ ਦੇ ਮੌਸਮ ਵਿੱਚ ਸਿਹਤਮੰਦ ਰਹਿਣ ਦੇ ਸੁਝਾਅ',
    'viewAllTips': 'ਸਾਰੇ ਸੁਝਾਅ ਦੇਖੋ',
    
    // Health Education
    'learnAboutHealth': 'ਆਪਣੀ ਸਿਹਤ ਬਾਰੇ ਜਾਣੋ',
    'healthEducationHero': 'ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸਿੱਧੀ, ਸਮਝਣ ਯੋਗ ਸਿਹਤ ਜਾਣਕਾਰੀ। ਸਿਹਤਮੰਦ ਰਹਿਣ ਅਤੇ ਆਪਣੇ ਪਰਿਵਾਰ ਦੀ ਦੇਖਭਾਲ ਕਰਨ ਬਾਰੇ ਸਿੱਖੋ।',
    'backToHome': 'ਘਰ ਵਾਪਸ ਜਾਓ',
    'healthBasics': 'ਸਿਹਤ ਦੀਆਂ ਬੁਨਿਆਦੀ ਗੱਲਾਂ',
    'nutrition': 'ਪੋਸ਼ਣ',
    'medicineSafety': 'ਦਵਾਈ ਸੁਰੱਖਿਆ',
    'motherChild': 'ਮਾਂ ਅਤੇ ਬੱਚਾ',
    'prevention': 'ਰੋਕਥਾਮ',
    'essentialKnowledge': 'ਬਿਹਤਰ ਸਿਹਤ ਅਤੇ ਤੰਦਰੁਸਤੀ ਲਈ ਜ਼ਰੂਰੀ ਗਿਆਨ',
    'video': 'ਵੀਡੀਓ',
    'article': 'ਲੇਖ',
    'watch': 'ਦੇਖੋ',
    'read': 'ਪੜ੍ਹੋ',
    'emergencyHealthInfo': 'ਐਮਰਜੈਂਸੀ ਸਿਹਤ ਜਾਣਕਾਰੀ',
    'emergencyDescription': 'ਸਿਹਤ ਐਮਰਜੈਂਸੀ ਲਈ ਮਹੱਤਵਪੂਰਨ ਨੰਬਰ ਅਤੇ ਕਦਮ',
    'emergencyHelpline': 'ਐਮਰਜੈਂਸੀ ਹੈਲਪਲਾਈਨ',
    'poisonControl': 'ਜ਼ਹਿਰ ਨਿਯੰਤਰਣ',
    'mentalHealth': 'ਮਾਨਸਿਕ ਸਿਹਤ',
    'viewEmergencyGuide': 'ਐਮਰਜੈਂਸੀ ਗਾਈਡ ਦੇਖੋ',
    
    // Health Education Content
    'whenToSeeDoctor': 'ਡਾਕਟਰ ਨੂੰ ਕਦੋਂ ਮਿਲਣਾ',
    'whenToSeeDoctorDesc': 'ਉਨ੍ਹਾਂ ਚੇਤਾਵਨੀ ਦੇ ਸੰਕੇਤਾਂ ਬਾਰੇ ਜਾਣੋ ਜਿਨ੍ਹਾਂ ਲਈ ਤੁਰੰਤ ਡਾਕਟਰੀ ਸਹਾਇਤਾ ਦੀ ਲੋੜ ਹੈ',
    'basicFirstAid': 'ਬੁਨਿਆਦੀ ਪ੍ਰਾਥਮਿਕ ਸਹਾਇਤਾ',
    'basicFirstAidDesc': 'ਸਾਦੇ ਪ੍ਰਾਥਮਿਕ ਸਹਾਇਤਾ ਦੇ ਕਦਮ ਜੋ ਹਰ ਕਿਸੇ ਨੂੰ ਜਾਣਨੇ ਚਾਹੀਦੇ ਹਨ',
    'understandingBody': 'ਆਪਣੇ ਸਰੀਰ ਨੂੰ ਸਮਝਣਾ',
    'understandingBodyDesc': 'ਸਰੀਰ ਦੀਆਂ ਬੁਨਿਆਦੀ ਕਾਰਜਾਂ ਅਤੇ ਦੇਖਣ ਵਾਲੇ ਸਿਹਤ ਸੰਕੇਤਾਂ',
    'healthyEating': 'ਬਜਟ ਵਿੱਚ ਸਿਹਤਮੰਦ ਖਾਣਾ',
    'healthyEatingDesc': 'ਸਥਾਨਕ, ਸਸਤੇ ਸਾਮਗਰੀ ਨਾਲ ਪੌਸ਼ਟਿਕ ਭੋਜਨ',
    'childrensNutrition': 'ਬੱਚਿਆਂ ਦਾ ਪੋਸ਼ਣ',
    'childrensNutritionDesc': 'ਵਧਦੇ ਬੱਚਿਆਂ ਲਈ ਜ਼ਰੂਰੀ ਪੌਸ਼ਟਿਕ ਤੱਤ',
    'cleanWaterFood': 'ਸਾਫ਼ ਪਾਣੀ ਅਤੇ ਭੋਜਨ ਸੁਰੱਖਿਆ',
    'cleanWaterFoodDesc': 'ਸੁਰੱਖਿਤ ਭੋਜਨ ਪ੍ਰਥਾਵਾਂ ਰਾਹੀਂ ਬੀਮਾਰੀ ਦੀ ਰੋਕਥਾਮ',
    'takingMedicine': 'ਦਵਾਈ ਸੁਰੱਖਿਤ ਤਰੀਕੇ ਨਾਲ ਲੈਣਾ',
    'takingMedicineDesc': 'ਨੁਸਖੇ ਪੜ੍ਹਨ ਅਤੇ ਦਵਾਈਆਂ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਲੈਣ ਦਾ ਤਰੀਕਾ',
    'storingMedicines': 'ਦਵਾਈਆਂ ਦਾ ਭੰਡਾਰਣ',
    'storingMedicinesDesc': 'ਦਵਾਈਆਂ ਨੂੰ ਪ੍ਰਭਾਵੀ ਰੱਖਣ ਲਈ ਸਹੀ ਭੰਡਾਰਣ',
    'medicineMistakes': 'ਦਵਾਈ ਦੀਆਂ ਆਮ ਗਲਤੀਆਂ',
    'medicineMistakesDesc': 'ਖਤਰਨਾਕ ਦਵਾਈ ਦੀਆਂ ਗਲਤੀਆਂ ਤੋਂ ਬਚਣਾ',
    'pregnancyCare': 'ਗਰਭ-ਅਵਸਥਾ ਦੀ ਦੇਖਭਾਲ',
    'pregnancyCareDesc': 'ਮਾਂ ਅਤੇ ਬੱਚੇ ਲਈ ਗਰਭ-ਅਵਸਥਾ ਦੌਰਾਨ ਜ਼ਰੂਰੀ ਦੇਖਭਾਲ',
    'newbornCare': 'ਨਵਜੰਮੇ ਦੀ ਦੇਖਭਾਲ',
    'newbornCareDesc': 'ਪਹਿਲੇ ਮਹੀਨਿਆਂ ਵਿੱਚ ਨਵਜੰਮੇ ਬੱਚਿਆਂ ਦੀ ਬੁਨਿਆਦੀ ਦੇਖਭਾਲ',
    'childDevelopment': 'ਬਾਲ ਵਿਕਾਸ',
    'childDevelopmentDesc': 'ਸਿਹਤਮੰਦ ਵਿਕਾਸ ਅਤੇ ਵਿਕਾਸ ਦੇ ਮੀਲ ਪੱਥਰਾਂ ਨੂੰ ਟਰੈਕ ਕਰਨਾ',
    'preventingDiseases': 'ਆਮ ਬੀਮਾਰੀਆਂ ਦੀ ਰੋਕਥਾਮ',
    'preventingDiseasesDesc': 'ਆਪਣੇ ਭਾਈਚਾਰੇ ਵਿੱਚ ਬੀਮਾਰੀ ਰੋਕਣ ਦੇ ਸਾਦੇ ਕਦਮ',
    'vaccinationGuide': 'ਟੀਕਾਕਰਣ ਗਾਈਡ',
    'vaccinationGuideDesc': 'ਬੱਚਿਆਂ ਅਤੇ ਬਾਲਗਾਂ ਲਈ ਟੀਕਿਆਂ ਨੂੰ ਸਮਝਣਾ',
    'hygienePractices': 'ਸਫ਼ਾਈ ਪ੍ਰਥਾਵਾਂ',
    'hygienePracticesDesc': 'ਬਿਹਤਰ ਸਿਹਤ ਲਈ ਰੋਜ਼ਾਨਾ ਸਫ਼ਾਈ ਦੀਆਂ ਆਦਤਾਂ',
  }
};