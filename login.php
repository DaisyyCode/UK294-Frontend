<?php $page_title = "Login"; ?>
<?php $page_controller_path = "controller/login-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>

<h1>Login</h1>

<p id="login-error"></p>

<form id="login-form">
    <label for="username">Benutzername</label>
    <input type="text" id="username" required>

    <label for="password">Passwort</label>
    <input type="password" id="password" required>

    <button type="submit">Anmelden</button>
</form>

<?php require "view/blocks/footer.php"; ?>