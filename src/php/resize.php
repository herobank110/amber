<?php
require __DIR__ . "/../../vendor/autoload.php";
require __DIR__ . "/paths.php";

$src = urldecode(filter_input(INPUT_GET, "src"));
$x = filter_input(INPUT_GET, "x", FILTER_VALIDATE_INT);
$y = filter_input(INPUT_GET, "y", FILTER_VALIDATE_INT);

if (!$src || !$x || $x < 0 || !$y || $y < 0) {
    http_response_code(400);
    return;
}

$inPath = preg_replace("/^.*\/share\/upload\//", "$SMB_ROOT/upload/", $src);
$outFileName = preg_replace_callback("/^(.*)\.(\w*)$/", function ($matches) use ($x, $y) {return "$matches[1].${x}x$y.$matches[2]";}, basename($src));
$outPath = "$SMB_ROOT/resize/$outFileName";

$success = true;
if (!file_exists($outPath)) {
    # not cached - generate now
    try {
        $image = new \Gumlet\ImageResize($inPath);
        $image->crop($x, $y);
        $image->save($outPath);
    } catch (\Throwable $e) {
        http_response_code(500);
        echo $e->getMessage();
        return;
    }
}

$fp = fopen($outPath, 'rb');
header("Content-Type: image/png");   // TODO: should this always be png?
header("Content-Length: " . filesize($outPath));
header("Cache-Control: max-age=84600, public");
fpassthru($fp);
