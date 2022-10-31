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

export const DATA_WORK = () => Array.from({ length: 15, }, (_, i) => ({
  uid: faker.datatype.uuid(),
  sentence: faker.lorem.sentence(3)
}))

export const DATA_COURSES = [
  {
    uid: faker.datatype.uuid(),
    course: "1ºA",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "1ºB",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "1ºC",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2ºA",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2ºB",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2ºC",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3ºA",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3ºB",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3ºC",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4ºA",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4ºB",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4ºC",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5ºA",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5ºB",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5ºC",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6ºA",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6ºB",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6ºC",
    grade: "primary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "1ºA",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "1ºB",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "1ºC",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2ºA",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2ºB",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "2ºC",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3ºA",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3ºB",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "3ºC",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4ºA",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4ºB",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "4ºC",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5ºA",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5ºB",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "5ºC",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6ºA",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6ºB",
    grade: "secondary"
  },
  {
    uid: faker.datatype.uuid(),
    course: "6ºC",
    grade: "secondary"
  },
]

export const DATA_MATTER = [
  {
    uid: faker.datatype.uuid(),
    name: "Matemática"
  },
  {
    uid: faker.datatype.uuid(),
    name: "Lenguaje"
  },
  {
    uid: faker.datatype.uuid(),
    name: "Física"
  },
  {
    uid: faker.datatype.uuid(),
    name: "Química"
  },
  {
    uid: faker.datatype.uuid(),
    name: "Biología"
  },
  {
    uid: faker.datatype.uuid(),
    name: "Historia"
  },
  {
    uid: faker.datatype.uuid(),
    name: "Geografía"
  }
]

// export const DATA_DIMENSIONS = [
//   {
//     label: "Evaluación",
//     options: [
//       { value: "ser", labe: "🐬 Dolphin" },
//       { value: "Giraffe", labe: "🦒 Giraffe" },
//     ],
//   },
// ]