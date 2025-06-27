from django.core.management.base import BaseCommand
from octofit_tracker.users.models import User

# Placeholder imports for apps without models.py files
try:
    from octofit_tracker.teams.models import Team
except ImportError:
    Team = None

try:
    from octofit_tracker.activity.models import Activity
except ImportError:
    Activity = None

try:
    from octofit_tracker.leaderboard.models import Leaderboard
except ImportError:
    Leaderboard = None

try:
    from octofit_tracker.workouts.models import Workout
except ImportError:
    Workout = None


class Command(BaseCommand):

    help = "Populate the database with test data"

    def handle(self, *args, **kwargs):
        # Create test users
        User.objects.create(username="testuser1", email="testuser1@example.com")
        User.objects.create(username="testuser2", email="testuser2@example.com")

        # Create test teams if Team model exists
        if Team:
            Team.objects.create(name="Team Alpha")
            Team.objects.create(name="Team Beta")

        # Create test activities if Activity model exists
        if Activity:
            Activity.objects.create(name="Running", description="Run 5km")
            Activity.objects.create(name="Cycling", description="Cycle 10km")

        # Create test leaderboard entries if Leaderboard model exists
        if Leaderboard:
            Leaderboard.objects.create(user_id=1, score=100)
            Leaderboard.objects.create(user_id=2, score=150)

        # Create test workouts if Workout model exists
        if Workout:
            Workout.objects.create(name="Morning Run", duration=30)
            Workout.objects.create(name="Evening Yoga", duration=45)

        self.stdout.write(self.style.SUCCESS("Database populated with test data."))
