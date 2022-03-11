from django.urls import path
from base.views import apartment_view as views

# Backend Routes for API calls
urlpatterns = [


    path("renters/", views.getRenters, name="get-rooms"),
    path('<str:pk>/', views.getRenterById, name='user'),
    path("<str:pk>/update/", views.updateRenter, name="update-renter"),

  
]
