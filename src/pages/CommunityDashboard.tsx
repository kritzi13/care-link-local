import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GamificationSystem from "@/components/GamificationSystem";
import CommunityGroups from "@/components/CommunityGroups";
import FollowUpCare from "@/components/FollowUpCare";
import ChatSystem from "@/components/ChatSystem";
import HealthRecords from "@/components/HealthRecords";
import FeedbackSystem from "@/components/FeedbackSystem";
import { useLanguage } from "@/contexts/LanguageContext";

const CommunityDashboard = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="gamification" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="gamification">Rewards</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="followup">Follow-up</TabsTrigger>
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="records">Records</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="gamification">
            <GamificationSystem />
          </TabsContent>

          <TabsContent value="community">
            <CommunityGroups />
          </TabsContent>

          <TabsContent value="followup">
            <FollowUpCare />
          </TabsContent>

          <TabsContent value="chat">
            <ChatSystem />
          </TabsContent>

          <TabsContent value="records">
            <HealthRecords />
          </TabsContent>

          <TabsContent value="feedback">
            <FeedbackSystem />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CommunityDashboard;