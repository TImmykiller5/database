from django.urls import path
from . import views

urlpatterns = [
    path('products/',  views.getProducts.as_view(), name='products'),
    path('add-product/',  views.createProduct.as_view(), name='createProduct'),
    path('get-product/<str:pk>/',  views.getProduct.as_view(), name='getProduct'),
]

