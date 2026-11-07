class LayoutController {
  static async initialize() {
    const logoutButton = document.getElementById("logout-button");

    if (logoutButton) {
      logoutButton.addEventListener("click", LayoutController.handleLogout);
      await LayoutController.protectPage();
    }
  }

  static async protectPage() {
    try {
      const authenticated = await AuthModel.isAuthenticated();

      if (!authenticated) {
        window.location.href = "login.php";
        return;
      }

      document.getElementById("main-content").hidden = false;
    } catch (exception) {
      window.location.href = "login.php";
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
