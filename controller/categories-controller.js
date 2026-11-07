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
        // The edit link is now appended to the last cell of the row
        // row.insertCell().append(editLink);
        // The edit link is now appended to the last cell of the row along with the view link and delete button
        const viewLink = document.createElement("a");
        viewLink.href = `category.php?id=${encodeURIComponent(category.category_id)}`;
        viewLink.textContent = "Ansehen";
        viewLink.className = "btn btn-sm btn-outline-primary";

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Löschen";
        deleteButton.className = "btn btn-sm btn-danger";
        deleteButton.addEventListener("click", () => {
          CategoriesController.handleDelete(category, row);
        });

        row.insertCell().append(viewLink, " ", editLink, " ", deleteButton);
      });
    } catch (exception) {
      error.textContent = exception.message;
    }
  }
  static async handleDelete(category, row) {
    const error = document.getElementById("category-error");
    const confirmed = confirm(
      `Möchtest du die Kategorie "${category.name}" wirklich löschen?`,
    );

    if (!confirmed) {
      return;
    }

    try {
      error.textContent = "";
      await CategoryModel.delete(category.category_id);
      row.remove();
    } catch (exception) {
      error.textContent = exception.message;
    }
  }
}

CategoriesController.initialize();
