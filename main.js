var menu_list_array = ["Veg Capcicum Pizza","Veg Double Cheese Pizza","Veg Onion Pizza","Veg Mushroom Pizza","Veg Five Pepper Pizza"];
var length = menu_list_array.length;
function getmenu(){
 var htmldata;
 htmldata = "<ol>";
 menu_list_array.sort();
 for(var i=0; i<menu_list_array.length; i++){
     htmldata+="<li>"+menu_list_array[i]+"</li>";
 }
 htmldata+="</ol>";
 document.getElementById("display_menu").innerHTML = htmldata;
}
var item = "";
function add_item(){
    console.log("hi")
 var htmldata = "";
console.log(htmldata);
 item = document.getElementById("add_item").value;
 menu_list_array.sort();
 htmldata="<section class='cards'>";
 for(var j=0; j< menu_list_array.length; j++){
     htmldata = htmldata+"<div class='card'>"+menu_list_array[j]+"</div>";
 }
 htmldata = htmldata+"</section>";
 console.log(htmldata);
 document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
 item = document.getElementById("add_item").value;
 menu_list_array.push(item);
 add_item();
}