<?php
$arr = ['abc' => 333];
$json = json_encode($arr);
//sleep(1);

header("Content-Type: application/json; charset=utf-8");
echo $json;