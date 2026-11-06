class ProductController {
  static async initialize() {
    const sku = new URLSearchParams(window.location.search).get("sku");
    const error = document.getElementById("product-error");

    if (!sku) {
      error.textContent = "Es wurde keine SKU angegeben.";
      return;
    }

    try {
      const product = await ProductModel.getSku(sku);

      if (!product) {
        return;
      }

      document.getElementById("product-name").textContent = product.name;
      document.getElementById("product-image").src = product.image;
      document.getElementById("product-image").alt = product.name;
      document.getElementById("product-sku").textContent = product.sku;
      document.getElementById("product-description").textContent =
        product.description;
      document.getElementById("product-price").textContent = product.price;
      document.getElementById("product-stock").textContent = product.stock;
      document.getElementById("product-category").textContent =
        product.id_category;
      document.getElementById("product-active").textContent =
        Number(product.active) === 1 ? "Aktiv" : "Inaktiv";
      document.getElementById("product-edit-link").href =
        `product-form.php?sku=${encodeURIComponent(product.sku)}`;
    } catch (exception) {
      error.textContent = exception.message;
    }
  }
}

ProductController.initialize();
