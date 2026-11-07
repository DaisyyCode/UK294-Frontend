class CategoryFormController {
  static categoryId = null;

  static async initialize() {
    document
      .getElementById("category-form")
      .addEventListener("submit", CategoryFormController.handleSubmit);

    CategoryFormController.categoryId = new URLSearchParams(
      window.location.search,
    ).get("id");

    if (CategoryFormController.categoryId) {
      await CategoryFormController.loadCategory();
    }
  }

  static async loadCategory() {
    const error = document.getElementById("category-form-error");

    try {
      const category = await CategoryModel.getById(
        CategoryFormController.categoryId,
      );

      if (!category) {
        return;
      }

      document.getElementById("form-title").textContent =
        "Kategorie bearbeiten";
      document.getElementById("name").value = category.name;
      document.getElementById("active").checked = Number(category.active) === 1;
    } catch (exception) {
      error.textContent = exception.message;
    }
  }

  static async handleSubmit(event) {
    event.preventDefault();

    const error = document.getElementById("category-form-error");

    const category = {
      active: document.getElementById("active").checked ? 1 : 0,
      name: document.getElementById("name").value.trim(),
    };

    try {
      if (CategoryFormController.categoryId) {
        await CategoryModel.update(CategoryFormController.categoryId, category);
      } else {
        await CategoryModel.create(category);
      }

      window.location.href = "categories.php";
    } catch (exception) {
      error.textContent = exception.message;
    }
  }
}

CategoryFormController.initialize();
