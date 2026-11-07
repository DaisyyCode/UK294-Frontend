<?php $page_title = "Home"; ?>
<?php $page_controller_path = "controller/index-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>
<h1 class="mb-4">Willkommen</h1>

<div class="row g-3">
    <div class="col-md-6">
        <div class="card shadow-sm h-100">
            <div class="card-body">
                <h2 class="h4">Produkte</h2>
                <p class="text-muted">Produkte auflisten, ansehen, erstellen, bearbeiten und löschen.</p>
                <a href="products.php" class="btn btn-primary">Zu den Produkten</a>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card shadow-sm h-100">
            <div class="card-body">
                <h2 class="h4">Kategorien</h2>
                <p class="text-muted">Kategorien auflisten, ansehen, erstellen, bearbeiten und löschen.</p>
                <a href="categories.php" class="btn btn-primary">Zu den Kategorien</a>
            </div>
        </div>
    </div>
</div>
<?php require "view/blocks/footer.php"; ?>