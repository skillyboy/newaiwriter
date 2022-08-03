from django.shortcuts import render
from django.contrib.auth.models import User
# from .models import Saved
from . models import *
from django.contrib import messages

from rest_framework.views import APIView
from rest_framework.response import Response
from . serializers import *     

from django.views.generic import View
from django.http import JsonResponse
from django.views import View
import requests
# Create your views here.

def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
     
    
class SavedView(APIView):
    serializer_class = SavedSerializer
    
    def get(self, request):
        # detail = [ {"body": detail.body, "user": detail.user} 
        # for detail in Saved.objects.all()]
        detail = [ {"body", "user"} ]
        
        return Response(detail)
  
    def post(self, request):
        serializer = SavedSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)  
 
 



 
class AxiosView(View):
    def get(self, request, *args, **kwargs):
        context = {
            
        }
        return render(request, 'frontend/axios.html',context) 
 
class SavepostView(View):
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username= request.user.username)
        body = request.POST.get("mytext[]")
        try:
            newpoll = Saved()
            newpoll.user = user
            newpoll.body = body
            if Saved.objects.filter(body=body).exists():
                messages.warning(request, 'already saved ')
            else:         
                newpoll.save()
                messages.success(request, 'saved ')
            
            resp ={
                'status': 'success'
            }
        except Exception as e:
            print(e)
            resp ={
               'status': 'Failed' 
            }
        return JsonResponse(resp)  
    
    
class BackrunView(View):
    def get(self, request, *args, **kwargs):
        new = Saved.objects.all()
        
        context={
            'new':new
        }
        return render(request, 'frontend/result.html', context)
    
class DelitemView(View):
    def get(self, request, *args, **kwargs):
        delitem = Saved.objects.get(pk=id)   
        resp = {
            
        }
        return JsonResponse(resp) 

 
 
 
 
 


   
    
