<?php $page_title = "Kategorie"; ?>
<?php $page_model_path = "model/category-model.js"; ?>
<?php $page_controller_path = "controller/category-form-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>

<a href="categories.php" class="btn btn-link px-0 mb-3">← Zurück zur Liste</a>

<div class="row justify-content-center">
    <div class="col-md-8 col-lg-6">
        <div class="card shadow-sm">
            <div class="card-body">
                <h1 id="form-title" class="h3 mb-3">Neue Kategorie</h1>

                <p id="category-form-error" class="text-danger"></p>

                <form id="category-form">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" id="name" class="form-control" required>
                    </div>

                    <div class="form-check mb-3">
                        <input type="checkbox" id="active" class="form-check-input" checked>
                        <label for="active" class="form-check-label">Aktiv</label>
                    </div>

                    <button type="submit" class="btn btn-primary">Speichern</button>
                </form>
            </div>
        </div>
    </div>
</div>

<?php require "view/blocks/footer.php"; ?>