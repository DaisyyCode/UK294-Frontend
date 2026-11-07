class CategoriesController {
  static async initialize() {
    const categoryList = document.getElementById("category-list");
    const error = document.getElementById("category-error");

    try {
      const categories = await CategoryModel.getAll();

      categories.forEach((category) => {
        const row = categoryList.insertRow();
        row.insertCell().textContent = category.category_id;
        row.insertCell().textContent = category.name;

        const isActive = Number(category.active) === 1;
        const badge = document.createElement("span");
        badge.textContent = isActive ? "Aktiv" : "Inaktiv";
        badge.className = isActive ? "badge bg-success" : "badge bg-secondary";
        row.insertCell().append(badge);
        const editLink = document.createElement("a");
        editLink.href = `category-form.php?id=${encodeURIComponent(category.category_id)}`;
        editLink.textContent = "Bearbeiten";
        editLink.className = "btn btn-sm btn-outline-secondary";

        row.insertCell().append(editLink);
      });
    } catch (exception) {
      error.textContent = exception.message;
    }
  }
}

CategoriesController.initialize();
