<?php
    require_once '../vendor/autoload.php';
    use DI\ContainerBuilder;

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    if (true) {
                    //echo "something";
        $builder = new DI\ContainerBuilder();
        $container = $builder->build();
        $teaRequest = $container->get("TeaCottage\TeaController"); 
    }
    // class TeaRequest {
    //     function Get() {
    //         if (true) {
    //             //echo "something";
    //             $builder = new \DI\ContainerBuilder();
    //             $container = $builder->build();
    //             $teaRequest = $container->get("TeaController"); 
    //         }
    //     }

    //     // spl_autoload_register(function ($class_name) {
    //     //     $path = "../config/";
    //     //     include $path.$class_name . '.php';
    //     // });
    // }

    
?>