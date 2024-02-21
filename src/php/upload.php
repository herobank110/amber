<?php
require __DIR__ . "/../../vendor/autoload.php";
require __DIR__ . "/paths.php";

use Gupalo\UidGenerator\UidGenerator;

$_FILE_KEY = "file";

if (!isset($_FILES[$_FILE_KEY])) {
    http_response_code(400);
    echo 'missing file';
    return;
}

$storage = new \Upload\Storage\FileSystem("$SMB_ROOT/upload");
$file = new \Upload\File($_FILE_KEY, $storage);
$file->setName($file->getName() . "." . UidGenerator::generate(6));
$file->addValidations([
    new \Upload\Validation\Mimetype([
        "image/png", "image/jpeg", "image/webp"
    ]),
    new \Upload\Validation\Size("20M"),
]);

try {
    $success = $file->upload();
} catch (\Exception $e) {
    $success = false;
    $error = $e->getMessage() . ": " . $file->getErrors()[0];
}

$json = ["success" => $success];
if ($success) {
    $json["url"] = "$_SERVER[REQUEST_SCHEME]://$_SERVER[SERVER_NAME]/share/upload/" . $file->getNameWithExtension();
} else {
    $json["error"] = $error;
}

header("Content-Type: application/json");
echo json_encode($json);
