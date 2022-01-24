import { Request, Response } from "express";

import { Course } from "../../interface/Course";
export async function validateCourse(Course: Course){

    Course.name = Course.name.trim();
  Course.price = Course.price;
    Course.requirement  = Course.requirement.trim();
    Course.workload =   Course.workload.trim();
if (Course.name == "") {
   return JSON.stringify({
     message: "Todos os campos são obrigatórios",
   });
}
   
  
}
export default validateCourse;
