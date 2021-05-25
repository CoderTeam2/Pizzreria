var menu_list_array = ["Veg Capcicum Pizza","Veg Double Cheese Pizza","Veg Onion Pizza","Veg Mushroom Pizza","Veg Five Pepper Pizza"];
var length = menu_list_array.length;
function getmenu(){
 var htmldata;
 htmldata = "<ol>";
 menu_list_array.sort();
 for(var i=0; i<length; i++){
     htmldata+="<li>"+menu_list_array[i]+"</li>";
 }
 htmldata+="</ol>";
 document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
 var htmldata;
 menu_list_array.sort();
 htmldata+="<section>";
 for(var j=0; j<length; j++){
     htmldata+="<div>"+"<img src='pizza.png'>"+menu_list_array[j]+"</div>";
 }
 htmldata+="</section>";
 document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
 var item=document.getElementById("add_item").value;
 menu_list_array.push(item);
 add_item();
}