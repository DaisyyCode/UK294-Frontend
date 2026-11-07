// class AuthModel {
//   static async login(username, password) {
//     const response = await fetch(`${API_URL}/authenticate`, {
//       method: "POST",
//       credentials: "include",
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.status === 401) {
//       throw new Error("Benutzername oder Passwort ist falsch.");
//     }

//     if (!response.ok) {
//       throw new Error("Die Anmeldung ist fehlgeschlagen.");
//     }
//   }
//   static async logout() {
//     const response = await fetch(`${API_URL}/unauthenticate`, {
//       method: "POST",
//       credentials: "include",
//     });

//     if (!response.ok) {
//       throw new Error("Die Abmeldung ist fehlgeschlagen.");
//     }
//   }
//   static async isAuthenticated() {
//     const response = await fetch(`${API_URL}/categories`, {
//       credentials: "include",
//     });

//     return response.ok;
//   }
// }

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

    // Neu: Nach dem Login den Logout-Vermerk entfernen
    try {
      localStorage.removeItem("loggedOut");
    } catch (exception) {}
  }

  static async logout() {
    const response = await fetch(`${API_URL}/unauthenticate`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Die Abmeldung ist fehlgeschlagen.");
    }

    // Neu: Im Browser vermerken, dass der Benutzer abgemeldet ist
    try {
      localStorage.setItem("loggedOut", "true");
    } catch (exception) {}
  }

  static async isAuthenticated() {
    // Neu: Nach dem Logout gilt der Benutzer sofort als nicht angemeldet
    try {
      if (localStorage.getItem("loggedOut") === "true") {
        return false;
      }
    } catch (exception) {}

    const response = await fetch(`${API_URL}/categories`, {
      credentials: "include",
    });

    return response.ok;
  }
}
