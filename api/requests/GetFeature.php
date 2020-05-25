<?php
    require_once '../vendor/autoload.php';
    use DI\ContainerBuilder;

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    $builder = new DI\ContainerBuilder();
    $container = $builder->build();
    $teaRequest = $container->get("TeaCottage\TeaController"); 
    echo $teaRequest->getFeature();
?>