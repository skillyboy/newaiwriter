from django.db import models
from django.db.models.fields.related import ForeignKey
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE

# Create your models here.
class Saved(models.Model):
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField(max_length=50)
    
    def __str__(self):
        return self.body 

    class Meta:
        db_table = 'saved'
        managed = True
        verbose_name = 'saved'
        verbose_name_plural = 'saved'