from django.contrib import admin
from . models import Saved

# Register your models here.
class SavedAdmin(admin.ModelAdmin):
    list_display = ('id','user','body')
    
admin.site.register(Saved,SavedAdmin)