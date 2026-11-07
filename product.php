<?php $page_title = "Produktdetails"; ?>
<?php $page_model_path = "model/product-model.js"; ?>
<?php $page_controller_path = "controller/product-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>

<a href="products.php" class="btn btn-link px-0 mb-3">← Zurück zur Liste</a>

<p id="product-error" class="text-danger"></p>

<div class="card shadow-sm">
    <div class="row g-0">
        <div class="col-md-4 p-3 d-flex align-items-center justify-content-center bg-white">
            <img id="product-image" alt="" class="img-fluid rounded">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <h1 id="product-name" class="h3 mb-0">Produktdetails</h1>
                    <span id="product-active" class="badge bg-secondary"></span>
                </div>

                <p id="product-description" class="text-muted"></p>

                <dl class="row mb-4">
                    <dt class="col-sm-4">SKU</dt>
                    <dd class="col-sm-8" id="product-sku"></dd>

                    <dt class="col-sm-4">Preis</dt>
                    <dd class="col-sm-8" id="product-price"></dd>

                    <dt class="col-sm-4">Lagerbestand</dt>
                    <dd class="col-sm-8" id="product-stock"></dd>

                    <dt class="col-sm-4">Kategorie-ID</dt>
                    <dd class="col-sm-8" id="product-category"></dd>
                </dl>

                <a id="product-edit-link" href="products.php" class="btn btn-primary">Bearbeiten</a>
            </div>
        </div>
    </div>
</div>

<?php require "view/blocks/footer.php"; ?>