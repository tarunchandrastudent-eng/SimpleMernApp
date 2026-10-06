from fastapi import APIRouter
from database import staff_collection
from models import staff_model

staff_router = APIRouter(prefix = "/staff",tags=["STAFFS"])

#localhost:8000/staff/addstaff
@staff_router.post("/addstaff")
def addstaff():
    return " add staff method is called"


#localhost:8000/staff/getstaff
@staff_router.get("/getstaff")
def getstaff():
    return "get staff method is called"

#localhost:8000/staff/updatestaff
@staff_router.put("/updatestaff")
def updatestaff():
    return "updatestaff method is called"

#localhost:8000/staff/deletestaff
@staff_router.delete("/deletestaff")
def deletestaff():
    return "deletestaff method is called"
