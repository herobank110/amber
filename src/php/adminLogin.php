<?php

require __DIR__ . "/adminSession.php";

$username = $_POST["username"];
$password = $_POST["password"];

$success = $username === "admin" && $password === getenv("AMBER_ADMIN_PW");
if ($success) {
    beginAdminSession();
}

header("Content-Type: application/json");
echo json_encode(["success" => $success]);
