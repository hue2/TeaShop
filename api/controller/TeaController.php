<?php 
    namespace TeaCottage;

    class TeaController {
        private $teaDb;

        public function __construct(TeaDatabase $db)
        {
            $this->teaDb = $db;
        }

        public function Get() {
            try {
                $result = $this->teaDb->get();
                http_response_code(200);
                echo json_encode($result);
            }
            catch (\Exception $e) {
                http_response_code(400);
                echo json_encode($e->getMessage());
            }
        }

        public function GetFeatured() {
            try {
                $result = $this->teaDb->get();
                http_response_code(200);
                echo json_encode($result);
            }
            catch (\Exception $e) {
                http_response_code(400);
                echo json_encode($e->getMessage());
            }
        }
    }

?>