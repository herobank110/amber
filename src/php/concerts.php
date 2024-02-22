<?php
require_once __DIR__ . '/db.php';

$db = getOrCreateDb();
$statement = $db->prepare("SELECT * from `concerts`");
$statement->execute();
$result = $statement->get_result();
while ($row = $result->fetch_assoc()) {
    $json[] = $row;
}
header("Content-Type: application/json");
echo json_encode($json);