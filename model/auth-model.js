class AuthModel {
  static async login(username, password) {
    const response = await fetch(`${API_URL}/authenticate`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 401) {
      throw new Error("Benutzername oder Passwort ist falsch.");
    }

    if (!response.ok) {
      throw new Error("Die Anmeldung ist fehlgeschlagen.");
    }
  }
  static async logout() {
    const response = await fetch(`${API_URL}/unauthenticate`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Die Abmeldung ist fehlgeschlagen.");
    }
  }
}
