
import { StudentModel } from "../student.model";
import { Student } from "./strudent.interface";

const createStudentIntoDB = async(student:Student)=>{
    const result = await StudentModel.create(student)
    return result;
}
export const SteudentServices ={
    createStudentIntoDB
}