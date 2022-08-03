from rest_framework import serializers
from . models import *
  
class SavedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Saved
        fields = ['body', 'user']
        
