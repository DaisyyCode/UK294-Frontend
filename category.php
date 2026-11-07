<?php $page_title = "Kategoriedetails"; ?>
<?php $page_model_path = "model/category-model.js"; ?>
<?php $page_controller_path = "controller/category-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>

<a href="categories.php" class="btn btn-link px-0 mb-3">← Zurück zur Liste</a>

<p id="category-error" class="text-danger"></p>

<div class="row justify-content-center">
    <div class="col-md-8 col-lg-6">
        <div class="card shadow-sm">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <h1 id="category-name" class="h3 mb-0">Kategoriedetails</h1>
                    <span id="category-active" class="badge bg-secondary"></span>
                </div>

                <dl class="row mb-4">
                    <dt class="col-sm-4">ID</dt>
                    <dd class="col-sm-8" id="category-id"></dd>
                </dl>

                <a id="category-edit-link" href="categories.php" class="btn btn-primary">Bearbeiten</a>
            </div>
        </div>
    </div>
</div>

<?php require "view/blocks/footer.php"; ?>