console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item, arr){
    arr.push(item);
    return true;
}
function listItems( arr ){
    for(i of arr){
        console.log(`An item in this array:`, i);
    }
    return true;
}
function empty( arr ){
    while(arr.length > 0){
        arr.pop();
    }
    return true;
}
console.log('Basket is:' , basket);
console.log('Adding test1', addItem('test1', basket));
console.log('Adding test2', addItem('test2', basket));
console.log('Adding test3', addItem('test3', basket));
console.log('Adding test4', addItem('test4', basket));
console.log('Basket is now:' , basket);
console.log('A list of all the items in the basket' , listItems(basket));
console.log('Now emptying the list....' , empty(basket));
console.log('Empty list: ', basket);