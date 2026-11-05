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
      });
    } catch (exception) {
      error.textContent = exception.message;
    }
  }
}

ProductsController.initialize();
