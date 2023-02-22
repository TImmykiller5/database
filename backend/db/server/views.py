from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from .serializers import UserSerializer, InventorySerializer, ProductsTypeSerializer, ProductTypeSerializer
from django.contrib.auth.models import User
from .models import Inventory, SalesRecord, Store, ProductType

# Create your views here.
class getProducts(APIView):
    
    def get(self, request):
        product = ProductType.objects.all()
        serializer = ProductsTypeSerializer(product, many=True)
        return Response(serializer.data)
    
class getProduct(APIView):
    
    def get(self, request, pk):
        product = ProductType.objects.get(id=pk)
        serializer = ProductTypeSerializer(product, many=False)
        return Response(serializer.data)

class createProduct(APIView):

    def post(self, request):
        data = request.data
        Product = ProductType(
            name= data['name'],
            brand= data['brand'],
            costPrice= data['costPrice'],
            sellingPrice= data['sellingPrice'],
        )

        Product.save()
        return Response({'hello':'hi'})