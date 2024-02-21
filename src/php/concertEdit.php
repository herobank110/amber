<?php
require_once __DIR__ . '/db.php';

$p_id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT);
$p_title = filter_input(INPUT_POST, 'title');
$p_when = filter_input(INPUT_POST, 'when');
$p_poster = filter_input(INPUT_POST, 'poster', FILTER_VALIDATE_URL);
$p_thumb = filter_input(INPUT_POST, 'thumb', FILTER_VALIDATE_URL);
$p_facebook = filter_input(INPUT_POST, 'facebook', FILTER_VALIDATE_URL);

if (!$p_id || !$p_title || !strtotime($p_when) || !$p_poster || !$p_thumb || !$p_facebook) {
    http_response_code(400);
    echo "One or more invalid or missing parameter(s)";
    return;
}

function insertConcert() {
    $statement = getOrCreateDb()->prepare(<<<SQL
        INSERT INTO `concerts`
        (`title`, `when`, `poster`, `thumb`, `facebook`)
        VALUES (?, ?, ?, ?, ?)
        SQL);
    $statement->bind_param("sssss", $p_title, $p_when, $p_poster, $p_thumb, $p_facebook);
    return $statement->execute();
}

function updateConcert() {
    $statement = getOrCreateDb()->prepare(<<<SQL
        UPDATE `concerts`
        SET `title` = ?, `when` = ?, `poster` = ?, `thumb` = ?, `facebook` = ?
        WHERE `id` = ?
        SQL);
    $statement->bind_param("sssssi", $p_title, $p_when, $p_poster, $p_thumb, $p_facebook, $p_id);
    return $statement->execute();
}

$success = $p_id == -1 ?  insertConcert() : updateConcert();
if (!$success) {
    http_response_code(500);
    echo "Failed to update database";
    return;
}
