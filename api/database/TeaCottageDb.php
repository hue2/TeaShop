<?php
    namespace TeaCottage;
    include_once "../config/DbConfig.php";

    use TeaCottage\DbConfig;
    use mysqli;

    class TeaDatabase {
        private $conn;

        function __construct(DbConfig $config)
        {
            $db = $config->getDbConfig();
            $this->conn = new mysqli($db["db"], $db["dbUserName"], $db["password"]);
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        }

        function Save() {

        }

        function Get($id = null) {
            $tea = array();

            $sql = $id == null ? "SELECT * from todo.teacottage" : "SELECT * from todo.teacottage WHERE Id = $id";
            if ($result = $this->conn->query($sql)) {
                $allRows = mysqli_fetch_all($result, MYSQLI_ASSOC);

                if(count($allRows) > 0) {
                    foreach($allRows as $row) {
                        $item = array(
                            "id" => $row["Id"],
                            "name" => $row["Name"],
                            "description" => $row["Description"],
                            "price" => $row["Price"],
                            "imageUrl" => $row["ImageUrl"],
                            "healthBenefits" => $row["HealthBenefits"],
                        );

                        array_push($tea, $item);
                    }

                    return $tea;
                }
                else {
                    throw new \Exception("No products found");
                }
            }
        }
    }

?>