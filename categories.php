<?php $page_title = "Kategorien"; ?>
<?php $page_model_path = "model/category-model.js"; ?>
<?php $page_controller_path = "controller/categories-controller.js"; ?>
<?php require "view/blocks/header.php"; ?>

<div class="d-flex justify-content-between align-items-center mb-3">
    <h1>Kategorien</h1>
    <a href="category-form.php" class="btn btn-success">Neue Kategorie erstellen</a>
</div>

<p id="category-error" class="text-danger"></p>

<div class="table-responsive">
    <table class="table table-striped table-hover bg-white align-middle">
        <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Aktionen</th>
            </tr>
        </thead>
        <tbody id="category-list"></tbody>
    </table>
</div>

<?php require "view/blocks/footer.php"; ?>