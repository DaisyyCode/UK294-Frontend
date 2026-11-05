class ProductModel {
  static async getAll() {
    const response = await fetch(`${API_URL}/products`, {
      credentials: "include",
    });

    if (response.status === 401) {
      window.location.href = "login.php";
      return [];
    }

    if (!response.ok) {
      throw new Error("Die Produkte konnten nicht geladen werden.");
    }

    return response.json();
  }
}
