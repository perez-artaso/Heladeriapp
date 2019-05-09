<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require 'vendor/autoload.php';
require './TableCreator.php';
require './IceCreamManager.php';
$config = ['settings' => [
    'displayErrorDetails' => true
]];

$app = new \Slim\App($config);

$app->get('/createTables', function(Request $request, Response $response) {
    if(TableCreator::CreateTable()) {
        return $response
        ->getBody()
        ->write("Tables Successfuly Generated");
    }
});

$app->options('/createTables', function (Request $request, Response $response) {
    return $response->withAddedHeader('Access-Control-Allow-Origin', '*')->withAddedHeader('Access-Control-Allow-Headers', '*');
});

$app->post('/createIceCream', function (Request $request, Response $response) {
    $params = $request->getParsedBody();
    if(IceCreamManager::CreateIceCream($params["sabor"], $params["tipo"], $params["kilos"])) {
        return $response
        ->getBody()
        ->write(
            json_encode(
                array(
                    "statusCode" => 200,
                    "message" => "Item Creado Con Éxito"
                )
            ));
    }
});

$app->options('/createIceCream', function (Request $request, Response $response) {
    return $response->withAddedHeader('Access-Control-Allow-Origin', '*')->withAddedHeader('Access-Control-Allow-Headers', '*');
});

$app->post('/deleteIceCream', function (Request $request, Response $response) {
    $params = $request->getParsedBody();
    if(IceCreamManager::DeleteIceCream($params["id"])) {
        return $response
        ->getBody()
        ->write(
            json_encode(
                array(
                    "statusCode" => 200,
                    "message" => "Item Eliminado Con Éxito"
                )
            ));
    }   
});

$app->options('/deleteIceCream', function (Request $request, Response $response) {
    return $response->withAddedHeader('Access-Control-Allow-Origin', '*')->withAddedHeader('Access-Control-Allow-Headers', '*');
});

$app->post('/updateIceCream', function (Request $request, Response $response) {
    $params = $request->getParsedBody();
    if(IceCreamManager::UpdateIceCream($params["id"], $params["sabor"], $params["tipo"], $params["kilos"])) {
        return $response
        ->getBody()
        ->write("Item Successfuly Updated");
    }
});

$app->options('/updateIceCream', function (Request $request, Response $response) {
    return $response->withAddedHeader('Access-Control-Allow-Origin', '*')->withAddedHeader('Access-Control-Allow-Headers', '*');
});

$app->get('/readIceCreams', function (Request $request, Response $response) {
    
        return $response
        ->getBody()
        ->write(IceCreamManager::ReadIceCreams());
    
});

$app->options('/readIceCreams', function (Request $request, Response $response) {
    return $response->withAddedHeader('Access-Control-Allow-Origin', '*')->withAddedHeader('Access-Control-Allow-Headers', '*');
});

$app->run();

?>