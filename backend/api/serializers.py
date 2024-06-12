from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Task, Tag

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['name', 'author']
    extra_kwargs = {'author': {'read_only': True}}

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [
            'title',
            'description',
            'completed',
            'created_at',
            'author',
            'tags',
            'is_daily_task',
            ]
        extra_kwargs = {'author': {'read_only': True}}