from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import Apartment
from base.serializer import ApartmentSerializer


# Function Based Views

#GET-REQUEST

@api_view(['GET'])
def getRenters(request):
    renter = Apartment.objects.all()
    serializer = ApartmentSerializer(renter, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getRenterById(request, pk):
    renter = Apartment.objects.get(id=pk)
    serializer = ApartmentSerializer(renter, many=False)
    return Response(serializer.data)


#PUT-REQUEST

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateRenter(request, pk):
    renter = Apartment.objects.get(id=pk)
    data = request.data
    renter.renter_name = data['renter_name']
    renter.renter_id = data['renter_id']
    renter.renter_email = data['renter_email']
    renter.phone = data['phone']
    renter.room_number = data['room_number']
    renter.room_address = data['room_address']
    renter.max_capacity = data['max_capacity']
    renter.isOccupied = data['isOccupied']
    renter.save()
    serializer = ApartmentSerializer(renter, many=False)
    return Response(serializer.data)



#DELETE REQUEST
