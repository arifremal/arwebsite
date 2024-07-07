import { StudentModel } from '../student.model'
import { Student } from './strudent.interface'

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student)
  return result
}

const getAllStudentsfromDB = async () => {
  const result = await StudentModel.find()
  return result
}
const getsingleStudentfromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}

export const SteudentServices = {
  createStudentIntoDB,
  getAllStudentsfromDB,
  getsingleStudentfromDB,
}
