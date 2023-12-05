from django.shortcuts import render
from.serializers import Loginserializer,teacherregisterserializer,studentregisterserializer
from.models import Login,teacherregister,studentregister

from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView


# Create your views here.
class StudentRegisterAPIView(GenericAPIView):
    serializer_class=studentregisterserializer
    serializer_class_login=Loginserializer
    def post(self,request):
        login_id=''
        Name=request.data.get('name')
        email=request.data.get('email')
        phone =request.data.get('phone')
        subject=request.data.get('subject')
        course=request.data.get('course')
        password=request.data.get('password')
        department=request.data.get('department')
        role="student"
        
        if(Login.objects.filter(username=email)):
            return Response({'message':'Duplicate Username Found'},status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login= self.serializer_class_login(data={'username': email,'password':password})
            
        if serializer_login.is_valid():
            Log = serializer_login.save()
            print(Log)
            login_id = Log.id
            print(login_id)
        serializer= self.serializer_class(data={'log_id':login_id,'name':Name,'email':email,'phone':phone,"subject":subject,'course':course,'password':password,'department':department,'role':role})
        print(serializer)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'Registration sucessful','sucess':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Registration Failed','sucess':False},status=status.HTTP_400_BAD_REQUEST)   
            

class Get_All_student(GenericAPIView):
    serializer_class=studentregisterserializer
    def get(self,request):
        queryset = studentregister.objects.all()
        if(queryset.count()>0):
            serializer=studentregisterserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all user data set','sucess':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'non data available','sucess':False},status = status.HTTP_201_CREATED)        

class Get_Single_student(GenericAPIView):
    serializer_class=studentregisterserializer
    def get(self,request,id):
        queryset =studentregister.objects.get(pk=id)
        serializer=studentregisterserializer(queryset)
        return Response({'data':serializer.data,'message':'single user data set','sucess':True},status=status.HTTP_200_OK)
class Update_studentAPIview(GenericAPIView):
    serializer_class=studentregisterserializer
    def put(self,request,id):
        queryset = studentregister.objects.get(pk=id)
        print(queryset)
        serializer = studentregisterserializer(instance = queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'updated sucessfully','sucess':True},status= status.HTTP_200_OK)
        else:
            return Response({'data':'something went wrong','sucess':False},status=status.HTTP_200_OK)     
class Delete_studentAPIView(GenericAPIView):
    def delete(self,request,id):
        delproduct= studentregister.objects.get(pk=id) 
        delproduct.delete()
        return Response({'message':'Deleted sucessfully','sucess':True}, status=status.HTTP_200_OK)
class StudentSearchAPIView(GenericAPIView):
    def post(self,request):
        query = request.data.get('query')
        print(query)
        
        i = studentregister.objects.filter(Name__icontains=query) 
        for dta in i:
            print(dta)
        
        data= [{'name':info.name,'phone':info.phone,'Email':info.email,' password': info. password,'Loginid':info.login_id,'subject':info.subject,'course':info.course } for info in i]
        return Response({'data': data, 'message':'sucessfully fetched','sucess': True}, status=status.HTTP_200_OK)
class TeacherRegistrationAPIView(GenericAPIView):
    serializer_class=teacherregisterserializer
    serializer_class_login=Loginserializer
    def post(self,request):
        login_id=''
        Name=request.data.get('name')
        email=request.data.get('email')
        phone =request.data.get('phone')
        subject=request.data.get('subject')
        course=request.data.get('course')
        password=request.data.get('password')
        role="teacher"
        department=request.data.get('department')
        
        if(Login.objects.filter(username=email)):
            return Response({'message':'Duplicate Username Found'},status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login= self.serializer_class_login(data={'username': email,'password':password})
        if serializer_login.is_valid():
            Log = serializer_login.save()
            login_id = Log.id
            print(login_id)
        if (studentregister.objects.filter(phone=phone)):
            return Response ({'message':'Duplicate phonenumber Found!'},status=status.HTTP_400_BAD_REQUEST)
        elif (teacherregister.objects.filter(phone=phone)):
            return Response({'message':'Duplicate phonenuber Found!'},status =status.HTTP_400_BAD_REQUEST)
        else:
            serializer= self.serializer_class(data={'log_id':login_id,'name':Name,'email':email,'phone':phone,"subject":subject,'course':course,'password':password,'role':role,'department':department})
            print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'Registration sucessful','sucess':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Registration Failed','sucess':False},status=status.HTTP_400_BAD_REQUEST) 
class Get_All_Teacher(GenericAPIView):
    serializer_class=teacherregisterserializer
    def get(self,request):
        queryset = teacherregister.objects.all()
        if(queryset.count()>0):
            serializer=teacherregisterserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all user data set','sucess':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'non data available','sucess':False},status = status.HTTP_201_CREATED)        

class Get_Single_teacher(GenericAPIView):
    serializer_class=teacherregisterserializer
    def get(self,request,id):
        queryset =teacherregister.objects.get(pk=id)
        serializer=teacherregisterserializer(queryset)
        return Response({'data':serializer.data,'message':'single user data set','sucess':True},status=status.HTTP_200_OK)
class Update_teacherAPIview(GenericAPIView):
    serializer_class=teacherregisterserializer
    def put(self,request,id):
        queryset = teacherregister.objects.get(pk=id)
        print(queryset)
        serializer = teacherregisterserializer(instance = queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'updated sucessfully','sucess':True},status= status.HTTP_200_OK)
        else:
            return Response({'data':'something went wrong','sucess':False},status=status.HTTP_200_OK)     
class Delete_teacherAPIView(GenericAPIView):
    def delete(self,request,id):
        delproduct= teacherregister.objects.get(pk=id) 
        delproduct.delete()
        return Response({'message':'Deleted sucessfully','sucess':True}, status=status.HTTP_200_OK)
class TeacherSearchAPIView(GenericAPIView):
    def post(self,request):
        query = request.data.get('query')
        print(query)
        
        i = teacherregister.objects.filter(Name__icontains=query) 
        for dta in i:
            print(dta)
        
        data= [{'name':info.name,'phone':info.phone,'Email':info.email,' password': info. password,'Loginid':info.login_id,'subject':info.subject,'course':info.course } for info in i]
        return Response({'data': data, 'message':'sucessfully fetched','sucess': True}, status=status.HTTP_200_OK)      
                       
class LoginAPIVIEW(GenericAPIView):
    serializer_class_login=Loginserializer
    def get(self,request):
        
        
        username=request.data.get('username')
        password=request.data.get('password')
        logreg=Login.objects.filter(username=username, password= password)
        if(logreg.count()>0):
            read_serializer = Loginserializer(logreg, many=True)
            for i in read_serializer.data:
                login_id=i['id']
                role=i['role']
                print(id)
            student_data = studentregister.objects.filter( log_id= login_id).values()
            for i in student_data:
               id=i['id']
               Name=i['Name']
               
               print(Name,id)
                
            print(student_data)
            
            teacher_data =teacherregister.objects.filter(log_id=login_id).values()
            for i in teacher_data:
                id=['id']
                Name=i["Name"]
                
            return Response({'data':{'login_id':login_id,'user_id':id,'username':username,'password':password,'role':role}})
        else:
            return Response({'data':'username or password is invalid'}, status = status.HTTP_400_BAD_REQUEST)

 
