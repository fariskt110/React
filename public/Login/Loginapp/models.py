from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class Login(models.Model):
    username=models.CharField(max_length=30)
    password=models.CharField(max_length=30)     
    
class studentregister(models.Model):
     
     password=models.CharField(max_length=50)
     email=models.EmailField(max_length=30, unique=True)
     course=models.CharField(max_length=30)
     department=models.CharField(max_length=30)
     name=models.CharField(max_length=30)
     subject=models.CharField(max_length=30)
     log_id=models.OneToOneField(Login,on_delete=models.CASCADE)
     role=models.CharField(max_length=10) 
     phone=models.CharField(max_length=10, unique=True)
          
     
class teacherregister(models.Model):
     
     password=models.CharField(max_length=50)
     email=models.EmailField(max_length=30, unique=True)
     course=models.CharField(max_length=30)
     department=models.CharField(max_length=30)
     name=models.CharField(max_length=30)
     subject=models.CharField(max_length=30)
     log_id=models.OneToOneField(Login,on_delete=models.CASCADE)
     role=models.CharField(max_length=10)
     phone=models.CharField(max_length=10, unique=True) 
          

    
     def __str__(self):
        return self.name
