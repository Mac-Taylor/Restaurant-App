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
};

function GetBillTotal() {
    let billrequest = new XMLHttpRequest();
    billrequest.open('GET', 'http://tiy-28202.herokuapp.com//bill?table_id=MacsTable');
    billrequest.addEventListener('load', function(){
        let billresponse = JSON.parse(billrequest.responseText);
        console.log(billresponse);

    for (let loop = 0; loop < billresponse.length; loop++) {
        let billtotal = billresponse[loop];
        }
        GenerateMenuDisplay(billresponse[loop]);
    });
    billrequest.send();
}; 

function GenerateMenuDisplay(variable) {

    let docparent = document.querySelector('body ul');

    let itemcontainer = document.createElement('li');

    let itemname = document.createElement('p');
    itemname.textContent = variable.name;

    let itemprice = document.createElement('p');
    itemprice.textContent = variable.price;

    let btn = document.createElement('button');
    btn.textContent = 'Order!';

    docparent.appendChild(itemcontainer);
    itemcontainer.appendChild(itemname);
    itemcontainer.appendChild(itemprice);
    itemcontainer.appendChild(btn);
}

window.addEventListener('load', function () {

    GetAllFoodItems();
    GetBillTotal();

}); 