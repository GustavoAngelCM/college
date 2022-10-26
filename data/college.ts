import { faker } from "@faker-js/faker"

export const quantityTeacher = 50;
export const quantityStudents = 1300;
export const quantityCourses = 36;

export const DATA_TEACHERS = () => Array.from({ length: quantityTeacher, }, (_, i) => ({
  uid: faker.datatype.uuid(),
  fullName: faker.name.fullName()
}))

export const DATA_COURSES = [
  {
    uid: faker.datatype.uuid(),
    course: "1º A",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "1º B",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "1º C",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2º A",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2º B",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2º C",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3º A",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3º B",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3º C",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4º A",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4º B",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4º C",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5º A",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5º B",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5º C",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6º A",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6º B",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6º C",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "1º A",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "1º B",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "1º C",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2º A",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2º B",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2º C",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3º A",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3º B",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3º C",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4º A",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4º B",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4º C",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5º A",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5º B",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5º C",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6º A",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6º B",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6º C",
    grade: "secondary"
  },
]