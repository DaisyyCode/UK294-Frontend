<?php $page_title = "Produkte"; ?>
<?php $page_model_path = "model/product-model.js"; ?>
<?php $page_controller_path = "controller/products-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>

<h1>Produkte</h1>

<p id="product-error"></p>

<table>
    <thead>
        <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Preis</th>
            <th>Lagerbestand</th>
        </tr>
    </thead>
    <tbody id="product-list"></tbody>
</table>

<?php require "view/blocks/footer.php"; ?>