<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CsBe ★ <?= $page_title ?></title>
    <link rel="stylesheet" type="text/css" href="view/stylesheets/style.css">
    <?php if ($page_controller_path): ?>
        <script defer src="<?= $page_controller_path ?>"></script>
    <?php endif; ?>
    <script defer src="model/api-config.js"></script>
</head>
<body>
    <nav>
        <a href="index.php">Start</a>
        <a href="products.php">Produkte</a>
        <a href="login.php">Login</a>
    </nav>
    <main> -->

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CsBe ★ <?= $page_title ?></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css">

    <link rel="stylesheet" type="text/css" href="view/stylesheets/style.css">
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>

    <script defer src="model/api-config.js"></script>
    <script defer src="model/auth-model.js"></script>
    <script defer src="controller/layout-controller.js"></script>
    <?php if (!empty($page_model_path)): ?>
        <script defer src="<?= $page_model_path ?>"></script>
    <?php endif; ?>
    <?php if (!empty($page_controller_path)): ?>
        <script defer src="<?= $page_controller_path ?>"></script>
    <?php endif; ?>
</head>
<body class="bg-light">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container">
            <a class="navbar-brand" href="index.php">CsBe Shop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main-nav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><a class="nav-link" href="index.php">Start</a></li>
                    <li class="nav-item"><a class="nav-link" href="products.php">Produkte</a></li>
                    <li class="nav-item"><a class="nav-link" href="categories.php">Kategorien</a></li>
                </ul>
                <?php if ($page_title === "Login"): ?>
                    <a class="btn btn-outline-light" href="login.php">Login</a>
                <?php else: ?>
                    <button type="button" id="logout-button" class="btn btn-outline-light">Abmelden</button>
                <?php endif; ?>
            </div>
        </div>
    </nav>
    <main class="container">