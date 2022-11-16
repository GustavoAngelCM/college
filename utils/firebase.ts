export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
}

// ENDPOINTS TESTING

// entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement   === SM

// entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement/QgUOCRzmz4vtS0SmzX3l/    === SM - 2022

// entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement/QgUOCRzmz4vtS0SmzX3l/teachers/UomoC4nGx9BZWlGEeQN8    === Mrs. Ivan Feeney DVM

export const ENDPOINT_TEST = "entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement/QgUOCRzmz4vtS0SmzX3l/teachers/UomoC4nGx9BZWlGEeQN8/courses"

// ENPOINTS WORDS

// *  school config
export const ENTITY_MANAGEMENT = 'entityManagement'

// *  scolar year
export const SCHOOL_MANAGEMENT = 'schoolManagement'

// *  personal
export const ADMINISTRATIVE_PERSONAL = 'administrativePersonal'
export const TEACHERS = 'teachers'
export const FATHERS = 'fathers'
export const STUDENTS = 'students'
export const PEDAGOGICAL_NOTEBOOK = 'pedagogicalNotebook'

// *  scolar year
export const PERIOD = 'period'

// *  courses
export const COURSES = 'courses'