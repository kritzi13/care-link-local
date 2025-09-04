import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  Phone, 
  Video, 
  Send, 
  Bot, 
  User,
  Clock,
  Search,
  Plus,
  Paperclip,
  Mic,
  Heart,
  Stethoscope
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const ChatSystem = () => {
  const { t } = useLanguage();
  const [activeChat, setActiveChat] = useState('dr-priya');
  const [messageInput, setMessageInput] = useState('');

  const chatList = [
    {
      id: 'dr-priya',
      name: 'Dr. Priya Sharma',
      type: 'doctor',
      specialty: 'General Medicine',
      lastMessage: t('bloodPressureNormal'),
      lastMessageTime: '10:30 AM',
      unread: 2,
      online: true,
      avatar: '/api/placeholder/50/50'
    },
    {
      id: 'ai-assistant',
      name: t('aiHealthAssistant'),
      type: 'ai',
      specialty: 'Health AI',
      lastMessage: t('howCanIHelpToday'),
      lastMessageTime: '09:45 AM',
      unread: 0,
      online: true,
      avatar: '/api/placeholder/50/50'
    },
    {
      id: 'dr-amit',
      name: 'Dr. Amit Patel',
      type: 'doctor',
      specialty: 'Pediatrics',
      lastMessage: t('vaccinationScheduleReady'),
      lastMessageTime: 'Yesterday',
      unread: 1,
      online: false,
      avatar: '/api/placeholder/50/50'
    },
    {
      id: 'nurse-sunita',
      name: 'Nurse Sunita',
      type: 'nurse',
      specialty: 'Community Health',
      lastMessage: t('medicationReminderSet'),
      lastMessageTime: '2 days ago',
      unread: 0,
      online: true,
      avatar: '/api/placeholder/50/50'
    }
  ];

  const messages = {
    'dr-priya': [
      {
        id: 1,
        sender: 'doctor',
        message: t('goodMorningRajesh'),
        time: '10:25 AM',
        type: 'text'
      },
      {
        id: 2,
        sender: 'user',
        message: t('goodMorningDoctor'),
        time: '10:26 AM',
        type: 'text'
      },
      {
        id: 3,
        sender: 'doctor',
        message: t('bloodPressureResults'),
        time: '10:28 AM',
        type: 'text'
      },
      {
        id: 4,
        sender: 'doctor',
        message: t('bloodPressureNormal'),
        time: '10:30 AM',
        type: 'text'
      },
      {
        id: 5,
        sender: 'doctor',
        message: t('continueCurrentMedication'),
        time: '10:30 AM',
        type: 'text'
      }
    ],
    'ai-assistant': [
      {
        id: 1,
        sender: 'ai',
        message: t('welcomeBackRajesh'),
        time: '09:40 AM',
        type: 'text'
      },
      {
        id: 2,
        sender: 'ai',
        message: t('reminderTakeMorningMeds'),
        time: '09:42 AM',
        type: 'reminder'
      },
      {
        id: 3,
        sender: 'ai',
        message: t('howCanIHelpToday'),
        time: '09:45 AM',
        type: 'text'
      }
    ]
  };

  const quickReplies = [
    t('thankYouDoctor'),
    t('whenNextAppointment'),
    t('anySideEffects'),
    t('needPrescriptionRefill')
  ];

  const aiSuggestions = [
    {
      title: t('checkSymptoms'),
      description: t('describeSymptomsForAdvice'),
      icon: Stethoscope
    },
    {
      title: t('medicationReminder'),
      description: t('setMedicationAlarms'),
      icon: Clock
    },
    {
      title: t('healthTips'),
      description: t('getPersonalizedHealthTips'),
      icon: Heart
    }
  ];

  const getCurrentChat = () => {
    return chatList.find(chat => chat.id === activeChat);
  };

  const getCurrentMessages = () => {
    return messages[activeChat as keyof typeof messages] || [];
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Chat List */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2 text-primary" />
              {t('messages')}
            </div>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder={t('searchChats')} className="pl-10" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {chatList.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={`p-4 cursor-pointer hover:bg-accent-soft/20 transition-colors ${
                  activeChat === chat.id ? 'bg-primary-soft/20 border-r-2 border-primary' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={chat.avatar} alt={chat.name} />
                      <AvatarFallback>
                        {chat.type === 'ai' ? <Bot className="h-6 w-6" /> : chat.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    {chat.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-sm truncate">{chat.name}</h3>
                      <div className="flex items-center space-x-1">
                        {chat.unread > 0 && (
                          <Badge variant="destructive" className="bg-accent text-accent-foreground text-xs">
                            {chat.unread}
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{chat.lastMessageTime}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{chat.specialty}</p>
                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card className="lg:col-span-2 flex flex-col">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={getCurrentChat()?.avatar} alt={getCurrentChat()?.name} />
                    <AvatarFallback>
                      {getCurrentChat()?.type === 'ai' ? <Bot className="h-5 w-5" /> : getCurrentChat()?.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{getCurrentChat()?.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{getCurrentChat()?.specialty}</span>
                      {getCurrentChat()?.online && (
                        <>
                          <span>•</span>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                            {t('online')}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {getCurrentMessages().map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-lg rounded-br-sm' 
                      : message.sender === 'ai'
                      ? 'bg-accent-soft text-accent-foreground rounded-lg rounded-bl-sm'
                      : 'bg-secondary-soft text-secondary-foreground rounded-lg rounded-bl-sm'
                  } p-3`}>
                    <p className="text-sm">{message.message}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}

              {/* AI Suggestions */}
              {activeChat === 'ai-assistant' && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{t('howCanIHelp')}:</p>
                  {aiSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 border rounded-lg hover:bg-accent-soft/20 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <suggestion.icon className="h-5 w-5 text-accent" />
                        <div>
                          <p className="font-medium text-sm">{suggestion.title}</p>
                          <p className="text-xs text-muted-foreground">{suggestion.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </CardContent>

            {/* Quick Replies */}
            {activeChat !== 'ai-assistant' && (
              <div className="p-4 border-t bg-muted/20">
                <p className="text-sm text-muted-foreground mb-2">{t('quickReplies')}:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setMessageInput(reply)}
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder={t('typeMessage')}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Mic className="h-4 w-4" />
                </Button>
                <Button onClick={handleSendMessage} disabled={!messageInput.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <CardContent className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{t('selectChatToStart')}</p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ChatSystem;