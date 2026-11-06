class ProductModel {
  // Listed the whole product
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

  // Add or save the product
  static async save(sku, product) {
    const response = await fetch(
      `${API_URL}/product/${encodeURIComponent(sku)}`,
      {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(product),
      },
    );

    if (response.status === 401) {
      window.location.href = "login.php";
      return;
    }

    if (response.status === 400) {
      throw new Error("Bitte prüfe deine Eingaben.");
    }

    if (!response.ok) {
      throw new Error("Das Produkt konnte nicht gespeichert werden.");
    }
  }
  // delete a prokduct.
  static async delete(sku) {
    const response = await fetch(
      `${API_URL}/product/${encodeURIComponent(sku)}`,
      {
        method: "DELETE",
        credentials: "include",
      },
    );

    if (response.status === 401) {
      window.location.href = "login.php";
      return;
    }

    if (!response.ok) {
      throw new Error("Das Produkt konnte nicht gelöscht werden.");
    }
  }
}
