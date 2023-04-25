const rootEndpoint = "https://familytriz.azurewebsites.net/api/studentapi";

// Model class for a student
export class Student {
  constructor(id, couleur, points, eleves) {
    this.id = id;
    this.couleur = couleur;
    this.points = points;
    this.eleves = eleves;
  }
}

class StudentService {
  async fetchStudents() {
    const students = await this.fetchFromApi(
      rootEndpoint
    );
    return this.createStudents(students);
  }

  async findStudentById(id) {
    const students = await this.fetchFromApi(
      `${rootEndpoint}/${id}`
    );

    return this.createStudent(students[0]);
  }

  async fetchFromApi(query) {
    console.log(`Fetching API with query ${query}`);
    try {
      const response = await fetch(query);
      // FIXME: JSON parse error when ingredient is not found
      const content = await response.json();
      return content;
    } catch (e) {
      console.error(e);
    }
  }

  // Create a Student model object from a subset of data fields returned by API
  createStudent(student) {
    return new Student(
      student.id,
      student.couleur,
      student.points,
      student.eleves
    );
  }

  // Create a student model object list from the array returned by API
  createStudents(students) {
    // Create a student object for each element in the array
    return students.map((Student) => this.createstudent(student));
  }
}

export default new StudentService();
