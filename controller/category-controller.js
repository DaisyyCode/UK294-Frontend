class CategoryController {
  static async initialize() {
    const categoryId = new URLSearchParams(window.location.search).get("id");
    const error = document.getElementById("category-error");

    if (!categoryId) {
      error.textContent = "Es wurde keine Kategorie-ID angegeben.";
      return;
    }

    try {
      const category = await CategoryModel.getById(categoryId);

      if (!category) {
        return;
      }

      const isActive = Number(category.active) === 1;
      const badge = document.getElementById("category-active");

      document.getElementById("category-name").textContent = category.name;
      document.getElementById("category-id").textContent = category.category_id;
      badge.textContent = isActive ? "Aktiv" : "Inaktiv";
      badge.className = isActive ? "badge bg-success" : "badge bg-secondary";
      document.getElementById("category-edit-link").href =
        `category-form.php?id=${encodeURIComponent(category.category_id)}`;
    } catch (exception) {
      error.textContent = exception.message;
    }
  }
}

CategoryController.initialize();
