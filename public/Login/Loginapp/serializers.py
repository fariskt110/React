from rest_framework import serializers

from.models import studentregister
from.models import teacherregister
from.models import Login


class studentregisterserializer(serializers.ModelSerializer):
    class Meta:
        model = studentregister
        fields = '__all__'
    def create(self,validated_data):
        return studentregister.objects.create(**validated_data)
    
class teacherregisterserializer(serializers.ModelSerializer):
    class Meta:
        model= teacherregister
        fields = '__all__'
    def create(self,validated_data):
        return teacherregister.objects.create(**validated_data)

class Loginserializer(serializers.ModelSerializer):
    class Meta:
        model=Login
        fields='__all__'
    def create(self,validated_data):
        return Login.objects.create(**validated_data)    
        