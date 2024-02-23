<?php
require_once __DIR__ . '/adminSession.php';
require_once __DIR__ . '/db.php';

function readParams() {
    return [
        'op' => filter_input(INPUT_POST, 'op'),
        'id' => filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT),
        'title' => filter_input(INPUT_POST, 'title'),
        'when' => filter_input(INPUT_POST, 'when'),
        'poster' => filter_input(INPUT_POST, 'poster', FILTER_VALIDATE_URL),
        'thumb' => filter_input(INPUT_POST, 'thumb', FILTER_VALIDATE_URL),
        'facebook' => filter_input(INPUT_POST, 'facebook', FILTER_VALIDATE_URL, FILTER_NULL_ON_FAILURE),
    ];
}

function validateParams($params) {
    if (!$params['op'] ||
        // For delete query, only ID is required.
        ($params['op'] == 'delete' && !$params['id']) ||
        // Otherwise, all fields are required (even for update).
        (!$params['id'] || !$params['title'] || !strtotime($params['when']) ||
        !$params['poster'] || !$params['thumb'])
    )
        return [false, "One or more invalid or missing parameter(s)"];
    return [true, ""];
}

function createStatement($params) {
    if ($params['op'] == 'insert') {
        return insertConcertStatement($params);
    } else if ($params['op'] == 'update') {
        return updateConcertStatement($params);
    } else if ($params['op'] == 'delete') {
        return deleteConcertStatement($params);
    } else {
        return [null, "Invalid operation"];
    }
}

function insertConcertStatement($params) {
    $statement = getOrCreateDb()->prepare(<<<SQL
        INSERT INTO `concerts`
        (`title`, `when`, `poster`, `thumb`, `facebook`)
        VALUES (?, ?, ?, ?, ?)
        SQL);
    if ($statement === false)
        return [null, "Failed to prepare statement"];
    if(!$statement->bind_param("sssss", $params['title'], $params['when'], $params['poster'], $params['thumb'], $params['facebook']))
        return [null, "Failed to bind parameters: $statement->error"];
    return [$statement, ""];
}

function updateConcertStatement($params) {
    $statement = getOrCreateDb()->prepare(<<<SQL
        UPDATE `concerts`
        SET `title` = ?, `when` = ?, `poster` = ?, `thumb` = ?, `facebook` = ?
        WHERE `id` = ?
        SQL);
    if (!$statement)
        return [null, "Failed to prepare statement"];
    if(!$statement->bind_param("sssssi", $params['title'], $params['when'], $params['poster'], $params['thumb'], $params['facebook'], $params['id']))
        return [null, "Failed to bind parameters: $statement->error"];
    return [$statement, ""];
}

function deleteConcertStatement($params) {
    $statement = getOrCreateDb()->prepare(<<<SQL
        DELETE FROM `concerts`
        WHERE `id` = ?
        SQL);
    if ($statement === false)
        return [null, "Failed to prepare statement"];
    if(!$statement->bind_param("i", $params['id']))
        return [null, "Failed to bind parameters: $statement->error"];
    return [$statement, ""];
}

function executeStatement($statement) {
    try {
        if (!$statement->execute()) {
            return [false, "Failed to execute statement: $statement->error"];
        }
    } catch (mysqli_sql_exception $e) {
        return [false, "Failed to execute statement (exception): " . $e->getMessage()];
    }
    return [true, ""];
}

function main() {
    if (!isLoggedInAsAdmin()) {
        http_response_code(403);
        echo "Admin only";
        return;
    }

    $params = readParams();
    [$valid, $errorMessage] = validateParams($params);
    if (!$valid) {
        http_response_code(400);
        echo "Validation Failed: $errorMessage";
        return;
    }

    [$statement, $errorMessage] = createStatement($params);
    if ($statement === null) {
        http_response_code(500);
        echo "Failed to create statement: $errorMessage";
        return;
    }

    [$success, $errorMessage] = executeStatement($statement);
    if (!$success) {
        http_response_code(500);
        echo "Failed to execute statement: $errorMessage";
        return;
    }

    header('Content-Type: application/json');
    if ($params['op'] == 'insert') {
        // return the id of the newly inserted row
        echo json_encode(['id' => $statement->insert_id]);
    } else {
        // For other operations, no info.
        echo json_encode([]);
    }
}

main();
