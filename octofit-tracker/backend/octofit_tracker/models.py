from django.db import models


class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)


class Team(models.Model):
    name = models.CharField(max_length=100)


class Activity(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()


class Leaderboard(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()


class Workout(models.Model):
    name = models.CharField(max_length=100)
    duration = models.IntegerField()