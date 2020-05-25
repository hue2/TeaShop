<?php 
    namespace TeaCottage;

    class TeaController {
        private $teaDb;

        public function __construct(TeaDatabase $db)
        {
            $this->teaDb = $db;
        }

        public function get($id) {
            try {
                $result = $this->teaDb->get($id);
                http_response_code(200);
                echo json_encode($result);
            }
            catch (\Exception $e) {
                http_response_code(400);
                echo json_encode($e->getMessage());
            }
        }

        public function getFeature() {
            try {
                $result = $this->teaDb->getFeature();
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