<?php $page_title = "Login"; ?>
<?php $page_controller_path = "controller/login-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>

<div class="row justify-content-center">
    <div class="col-md-6 col-lg-4">
        <div class="card shadow-sm">
            <div class="card-body">
                <h1 class="h3 mb-3">Login</h1>

                <p id="login-error" class="text-danger"></p>

                <form id="login-form">
                    <div class="mb-3">
                        <label for="username" class="form-label">Benutzername</label>
                        <input type="text" id="username" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Passwort</label>
                        <input type="password" id="password" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Anmelden</button>
                </form>
            </div>
        </div>
    </div>
</div>

<?php require "view/blocks/footer.php"; ?>