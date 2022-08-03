from django.urls import path
from . views import *
from . import views


urlpatterns = [
    path('/', index),
    path('/twitterads', index),
    path('/ads', index),


    path('/axiosview/', AxiosView.as_view(), name='axiosview'),
    path('pollform/', SavepostView.as_view(), name='pollform'),  
    path('/savedresult/', BackrunView.as_view(), name='pollview'),


    path('/api/', SavedView.as_view(), name="saved")

]
