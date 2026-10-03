from fastapi import FastAPI
app = FastAPI()

@app.get("/getStudents")
def getstudents():
    return {"get student method called"}

#localhost:8000/getStudents

@app.post("/addStudent")
def addstudent():
    return {"add student method called"}

#localhost:8000/addStudent

@app.put("/updateStudent")
def updatestudent():
    return {"update student method called"}

#localhost:8000/updateStudent

@app.delete("/deleteStudent")       
def deletestudent():
    return {"delete student method called"}
#localhost:8000/deleteStudent

@app.get("/particularStudent/{userid}")
def particularstudent(userid: int):
    return {"particular student method called for user id": userid}
#localhost:8000/particularStudent/1

@app.get("/getdeptdetails")
def getdeptdetails(dept:str, mark:int):
    return{"dept": dept, "mark": mark}
    