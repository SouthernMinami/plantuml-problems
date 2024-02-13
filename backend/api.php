<?php

require_once __DIR__ . "/vendor/autoload.php";
use function Jawira\PlantUml\encodep;

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === "POST") {

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);


    $data = json_decode(file_get_contents("php://input"), true);
    $uml_code = $data["code"];
    $format = $data["extension"];

    $encoded = encodep($uml_code);

    // switch ($format) {
    //     case "png":
    //         header("Content-Type: image/png");
    //         echo file_get_contents("http://www.plantuml.com/plantuml/png/$encoded");
    //         break;
    //     case "svg":
    //         header("Content-Type: image/svg+xml");
    //         echo file_get_contents("http://www.plantuml.com/plantuml/svg/$encoded");
    //         break;
    //     case "pdf":
    //         header("Content-Type: application/pdf");
    //         echo file_get_contents("http://www.plantuml.com/plantuml/pdf/$encoded");
    //         break;
    //     case "":
    //         echo "http://www.plantuml.com/plantuml/png/$encoded.png";
    //         break;
    //     default:
    //         http_response_code(404);
    //         echo json_encode(["message" => "Not Found"]);
    // }
    echo "https://www.plantuml.com/plantuml/{$format}/{$encoded}";
} else {
    http_response_code(404);
    echo json_encode(["message" => "Not Found"]);
}
