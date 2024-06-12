from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Tag(models.Model):
    name = models.CharField(max_length=14)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tags')

    def __str__(self):
        return self.name

class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks')
    tags = models.ManyToManyField(Tag, related_name='tags')
    is_daily_task = models.BooleanField(default=False)

    def __str__(self):
        return self.title