<?php

require __DIR__ . "/adminSession.php";
require __DIR__ . "/db.php";

if (!isLoggedInAsAdmin()) {
    http_response_code(403);
    return;
}

$p_id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT);
if (!$p_id) {
    http_response_code(400);
    return;
}

$statement = getOrCreateDb()->prepare(<<<SQL
    DELETE FROM `concerts`
    WHERE `id` = ?
    SQL);
$statement->bind_param("i", $p_id);
$statement->execute();
