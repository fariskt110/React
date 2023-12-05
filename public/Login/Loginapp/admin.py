from django.contrib import admin
from .models import Login,studentregister,teacherregister
# from models import Login

# admin.site.register(Login)

# Register your models here.
admin.site.register(Login)
admin.site.register(studentregister)
admin.site.register(teacherregister)

