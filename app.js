//need to enter items for purchase by entering text and hitting "Return" or clicking the "Add item" button
//check and uncheck items on list by click the "Check" button
//permanents remove items from the list

//hint: check out .submit, preventDefault(), toggleClass(), and closest()

console.log("hi");
//test to check if connected with index.html

var shoppingList = {
    items: []
};

// State modification functions
// I am pushing an item into the shoppingList.
document.getElementById("shopping-list-item").onClick = function(event) {
    var addItem = function(shoppingList, item) {
        shoppingList.items.push(item);
        return item.submit();
    };
}

//let's modify from the last exercise mebbe with the separated shopping list?:

// Render functions
// I don't really understand this bit?
var renderList = function(shoppingList, element) {
    var itemsHTML = shoppingList.items.map(function(item) {
        return '<li>' + item + '</li>';
    });
    element.html(itemsHTML);
};

// Event listeners
$('.shopping-list-add').submit(function(event) {
    event.preventDefault();
    addItem(shoppingList, $('.shopping-list-add-input').val());
    renderList(shoppingList, $('.shopping-list'));
});

// Event listener to remove shopping list item?
$('.shopping-item-delete').click(function(event) {
    this.remove();
});


