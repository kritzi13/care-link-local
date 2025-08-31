import { useState, useEffect } from 'react';

export interface EducationContent {
  title: string;
  description: string;
  duration: string;
  language: string;
  type: 'article' | 'video';
  content?: string;
}

export interface CategoryContent {
  [key: string]: EducationContent[];
}

export const useOfflineContent = (language: 'en' | 'hi' | 'pa') => {
  const [content, setContent] = useState<CategoryContent>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading from localStorage or cached content
    const loadContent = () => {
      const offlineContent: { [lang: string]: CategoryContent } = {
        en: {
          basics: [
            {
              title: "When to See a Doctor",
              description: "Learn the warning signs that require immediate medical attention",
              duration: "5 min read",
              language: "English",
              type: "article",
              content: "If you have fever above 102°F, severe chest pain, difficulty breathing, or sudden severe headache, see a doctor immediately..."
            },
            {
              title: "Basic First Aid",
              description: "Simple first aid steps everyone should know",
              duration: "8 min video",
              language: "English",
              type: "video",
              content: "Step 1: Check if person is conscious. Step 2: Check breathing. Step 3: Apply pressure to bleeding wounds..."
            },
            {
              title: "Understanding Your Body",
              description: "Basic body functions and health signs to watch for",
              duration: "6 min read",
              language: "English",
              type: "article",
              content: "Your body has many warning signs. Normal temperature is 98.6°F. Normal pulse is 60-100 beats per minute..."
            }
          ],
          nutrition: [
            {
              title: "Healthy Eating on a Budget",
              description: "Nutritious meals with local, affordable ingredients",
              duration: "10 min video",
              language: "English",
              type: "video",
              content: "Use local vegetables like spinach, carrots, and onions. Add lentils for protein. Cook with minimal oil..."
            },
            {
              title: "Children's Nutrition",
              description: "Essential nutrients for growing children",
              duration: "7 min read",
              language: "English",
              type: "article",
              content: "Children need milk, fruits, vegetables, and grains daily. Avoid too much sugar and fried foods..."
            },
            {
              title: "Clean Water & Food Safety",
              description: "Preventing illness through safe food practices",
              duration: "5 min video",
              language: "English",
              type: "video",
              content: "Boil water for 10 minutes. Wash hands before eating. Keep cooked food covered and eat within 2 hours..."
            }
          ]
        },
        hi: {
          basics: [
            {
              title: "डॉक्टर से कब मिलें",
              description: "उन चेतावनी संकेतों को जानें जिनमें तुरंत चिकित्सा सहायता की आवश्यकता होती है",
              duration: "5 मिनट पढ़ें",
              language: "हिंदी",
              type: "article",
              content: "यदि आपका बुखार 102°F से ऊपर है, सीने में तेज दर्द है, सांस लेने में कठिनाई है, या अचानक तेज सिरदर्द है, तो तुरंत डॉक्टर से मिलें..."
            },
            {
              title: "बुनियादी प्राथमिक चिकित्सा",
              description: "सरल प्राथमिक चिकित्सा के कदम जो सभी को पता होने चाहिए",
              duration: "8 मिनट वीडियो",
              language: "हिंदी",
              type: "video",
              content: "कदम 1: जांचें कि व्यक्ति होश में है या नहीं। कदम 2: सांस की जांच करें। कदम 3: खून बहने वाली जगह पर दबाव डालें..."
            },
            {
              title: "अपने शरीर को समझना",
              description: "बुनियादी शरीर की गतिविधियां और देखने योग्य स्वास्थ्य संकेत",
              duration: "6 मिनट पढ़ें",
              language: "हिंदी",
              type: "article",
              content: "आपके शरीर में कई चेतावनी संकेत हैं। सामान्य तापमान 98.6°F है। सामान्य नाड़ी 60-100 धड़कन प्रति मिनट है..."
            }
          ],
          nutrition: [
            {
              title: "कम बजट में स्वस्थ भोजन",
              description: "स्थानीय, सस्ती सामग्री के साथ पोषक भोजन",
              duration: "10 मिनट वीडियो",
              language: "हिंदी",
              type: "video",
              content: "स्थानीय सब्जियां जैसे पालक, गाजर और प्याज का उपयोग करें। प्रोटीन के लिए दाल जोड़ें। कम तेल में पकाएं..."
            },
            {
              title: "बच्चों का पोषण",
              description: "बढ़ते बच्चों के लिए आवश्यक पोषक तत्व",
              duration: "7 मिनट पढ़ें",
              language: "हिंदी",
              type: "article",
              content: "बच्चों को रोजाना दूध, फल, सब्जियां और अनाज की जरूरत होती है। ज्यादा चीनी और तली हुई चीजों से बचें..."
            },
            {
              title: "स्वच्छ पानी और खाद्य सुरक्षा",
              description: "सुरक्षित भोजन प्रथाओं के माध्यम से बीमारी से बचाव",
              duration: "5 मिनट वीडियो",
              language: "हिंदी",
              type: "video",
              content: "पानी को 10 मिनट तक उबालें। खाने से पहले हाथ धोएं। पका हुआ खाना ढक कर रखें और 2 घंटे के अंदर खाएं..."
            }
          ]
        },
        pa: {
          basics: [
            {
              title: "ਡਾਕਟਰ ਨੂੰ ਕਦੋਂ ਮਿਲਣਾ ਹੈ",
              description: "ਉਹਨਾਂ ਚੇਤਾਵਨੀ ਸੰਕੇਤਾਂ ਨੂੰ ਜਾਣੋ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਤੁਰੰਤ ਡਾਕਟਰੀ ਸਹਾਇਤਾ ਦੀ ਲੋੜ ਹੈ",
              duration: "5 ਮਿੰਟ ਪੜ੍ਹੋ",
              language: "ਪੰਜਾਬੀ",
              type: "article",
              content: "ਜੇ ਤੁਹਾਡਾ ਬੁਖਾਰ 102°F ਤੋਂ ਉੱਪਰ ਹੈ, ਸੀਨੇ ਵਿੱਚ ਤਿੱਖਾ ਦਰਦ ਹੈ, ਸਾਹ ਲੈਣ ਵਿੱਚ ਮੁਸ਼ਕਲ ਹੈ, ਜਾਂ ਅਚਾਨਕ ਤਿੱਖਾ ਸਿਰਦਰਦ ਹੈ, ਤਾਂ ਤੁਰੰਤ ਡਾਕਟਰ ਨੂੰ ਮਿਲੋ..."
            },
            {
              title: "ਬੁਨਿਆਦੀ ਪਹਿਲੀ ਸਹਾਇਤਾ",
              description: "ਸਰਲ ਪਹਿਲੀ ਸਹਾਇਤਾ ਦੇ ਕਦਮ ਜੋ ਸਭ ਨੂੰ ਪਤਾ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ",
              duration: "8 ਮਿੰਟ ਵੀਡੀਓ",
              language: "ਪੰਜਾਬੀ",
              type: "video",
              content: "ਕਦਮ 1: ਚੈੱਕ ਕਰੋ ਕਿ ਵਿਅਕਤੀ ਹੋਸ਼ ਵਿੱਚ ਹੈ ਜਾਂ ਨਹੀਂ। ਕਦਮ 2: ਸਾਹ ਦੀ ਜਾਂਚ ਕਰੋ। ਕਦਮ 3: ਖੂਨ ਵਹਿਣ ਵਾਲੀ ਜਗ੍ਹਾ ਤੇ ਦਬਾਅ ਪਾਓ..."
            },
            {
              title: "ਆਪਣੇ ਸਰੀਰ ਨੂੰ ਸਮਝਣਾ",
              description: "ਬੁਨਿਆਦੀ ਸਰੀਰਿਕ ਕਾਰਜ ਅਤੇ ਦੇਖਣ ਯੋਗ ਸਿਹਤ ਸੰਕੇਤ",
              duration: "6 ਮਿੰਟ ਪੜ੍ਹੋ",
              language: "ਪੰਜਾਬੀ",
              type: "article",
              content: "ਤੁਹਾਡੇ ਸਰੀਰ ਵਿੱਚ ਕਈ ਚੇਤਾਵਨੀ ਸੰਕੇਤ ਹਨ। ਆਮ ਤਾਪਮਾਨ 98.6°F ਹੈ। ਆਮ ਨਬਜ਼ 60-100 ਧੜਕਣ ਪ੍ਰਤੀ ਮਿੰਟ ਹੈ..."
            }
          ],
          nutrition: [
            {
              title: "ਘੱਟ ਬਜਟ ਵਿੱਚ ਸਿਹਤਮੰਦ ਖਾਣਾ",
              description: "ਸਥਾਨਕ, ਸਸਤੇ ਸਮਾਨ ਨਾਲ ਪੋਸ਼ਟਿਕ ਭੋਜਨ",
              duration: "10 ਮਿੰਟ ਵੀਡੀਓ",
              language: "ਪੰਜਾਬੀ",
              type: "video",
              content: "ਸਥਾਨਕ ਸਬਜ਼ੀਆਂ ਜਿਵੇਂ ਪਾਲਕ, ਗਾਜਰ ਅਤੇ ਪਿਆਜ਼ ਦੀ ਵਰਤੋਂ ਕਰੋ। ਪ੍ਰੋਟੀਨ ਲਈ ਦਾਲ ਸ਼ਾਮਲ ਕਰੋ। ਘੱਟ ਤੇਲ ਨਾਲ ਪਕਾਓ..."
            },
            {
              title: "ਬੱਚਿਆਂ ਦਾ ਪੋਸ਼ਣ",
              description: "ਵਧ ਰਹੇ ਬੱਚਿਆਂ ਲਈ ਜ਼ਰੂਰੀ ਪੋਸ਼ਕ ਤੱਤ",
              duration: "7 ਮਿੰਟ ਪੜ੍ਹੋ",
              language: "ਪੰਜਾਬੀ",
              type: "article",
              content: "ਬੱਚਿਆਂ ਨੂੰ ਰੋਜ਼ਾਨਾ ਦੁੱਧ, ਫਲ, ਸਬਜ਼ੀਆਂ ਅਤੇ ਅਨਾਜ ਦੀ ਲੋੜ ਹੈ। ਜ਼ਿਆਦਾ ਖੰਡ ਅਤੇ ਤਲੀ ਹੋਈ ਚੀਜ਼ਾਂ ਤੋਂ ਬਚੋ..."
            },
            {
              title: "ਸਾਫ਼ ਪਾਣੀ ਅਤੇ ਭੋਜਨ ਸੁਰੱਖਿਆ",
              description: "ਸੁਰੱਖਿਤ ਭੋਜਨ ਪ੍ਰਥਾਵਾਂ ਰਾਹੀਂ ਬੀਮਾਰੀ ਤੋਂ ਬਚਾਅ",
              duration: "5 ਮਿੰਟ ਵੀਡੀਓ",
              language: "ਪੰਜਾਬੀ",
              type: "video",
              content: "ਪਾਣੀ ਨੂੰ 10 ਮਿੰਟ ਤੱਕ ਉਬਾਲੋ। ਖਾਣ ਤੋਂ ਪਹਿਲਾਂ ਹੱਥ ਧੋਵੋ। ਪਕਾ ਹੋਇਆ ਖਾਣਾ ਢੱਕ ਕੇ ਰੱਖੋ ਅਤੇ 2 ਘੰਟੇ ਵਿੱਚ ਖਾਓ..."
            }
          ]
        }
      };

      // Store in localStorage for offline access
      localStorage.setItem('healthEducationContent', JSON.stringify(offlineContent));
      
      setContent(offlineContent[language] || {});
      setIsLoaded(true);
    };

    loadContent();
  }, [language]);

  return { content, isLoaded };
};