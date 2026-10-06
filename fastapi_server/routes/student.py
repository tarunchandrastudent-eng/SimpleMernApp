from fastapi import APIRouter
from database import student_collection
from models import student_model
student_router = APIRouter(prefix = "/student",tags = ["STUDENTS"])

#localhost:8000/student/addstudent
@student_router.post("/addstudent")
def addstudent(stu:student_model):
    result = student_collection.insert_one(stu.model_dump())
    #model_dump is used to convert class fields into dict 
    return " add student method is called"

#localhost:8000/student/getstudent
@student_router.get("/getstudent")
def getstudent():
    return "get student method is called"

#localhost:8000/student/updatestudent
@student_router.put("/updatestudent")
def updatestudent():
    return "updatestudent method is called"

#localhost:8000/student/deletestudent
@student_router.delete("/deletestudent")
def deletestudent():

    return "deletestudent method is called"
