from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = "Populate the database with test data for djongo"

    def handle(self, *args, **kwargs):
        # Create test users
        User.objects.create(username="testuser1", email="testuser1@example.com")
        User.objects.create(username="testuser2", email="testuser2@example.com")

        # Create test teams
        Team.objects.create(name="Team Alpha")
        Team.objects.create(name="Team Beta")

        # Create test activities
        Activity.objects.create(name="Running", description="Run 5km")
        Activity.objects.create(name="Cycling", description="Cycle 10km")

        # Create test leaderboard entries
        Leaderboard.objects.create(user_id=1, score=100)
        Leaderboard.objects.create(user_id=2, score=150)

        # Create test workouts
        Workout.objects.create(name="Morning Run", duration=30)
        Workout.objects.create(name="Evening Yoga", duration=45)

        self.stdout.write(self.style.SUCCESS("Successfully populated the database with test data for djongo."))
