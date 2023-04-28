const rootEndpoint = "https://familytriz.azurewebsites.net/api/studentapi";

// Model class for a student
export class Student {
  constructor(id, nom, prenom, promotion, parrainId, familleId, parrain, famille) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.promotion = promotion;
    this.parrainId = parrainId;
    this.familleId = familleId;
    this.parrain = parrain;
    this.famille = famille;
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

  async handleAddStudent(lastName, firstName, promotion, family, parrainId) {
    fetch("https://familytriz.azurewebsites.net/api/StudentApi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom: lastName,
        prenom: firstName,
        promotion: promotion,
        parrainId: parrainId,
        familleId: family.id
      }),
    })
    .then((response) => response.json())
    .catch((error) => {
      // handle error from API here
      console.error("Error sending data:", error);
    });
  };

  async handleUpdateStudent(studentId, lastName, firstName, promotion, family, parrainId) {
    fetch(`https://familytriz.azurewebsites.net/api/StudentApi:${studentId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: studentId,
        nom: lastName,
        prenom: firstName,
        promotion: promotion,
        familleId: family.id,
        parrainId: parrainId,
      }),
    })
    .then((response) =>  response.json())
    .catch((error) => {
      // handle error from API here
      console.error("Error sending data:", error);
    });
  };

  async handleDeleteStudent(studentId) {
    fetch(`https://familytriz.azurewebsites.net/api/StudentApi/${studentId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .catch((error) => {
      // handle error from API here
      console.error("Error deleting data:", error);
    });
  };
  

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
      student.nom,
      student.prenom,
      student.promotion,
      student.parrainId,
      student.familleId,
      student.parrain,
      student.famille
    );
  }

  // Create a student model object list from the array returned by API
  createStudents(students) {
    // Create a student object for each element in the array
    return students.map((student) => this.createStudent(student));
  }
}

export default new StudentService();
