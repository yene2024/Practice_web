from django.shortcuts import render
from django.db.models import Count
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, TagSerializer, TaskSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Tag, Task

class TaskCreate(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Task.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class TaskDelete(generics.DestroyAPIView):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Task.objects.filter(author=user)

class TagCreate(generics.ListCreateAPIView):
    serializer_class = TagSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Tag.objects.filter(author=user).annotate(tags_count=Count('tags')).order_by('-tags_count')

    def perform_create(self, serializer):
        if serializer.is_valid():
                serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]