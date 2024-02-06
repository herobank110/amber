<?php

require __DIR__ . "/adminSession.php";

header("Content-Type: application/json");
echo json_encode(["isLoggedIn" => isLoggedAsAsAdmin()]);
