from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from .serializers import UserSerializer
from django.contrib.auth.models import User


# Create your views here.
class getProducts(APIView):
    
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)
