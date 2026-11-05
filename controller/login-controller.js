class LoginController {
  static initialize() {
    document
      .getElementById("login-form")
      .addEventListener("submit", LoginController.handleSubmit);
  }

  static async handleSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("login-error");

    try {
      await AuthModel.login(username, password);
      window.location.href = "products.php";
    } catch (exception) {
      error.textContent = exception.message;
    }
  }
}

LoginController.initialize();
