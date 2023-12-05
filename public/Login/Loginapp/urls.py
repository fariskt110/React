from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('StudentRegisterAPIView',views.StudentRegisterAPIView.as_view(),name='StudentRegisterAPIView'),
    path('LoginAPIVIEW',views.LoginAPIVIEW.as_view(),name='LoginAPIVIEW'),
    path('Get_All_student',views.Get_All_student.as_view(),name='Get_All_student'),
    path('Get_Single_student/<int:id>',views.Get_Single_student.as_view(),name='Get_Single_student'),
    path('Update_studentAPIview/<int:id>',views.Update_studentAPIview.as_view(),name='Update_studentAPIview'),
    path('Delete_studentAPIView/<int:id>',views.Delete_studentAPIView.as_view(),name='Delete_studentAPIView'),
    path('StudentSearchAPIView',views.StudentSearchAPIView.as_view(),name='StudentSearchAPIView'),
    path('TeacherRegistrationAPIView',views.TeacherRegistrationAPIView.as_view(),name='TeacherRegistrationAPIView'),
    path('Get_All_Teacher',views.Get_All_Teacher.as_view(),name='Get_All_Teacher'),
    path('Get_Single_teacher/<int:id>',views.Get_Single_teacher.as_view(),name='Get_Single_teacher'),
    path('Update_teacherAPIview/<int:id>',views.Update_teacherAPIview.as_view(),name='Update_teacherAPIview'),
    path('Delete_teacherAPIView/<int:id>',views.Delete_teacherAPIView.as_view(),name='Delete_teacherAPIView'),
    path('TeacherSearchAPIView',views.TeacherSearchAPIView.as_view(),name='TeacherSearchAPIView'),  
 ]
