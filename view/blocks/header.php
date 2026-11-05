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
    <link rel="stylesheet" type="text/css" href="view/stylesheets/style.css">
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
<body>
    <nav>
        <a href="index.php">Start</a>
        <a href="products.php">Produkte</a>
        <?php if ($page_title === "Login"): ?>
            <a href="login.php">Login</a>
        <?php else: ?>
            <button type="button" id="logout-button">Abmelden</button>
        <?php endif; ?>
    </nav>
    <main>