<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $data = "Name: $name\nEmail: $email\nMessage: $message\n\n";

    if (file_put_contents('data.txt', $data, FILE_APPEND)) {
        echo 'Message successfully sent!';
    } else {
        echo 'Failed to save the message. Please try again.';
    }
}
?>
