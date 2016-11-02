<?php
/**
 * Created by PhpStorm.
 * User: stephen.dance
 * Date: 29/02/2016
 * Time: 14:43
 */
include_once "functions.php";

$feed = file_get_contents('http://www.bbc.com/sport/football/rss.xml');
$xml = new SimpleXMLElement($feed);
$items = $xml->channel->item;

$feedArray = array();
foreach ($items as $element) {

    $itemArray = array();
    $itemArray["title"] = $element->title;
    $itemArray["description"] = $element->description;
    $itemArray["date"] = $element->pubDate;

    array_push($feedArray,$itemArray);
}

function sortFunction( $a, $b ) {
    return strtotime($a["date"]) < strtotime($b["date"]);
}
usort($feedArray, "sortFunction");

echo "<div class='feed'><strong>" . $feedArray[0]["title"] . "</strong><br>" . $feedArray[0]["description"] . "<br><span>" . time_elapsed_string($feedArray[0]["date"]) . "</span></div>";
?>
