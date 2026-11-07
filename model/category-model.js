class CategoryModel {
  static async getAll() {
    const response = await fetch(`${API_URL}/categories`, {
      credentials: "include",
    });

    if (response.status === 401) {
      window.location.href = "login.php";
      return [];
    }

    if (!response.ok) {
      throw new Error("Die Kategorien konnten nicht geladen werden.");
    }

    return response.json();
  }

  // Neue Methode zum Abrufen einer Kategorie nach ID
  static async getById(categoryId) {
    const response = await fetch(
      `${API_URL}/category/${encodeURIComponent(categoryId)}`,
      {
        credentials: "include",
      },
    );

    if (response.status === 401) {
      window.location.href = "login.php";
      return null;
    }

    if (response.status === 404) {
      throw new Error("Die Kategorie wurde nicht gefunden.");
    }

    if (!response.ok) {
      throw new Error("Die Kategorie konnte nicht geladen werden.");
    }

    return response.json();
  }

  static async create(category) {
    const response = await fetch(`${API_URL}/category`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(category),
    });

    CategoryModel.checkSaveResponse(response);
  }

  static async update(categoryId, category) {
    const response = await fetch(
      `${API_URL}/category/${encodeURIComponent(categoryId)}`,
      {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify(category),
      },
    );

    CategoryModel.checkSaveResponse(response);
  }

  static checkSaveResponse(response) {
    if (response.status === 401) {
      window.location.href = "login.php";
      throw new Error("Bitte melde dich erneut an.");
    }

    if (response.status === 400) {
      throw new Error("Bitte prüfe deine Eingaben.");
    }

    if (!response.ok) {
      throw new Error("Die Kategorie konnte nicht gespeichert werden.");
    }
  }
}
