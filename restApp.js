
/* let fooditem = [
    {
    id: 'number',
    name: 'string',
    description: 'string',
    price: 'number',
    available: 'boolean t/f',
    },

    {
    id: 'number',
    name: 'string',
    description: 'string',
    price: 'number',
    available: 'boolean t/f',
    },
    {
    id: 'number',
    name: 'string',
    description: 'string',
    price: 'number',
    available: 'boolean t/f',
    },
    {
    id: 'number',
    name: 'string',
    description: 'string',
    price: 'number',
    available: 'boolean t/f',
    },
] */

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

function GenerateMenuDisplay(variable) {

    let docparent = document.querySelector('body ul');

    let itemcontainer = document.createElement('li');

    let itemname = document.createElement('p');
    itemname.textContent = variable.name;

    docparent.appendChild(itemcontainer);
    itemcontainer.appendChild(itemname);
}

window.addEventListener('load', function () {

    GetAllFoodItems();

});