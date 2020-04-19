<?php 
    namespace TeaCottage;

    class DbConfig {
        private $config;

        function getDbConfig() {
            return $this->config = array(
                    "db" => "localhost",
                    "dbUserName" => "root",
                    "password" => "khikho",
                );
        }
    }
?>