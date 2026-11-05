class LayoutController {
  static initialize() {
    const logoutButton = document.getElementById("logout-button");

    if (logoutButton) {
      logoutButton.addEventListener("click", LayoutController.handleLogout);
    }
  }

  static async handleLogout() {
    try {
      await AuthModel.logout();
      window.location.href = "login.php";
    } catch (exception) {
      alert(exception.message);
    }
  }
}

LayoutController.initialize();
