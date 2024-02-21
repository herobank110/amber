<?php

$_db = null;

function getOrCreateDb(): mysqli {
    global $_db;
    if ($_db == null) {
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        $_db = new mysqli('localhost', 'amberAdmin', getenv('AMBER_ADMIN_PW'), 'amberDb');
        if($_db->connect_errno) {
            die("Failed to connect to MySQL: (" . $_db->connect_errno . ") " . $_db->connect_error);
        }
        $_db->set_charset('utf8');
    }
    return $_db;
}
