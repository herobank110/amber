<?php

require __DIR__ . "/adminSession.php";

$username = $_POST["username"];
$password = $_POST["password"];
$redirectTo = $_POST["redirectTo"] ?? "";

$success = $username === "admin" && $password === getenv("AMBER_ADMIN_PW");
if ($success) {
    beginAdminSession();
}

// Redirect mode is the normal use of the website.
if ($redirectTo) {
    if ($success)
        header("Location: $redirectTo");
    else
        header("Location: /?adminE");
    return;
}


// JSON response is just for standalone API testing.
header("Content-Type: application/json");
echo json_encode(["success" => $success]);
