FROM python:3.11-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    default-libmysqlclient-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Django and create project
RUN pip install django djangorestframework django-cors-headers

# Create Django project
RUN django-admin startproject my_django_app .

# Create a basic view
RUN echo 'from django.http import JsonResponse\n\
\n\
def home(request):\n\
    return JsonResponse({"message": "Welcome to Soul Django App!"})\n\
' > my_django_app/views.py

# Update URLs
RUN echo 'from django.contrib import admin\n\
from django.urls import path\n\
from . import views\n\
\n\
urlpatterns = [\n\
    path("admin/", admin.site.urls),\n\
    path("", views.home, name="home"),\n\
]' > my_django_app/urls.py

# Update settings for CORS
RUN sed -i "s/ALLOWED_HOSTS = \[\]/ALLOWED_HOSTS = ['*']/" my_django_app/settings.py

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]