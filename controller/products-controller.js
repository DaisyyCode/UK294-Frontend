class ProductsController {
  static async initialize() {
    const productList = document.getElementById("product-list");
    const error = document.getElementById("product-error");

    try {
      const products = await ProductModel.getAll();

      products.forEach((product) => {
        const row = productList.insertRow();
        row.insertCell().textContent = product.sku;
        row.insertCell().textContent = product.name;
        row.insertCell().textContent = product.price;
        row.insertCell().textContent = product.stock;
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Löschen";
        deleteButton.addEventListener("click", () => {
          ProductsController.handleDelete(product, row);
        });
        row.insertCell().append(deleteButton);
      });
    } catch (exception) {
      error.textContent = exception.message;
    }
  }
  // deleteFunction
  static async handleDelete(product, row) {
    const error = document.getElementById("product-error");
    const confirmed = confirm(
      `Möchtest du "${product.name}" wirklich löschen?`,
    );

    if (!confirmed) {
      return;
    }

    try {
      error.textContent = "";
      await ProductModel.delete(product.sku);
      row.remove();
    } catch (exception) {
      error.textContent = exception.message;
    }
  }
}

ProductsController.initialize();
