from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout


class UserModelTest(TestCase):
    def test_user_creation(self):
        user = User.objects.create(
            username="testuser",
            email="testuser@example.com",
        )
        self.assertEqual(user.username, "testuser")


class TeamModelTest(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name="Team Alpha")
        self.assertEqual(team.name, "Team Alpha")


class ActivityModelTest(TestCase):
    def test_activity_creation(self):
        activity = Activity.objects.create(
            name="Running",
            description="Run 5km",
        )
        self.assertEqual(activity.name, "Running")


class LeaderboardModelTest(TestCase):
    def test_leaderboard_creation(self):
        user = User.objects.create(
            username="testuser",
            email="testuser@example.com",
        )
        leaderboard = Leaderboard.objects.create(user=user, score=100)
        self.assertEqual(leaderboard.score, 100)


class WorkoutModelTest(TestCase):
    def test_workout_creation(self):
        workout = Workout.objects.create(
            name="Morning Run",
            duration=30,
        )
        self.assertEqual(workout.name, "Morning Run")