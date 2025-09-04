import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Star, 
  Target, 
  Zap, 
  Award, 
  TrendingUp,
  Users,
  Heart,
  Shield,
  Clock
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const GamificationSystem = () => {
  const { t } = useLanguage();

  const userStats = {
    points: 2850,
    level: 12,
    nextLevelPoints: 3000,
    streak: 15,
    badges: 8,
    challenges: 3
  };

  const badges = [
    {
      id: 1,
      name: t('healthChampion'),
      description: t('completedHealthChecks'),
      icon: Trophy,
      color: 'text-yellow-500',
      bg: 'bg-yellow-50',
      earned: true,
      date: '2024-01-15'
    },
    {
      id: 2,
      name: t('medicationMaster'),
      description: t('perfectMedicationAdherence'),
      icon: Shield,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      earned: true,
      date: '2024-01-10'
    },
    {
      id: 3,
      name: t('communityHelper'),
      description: t('helpedFamilyMembers'),
      icon: Heart,
      color: 'text-pink-500',
      bg: 'bg-pink-50',
      earned: true,
      date: '2024-01-05'
    },
    {
      id: 4,
      name: t('consistencyKing'),
      description: t('fifteenDayStreak'),
      icon: Target,
      color: 'text-green-500',
      bg: 'bg-green-50',
      earned: true,
      date: '2024-01-20'
    },
    {
      id: 5,
      name: t('earlyBird'),
      description: t('morningCheckIns'),
      icon: Clock,
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      earned: false,
      progress: 60
    },
    {
      id: 6,
      name: t('teamPlayer'),
      description: t('joinCommunityChallenge'),
      icon: Users,
      color: 'text-purple-500',
      bg: 'bg-purple-50',
      earned: false,
      progress: 25
    }
  ];

  const activeChallenges = [
    {
      id: 1,
      title: t('dailyWalkChallenge'),
      description: t('walk30MinutesDaily'),
      progress: 75,
      participants: 156,
      reward: 500,
      daysLeft: 5
    },
    {
      id: 2,
      title: t('medicationComplianceChallenge'),
      description: t('takeMedsOnTime'),
      progress: 90,
      participants: 89,
      reward: 300,
      daysLeft: 2
    },
    {
      id: 3,
      title: t('familyHealthChallenge'),
      description: t('checkFamilyHealth'),
      progress: 40,
      participants: 234,
      reward: 800,
      daysLeft: 12
    }
  ];

  const recentAchievements = [
    {
      title: t('completedDrConsultation'),
      points: 200,
      time: '2 hours ago'
    },
    {
      title: t('uploadedHealthReport'),
      points: 150,
      time: '1 day ago'
    },
    {
      title: t('helpedNeighbor'),
      points: 100,
      time: '2 days ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* User Stats Overview */}
      <Card className="bg-gradient-to-r from-primary-soft to-secondary-soft border-none">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-primary flex items-center">
                <Trophy className="h-6 w-6 mr-2" />
                Level {userStats.level}
              </CardTitle>
              <CardDescription className="text-primary/80">
                {userStats.points} {t('pointsEarned')} • {userStats.streak} {t('dayStreak')}
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-secondary">{userStats.points}</div>
              <div className="text-sm text-secondary/80">{t('totalPoints')}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>{t('progressToNextLevel')}</span>
                <span>{userStats.points}/{userStats.nextLevelPoints}</span>
              </div>
              <Progress 
                value={(userStats.points / userStats.nextLevelPoints) * 100} 
                className="h-3"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent">{userStats.badges}</div>
                <div className="text-xs text-muted-foreground">{t('badgesEarned')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">{userStats.challenges}</div>
                <div className="text-xs text-muted-foreground">{t('activeChallenges')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{userStats.streak}</div>
                <div className="text-xs text-muted-foreground">{t('dayStreak')}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Badges Collection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-accent" />
              {t('myBadges')}
            </CardTitle>
            <CardDescription>
              {t('badgesDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge) => (
                <div 
                  key={badge.id}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    badge.earned 
                      ? 'border-accent/20 bg-gradient-to-br from-accent-soft to-white' 
                      : 'border-muted bg-muted/20 opacity-60'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`p-2 rounded-full ${badge.bg}`}>
                      <badge.icon className={`h-4 w-4 ${badge.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold truncate">{badge.name}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{badge.description}</p>
                  {badge.earned ? (
                    <Badge variant="outline" className="text-xs bg-accent-soft text-accent border-accent/20">
                      {t('earned')}
                    </Badge>
                  ) : (
                    <div className="space-y-1">
                      <Progress value={badge.progress || 0} className="h-1" />
                      <span className="text-xs text-muted-foreground">{badge.progress || 0}% {t('complete')}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Challenges */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-secondary" />
              {t('activeChallenges')}
            </CardTitle>
            <CardDescription>
              {t('challengesDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeChallenges.map((challenge) => (
              <div key={challenge.id} className="p-4 border rounded-lg bg-gradient-to-r from-secondary-soft/30 to-transparent">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{challenge.title}</h4>
                    <p className="text-xs text-muted-foreground">{challenge.description}</p>
                  </div>
                  <Badge variant="outline" className="bg-secondary-soft text-secondary">
                    {challenge.reward} {t('points')}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <Progress value={challenge.progress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{challenge.progress}% {t('complete')}</span>
                    <span>{challenge.daysLeft} {t('daysLeft')}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Users className="h-3 w-3 mr-1" />
                    {challenge.participants} {t('participants')}
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <TrendingUp className="h-4 w-4 mr-2" />
              {t('viewAllChallenges')}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="h-5 w-5 mr-2 text-yellow-500" />
            {t('recentAchievements')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center">
                    <Zap className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.time}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-secondary-soft text-secondary">
                  +{achievement.points} {t('pts')}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GamificationSystem;