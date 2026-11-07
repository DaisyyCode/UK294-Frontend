<?php $page_title = "Neues Produkt"; ?>
<?php $page_model_path = "model/product-model.js"; ?>
<?php $page_controller_path = "controller/product-form-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>

<h1 id="form-title">Neues Produkt</h1>

<p id="product-form-error"></p>

<form id="product-form">
    <div class="mb-3">
        <label for="sku" class="form-label">SKU</label>
        <input type="text" id="sku" class="form-control" required>
    </div>

    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" class="form-control" required>
    </div>

    <div class="mb-3">
        <label for="description" class="form-label">Beschreibung</label>
        <textarea id="description" class="form-control" required></textarea>
    </div>

    <div class="mb-3">
        <label for="image" class="form-label">Bild-URL</label>
        <input type="url" id="image" class="form-control" required>
    </div>

    <div class="mb-3">
        <label for="price" class="form-label">Preis</label>
        <input type="number" id="price" class="form-control" min="0" step="0.01" required>
    </div>

    <div class="mb-3">
        <label for="stock" class="form-label">Lagerbestand</label>
        <input type="number" id="stock" class="form-control" min="0" step="1" required>
    </div>  

    <div class="mb-3">
        <label for="id_category" class="form-label">Kategorie-ID</label>
        <input type="number" id="id_category" class="form-control" min="1" step="1" required>
    </div>

    <div class="mb-3">
        <label for="active" class="form-label">Aktiv</label>
        <input type="checkbox" id="active" class="form-check-input" checked>
    </div>

    <button type="submit" class="btn btn-primary">Speichern</button>
</form>

<?php require "view/blocks/footer.php"; ?>