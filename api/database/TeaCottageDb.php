<?php
    namespace TeaCottage;
    include_once "../config/DbConfig.php";

    use TeaCottage\DbConfig;
    use mysqli;
use stdClass;

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

        function get($id) {
            $tea = array();
            $query = "SELECT t.*, group_concat(tq.quantity_id, ':', concat(q.qty, q.metric), ':', tq.Price) as Quantity, tq.Price from todo.feature f 
                        JOIN todo.tea t
                            ON t.id = f.tea_id
                        JOIN todo.tea_quantity tq
                            ON tq.tea_id = t.id
                        JOIN todo.quantity q
                            ON q.id = tq.quantity_id";

            $sql = $id == null ? "$query" : "$query WHERE t.Id = $id";
            if ($result = $this->conn->query($sql)) {
                $allRows = mysqli_fetch_all($result, MYSQLI_ASSOC);

                if(count($allRows) > 0) {
                    foreach($allRows as $row) {
                        $item = array(
                            "id" => $row["Id"],
                            "name" => $row["Name"],
                            "description" => $row["Description"],
                            "imageUrl" => $row["ImageUrl"],
                            "price" => array(),
                            "healthBenefits" => $row["HealthBenefits"],
                        );
                        $quantity_price = explode(",", $row["Quantity"]);
                        foreach($quantity_price as $row) {
                            $item_price = explode(":", $row);
                            $priceObject = new stdClass();
                            $priceObject->priceId = $item_price[0];
                            $priceObject->quantity = $item_price[1];
                            $priceObject->price = $item_price[2];
                      
                            array_push($item["price"], $priceObject);
                        }
                                              
                        array_push($tea, $item);
                    }
                    return $tea;
                }
                else {
                    throw new \Exception("No products found");
                }
            }
        }

        function getFeature() {
            $tea = array();
            $todayDate = date('Y-m-d H:i:s');

            $sql = "SELECT t.Id, t.Name, t.ImageUrl, t.Description from todo.feature f 
                    JOIN todo.tea t
                        ON t.id = f.tea_id 
                    WHERE f.feature_to <= STR_TO_DATE('$todayDate','%Y-%m-%d %Y') or f.feature_to is null";
            
            if ($result = $this->conn->query($sql)) {
                $allRows = mysqli_fetch_all($result, MYSQLI_ASSOC);

                if(count($allRows) > 0) {
                    foreach($allRows as $row) {
                        $item = array(
                            "id" => $row["Id"],
                            "name" => $row["Name"],
                            "imageUrl" => $row["ImageUrl"],
                            "description" => $row["Description"]
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