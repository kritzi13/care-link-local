import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Plus, 
  Star,
  MapPin,
  Calendar,
  Trophy,
  Target,
  TrendingUp
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CommunityGroups = () => {
  const { t } = useLanguage();

  const myGroups = [
    {
      id: 1,
      name: t('khandwaVillageGroup'),
      type: 'village',
      members: 45,
      activeChallenge: t('diabetesAwarenessWeek'),
      progress: 78,
      myRole: 'member',
      newMessages: 3,
      avatar: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: t('rajeshFamilyCircle'),
      type: 'family',
      members: 8,
      activeChallenge: t('familyWalkChallenge'),
      progress: 92,
      myRole: 'admin',
      newMessages: 1,
      avatar: '/api/placeholder/100/100'
    },
    {
      id: 3,
      name: t('diabeticSupportGroup'),
      type: 'condition',
      members: 234,
      activeChallenge: t('bloodSugarTrackingChallenge'),
      progress: 65,
      myRole: 'member',
      newMessages: 7,
      avatar: '/api/placeholder/100/100'
    }
  ];

  const suggestedGroups = [
    {
      id: 4,
      name: t('hypertensionSupportMP'),
      type: 'condition',
      members: 189,
      description: t('supportForHighBP'),
      commonMembers: 5
    },
    {
      id: 5,
      name: t('madhyaPradeshHealth'),
      type: 'regional',
      members: 1205,
      description: t('mpHealthCommunity'),
      commonMembers: 12
    }
  ];

  const groupActivities = [
    {
      user: 'Priya Singh',
      action: t('completedWalkingChallenge'),
      group: t('khandwaVillageGroup'),
      time: '2 hours ago',
      points: 150
    },
    {
      user: 'Amit Sharma',
      action: t('sharedHealthTip'),
      group: t('diabeticSupportGroup'),
      time: '4 hours ago',
      points: 50
    },
    {
      user: 'Sunita Devi',
      action: t('helpedFamilyMember'),
      group: t('rajeshFamilyCircle'),
      time: '1 day ago',
      points: 200
    }
  ];

  const leaderboard = [
    { name: 'Rajesh Kumar', points: 2850, rank: 1, change: 0 },
    { name: 'Priya Singh', points: 2640, rank: 2, change: 1 },
    { name: 'Amit Sharma', points: 2580, rank: 3, change: -1 },
    { name: 'Sunita Devi', points: 2420, rank: 4, change: 2 },
    { name: 'Vikram Patel', points: 2350, rank: 5, change: 0 }
  ];

  return (
    <div className="space-y-6">
      {/* My Groups */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              {t('myGroups')}
            </div>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              {t('createGroup')}
            </Button>
          </CardTitle>
          <CardDescription>
            {t('myGroupsDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {myGroups.map((group) => (
            <div key={group.id} className="p-4 border rounded-lg hover:bg-accent-soft/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={group.avatar} alt={group.name} />
                    <AvatarFallback>{group.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold flex items-center">
                      {group.name}
                      {group.myRole === 'admin' && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          {t('admin')}
                        </Badge>
                      )}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {group.members} {t('members')}
                      </span>
                      <Badge variant={
                        group.type === 'family' ? 'default' :
                        group.type === 'village' ? 'secondary' : 'outline'
                      }>
                        {t(group.type)}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {group.newMessages > 0 && (
                    <Badge variant="destructive" className="bg-accent text-accent-foreground">
                      {group.newMessages}
                    </Badge>
                  )}
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-secondary-soft/20 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{t('activeChallenge')}:</span>
                  <Badge variant="secondary" className="bg-secondary-soft text-secondary">
                    {group.progress}% {t('complete')}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{group.activeChallenge}</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-secondary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${group.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Suggested Groups */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-accent" />
              {t('suggestedGroups')}
            </CardTitle>
            <CardDescription>
              {t('suggestedGroupsDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {suggestedGroups.map((group) => (
              <div key={group.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">{group.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{group.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {group.members} {t('members')}
                      </span>
                      <span>{group.commonMembers} {t('commonConnections')}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {t('join')}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Group Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
              {t('communityLeaderboard')}
            </CardTitle>
            <CardDescription>
              {t('leaderboardDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((user, index) => (
                <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                  user.name === 'Rajesh Kumar' ? 'bg-primary-soft/30 border border-primary/20' : 'bg-muted/20'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank === 1 ? 'bg-yellow-500 text-white' :
                      user.rank === 2 ? 'bg-gray-400 text-white' :
                      user.rank === 3 ? 'bg-amber-600 text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      {user.rank}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.points} {t('points')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {user.change > 0 && <TrendingUp className="h-4 w-4 text-green-500" />}
                    {user.change < 0 && <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />}
                    {user.change === 0 && <div className="w-4 h-4" />}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Community Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="h-5 w-5 mr-2 text-pink-500" />
            {t('recentCommunityActivity')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {groupActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{activity.user.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">{activity.user}</span> {activity.action}
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span>{activity.group}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-secondary-soft text-secondary">
                  +{activity.points} {t('pts')}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityGroups;