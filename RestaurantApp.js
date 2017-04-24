

function GetAllFoodItems() {


    let foodrequest = new XMLHttpRequest();
    foodrequest.open('GET', 'http://tiy-28202.herokuapp.com/menu');
    foodrequest.addEventListener('load', function () {
        let foodresponse = JSON.parse(foodrequest.responseText);
        console.log(foodresponse);

        for (let i = 0; i < foodresponse.length; i++) { //get the '.length' part of the loop correct
            let fooditem = {
                id: foodresponse[i].id,
                name: foodresponse[i].name,
                description: foodresponse[i].description, //make sure that the indexing is in the right place
                price: foodresponse[i].price,
                available: foodresponse[i].available,
            };
            GenerateMenuDisplay(foodresponse[i]);


            console.log(fooditem);
        };
    });
    foodrequest.send();
}; // function to define 'GET' request to pull menu/food data from the API

function GetBillTotal() {
    let billrequest = new XMLHttpRequest();
    billrequest.open('GET', 'http://tiy-28202.herokuapp.com/bill?table_id=Mac');
    billrequest.addEventListener('load', function(){
        let billtotal = 0;
        let billresponse = JSON.parse(billrequest.responseText);
        console.log(billresponse);

    for (let loop = 0; loop < billresponse.items.length; loop++) {
        billtotal = billtotal + billresponse.items[loop].price;
    }

    console.log(billtotal)

        // GenerateMenuDisplay(billresponse[loop]);
    });
    billrequest.send();
}; // function to get the number value of the total of all the item prices in the order, the bill total.

function GenerateMenuDisplay(variable) {

    let docparent = document.querySelector('body ul');

    let itemcontainer = document.createElement('li');

    let itemname = document.createElement('p');
    itemname.textContent = variable.name;

    let itemprice = document.createElement('p');
    itemprice.textContent = variable.price;

    let btn = document.createElement('button');
    btn.textContent = 'Order!';
    btn.addEventListener('click', function(){
        let request = new XMLHttpRequest();
        request.open('POST', 'http://tiy-28202.herokuapp.com/order'); //http://tiy-28202.herokuapp.com/order
         request.addEventListener('load', function(){
            GetBillTotal();
        })
        request.send(JSON.stringify({table_id: 'Mac', menu_id: variable.id}));

    });

    docparent.appendChild(itemcontainer);
    itemcontainer.appendChild(itemname);
    itemcontainer.appendChild(itemprice);
    itemcontainer.appendChild(btn);
} // Why does this show up without calling it? Answer = it is being called inside the other functions that 
  // that are called in the 'load' event listenener

window.addEventListener('load', function () {
    GetAllFoodItems();
    GetBillTotal();
}); // Event listener for when the page loads

