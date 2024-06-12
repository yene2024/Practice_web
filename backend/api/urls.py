from django.urls import path
from .views import TaskCreate, TaskDelete, TagCreate

urlpatterns = [
    path('tasks/', TaskCreate.as_view(), name='task-create'),
    path('tasks/delete/<int:pk>/', TaskDelete.as_view(), name='task-delete'),
    path('tags/create/', TagCreate.as_view(), name='tag-create'),
]