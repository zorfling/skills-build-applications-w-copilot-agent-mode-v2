from django.core.management.base import BaseCommand
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']

        # Populate users collection
        users = [
            {"email": "user1@example.com", "name": "User One"},
            {"email": "user2@example.com", "name": "User Two"},
        ]
        db.users.insert_many(users)

        # Populate teams collection
        teams = [
            {"name": "Team Alpha", "members": ["user1@example.com", "user2@example.com"]},
            {"name": "Team Beta", "members": []},
        ]
        db.teams.insert_many(teams)

        # Populate activity collection
        activities = [
            {"activity_id": 1, "type": "Running", "duration": 30},
            {"activity_id": 2, "type": "Walking", "duration": 60},
        ]
        db.activity.insert_many(activities)

        # Populate leaderboard collection
        leaderboard = [
            {"leaderboard_id": 1, "team": "Team Alpha", "points": 100},
            {"leaderboard_id": 2, "team": "Team Beta", "points": 50},
        ]
        db.leaderboard.insert_many(leaderboard)

        # Populate workouts collection
        workouts = [
            {"workout_id": 1, "name": "Morning Run", "calories": 300},
            {"workout_id": 2, "name": "Evening Walk", "calories": 200},
        ]
        db.workouts.insert_many(workouts)

        self.stdout.write(self.style.SUCCESS('Successfully populated the octofit_db database with test data'))
