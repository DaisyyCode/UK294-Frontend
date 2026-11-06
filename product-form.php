<?php $page_title = "Neues Produkt"; ?>
<?php $page_model_path = "model/product-model.js"; ?>
<?php $page_controller_path = "controller/product-form-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>

<h1>Neues Produkt</h1>

<p id="product-form-error"></p>

<form id="product-form">
    <label for="sku">SKU</label>
    <input type="text" id="sku" required>

    <label for="name">Name</label>
    <input type="text" id="name" required>

    <label for="description">Beschreibung</label>
    <textarea id="description" required></textarea>

    <label for="image">Bild-URL</label>
    <input type="url" id="image" required>

    <label for="price">Preis</label>
    <input type="number" id="price" min="0" step="0.01" required>

    <label for="stock">Lagerbestand</label>
    <input type="number" id="stock" min="0" step="1" required>

    <label for="id_category">Kategorie-ID</label>
    <input type="number" id="id_category" min="1" step="1" required>

    <label for="active">Aktiv</label>
    <input type="checkbox" id="active" checked>

    <button type="submit">Speichern</button>
</form>

<?php require "view/blocks/footer.php"; ?>