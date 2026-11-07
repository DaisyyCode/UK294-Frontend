<?php $page_title = "Produkte"; ?>
<?php $page_model_path = "model/product-model.js"; ?>
<?php $page_controller_path = "controller/products-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>

<div class="d-flex justify-content-between align-items-center mb-3">
    <h1>Produkte</h1>
    <a href="product-form.php" class="btn btn-success">Neues Produkt erstellen</a>
</div>

<p id="product-error" class="text-danger"></p>

<div class="table-responsive">
    <table class="table table-striped table-hover bg-white align-middle">
        <thead class="table-dark">
            <tr>
                <th>SKU</th>
                <th>Name</th>
                <th>Preis</th>
                <th>Lagerbestand</th>
                <th>Aktionen</th>
            </tr>
        </thead>
        <tbody id="product-list"></tbody>
    </table>
</div>

<?php require "view/blocks/footer.php"; ?>