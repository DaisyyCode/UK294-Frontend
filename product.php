<?php $page_title = "Produktdetails"; ?>
<?php $page_model_path = "model/product-model.js"; ?>
<?php $page_controller_path = "controller/product-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>

<h1 id="product-name">Produktdetails</h1>

<p id="product-error"></p>

<img id="product-image" alt="" width="200">
<p>SKU: <span id="product-sku"></span></p>
<p>Beschreibung: <span id="product-description"></span></p>
<p>Preis: <span id="product-price"></span></p>
<p>Lagerbestand: <span id="product-stock"></span></p>
<p>Kategorie-ID: <span id="product-category"></span></p>
<p>Status: <span id="product-active"></span></p>

<a id="product-edit-link" href="products.php">Bearbeiten</a>
<a href="products.php">Zurück zur Liste</a>

<?php require "view/blocks/footer.php"; ?>