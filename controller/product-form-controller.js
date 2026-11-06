class ProductFormController {
  static initialize() {
    document
      .getElementById("product-form")
      .addEventListener("submit", ProductFormController.handleSubmit);
  }

  static async handleSubmit(event) {
    event.preventDefault();

    const sku = document.getElementById("sku").value.trim();
    const error = document.getElementById("product-form-error");

    const product = {
      active: document.getElementById("active").checked ? 1 : 0,
      id_category: Number(document.getElementById("id_category").value),
      name: document.getElementById("name").value.trim(),
      image: document.getElementById("image").value.trim(),
      description: document.getElementById("description").value.trim(),
      price: Number(document.getElementById("price").value),
      stock: Number(document.getElementById("stock").value),
    };

    try {
      await ProductModel.save(sku, product);
      window.location.href = "products.php";
    } catch (exception) {
      error.textContent = exception.message;
    }
  }
}

ProductFormController.initialize();
