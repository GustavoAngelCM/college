import { faker } from "@faker-js/faker"

export const quantityTeacher = 50;
export const quantityStudents = 1300;
export const quantityCourses = 36;

export const DATA_TEACHERS = () => Array.from({ length: quantityTeacher, }, (_, i) => ({
  uid: faker.datatype.uuid(),
  fullName: faker.name.fullName()
}))

export const DATA_STUDENTS = () => Array.from({ length: quantityStudents, }, (_, i) => ({
  uid: faker.datatype.uuid(),
  fullName: faker.name.fullName(),
  course: faker.helpers.arrayElement(['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C', '4A', '4B', '4C', '5A', '5B', '5C', '6A', '6B', '6C']),
  grade: faker.helpers.arrayElement(['primaria', 'secundaria']),
  note: faker.datatype.number({ min: 10, max: 100, precision: 0.01 })
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