const rootEndpoint = "https://familytriz.azurewebsites.net/api/familyapi";

// Model class for a family
export class Family {
  constructor(id, couleur, points, eleves) {
    this.id = id;
    this.couleur = couleur;
    this.points = points;
    this.eleves = eleves;
  }
}

class FamilyService {
  async fetchFamilies() {
    const families = await this.fetchFromApi(
      rootEndpoint
    );
    return this.createFamilies(families);
  }

  async findFamilyById(id) {
    const families = await this.fetchFromApi(
      `${rootEndpoint}/${id}`
    );

    return this.createFamily(families[0]);
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

  // Create a Family model object from a subset of data fields returned by API
  createFamily(family) {
    return new Family(
      family.id,
      family.couleur,
      family.points,
      family.eleves
    );
  }

  // Create a Family model object list from the array returned by API
  createFamilies(families) {
    // Create a family object for each element in the array
    return families.map((family) => this.createFamily(family));
  }
}

export default new FamilyService();
