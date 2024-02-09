<?php

require_once __DIR__ . "/vendor/autoload.php";
use function Jawira\PlantUml\encodep;

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $req = json_decode(file_get_contents('php://input'), true);

    $format = $req['format'];
    $uml_text = $req['text'];
    $encoded_uml = encodep($uml_text);

    echo ('https://www.plantuml.com/plantuml/{$format}/{$encoded_uml}');
}
