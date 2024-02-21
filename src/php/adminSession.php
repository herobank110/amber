<?php

function isLoggedInAsAdmin()
{
    ensure_session_started();
    return (bool) ($_SESSION["isLoggedInAsAdmin"] ?? false);
}

function beginAdminSession()
{
    ensure_session_started();
    $_SESSION["isLoggedInAsAdmin"] = true;
}

function endAdminSession()
{
    ensure_session_started();
    $_SESSION["isLoggedInAsAdmin"] = false;
}

function ensure_session_started()
{
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
}