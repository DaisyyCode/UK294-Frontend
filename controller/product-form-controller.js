class ProductFormController {
  static async initialize() {
    document
      .getElementById("product-form")
      .addEventListener("submit", ProductFormController.handleSubmit);

    const sku = new URLSearchParams(window.location.search).get("sku");

    if (sku) {
      await ProductFormController.loadProduct(sku);
    }
  }

  static async loadProduct(sku) {
    const error = document.getElementById("product-form-error");

    try {
      const product = await ProductModel.getSku(sku);

      if (!product) {
        return;
      }

      document.getElementById("form-title").textContent = "Produkt bearbeiten";
      document.getElementById("sku").value = product.sku;
      document.getElementById("sku").readOnly = true;
      document.getElementById("name").value = product.name;
      document.getElementById("description").value = product.description;
      document.getElementById("image").value = product.image;
      document.getElementById("price").value = product.price;
      document.getElementById("stock").value = product.stock;
      document.getElementById("id_category").value = product.id_category;
      document.getElementById("active").checked = Number(product.active) === 1;
    } catch (exception) {
      error.textContent = exception.message;
    }
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
