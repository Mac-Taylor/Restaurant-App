// JavaScript file for Restuarant Ordering application


function GetFoodItems() {

    let foodrequest = new XMLHttpRequest(); 
    foodrequest.open('GET', 'phttp://tiy-28202.herokuapp.com/menu');
    foodrequest.addEventListener('load', function() {
    let foodresponse = JSON.parse(foodrequest.responseText);
        console.log(foodresponse);
    });

    for (let i = 0; i < foodresponse.length; i++) { //get the '.length' part of the loop correct
        let fooditem = {
            id: foodresponse.id[i],
            name: foodresponse.name[i],
            description: foodresponse.description[i], //make sure that the indexing is in the right place
            price: foodresponse.price[i],
            available: foodresponse.available[i],
        }
    };
    
    foodrequest.send();
}



window.addEventListener('load', function() {

    GetFoodItems();

});