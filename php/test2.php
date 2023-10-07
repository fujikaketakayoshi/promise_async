<?php
$arr = ['abc' => 222];
$json = json_encode($arr);
//sleep(1);

header("Content-Type: application/json; charset=utf-8");
echo $json;