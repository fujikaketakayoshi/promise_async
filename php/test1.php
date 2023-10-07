<?php
$arr = ['abc' => 111];
$json = json_encode($arr);
sleep(1);

header("Content-Type: application/json; charset=utf-8");
echo $json;