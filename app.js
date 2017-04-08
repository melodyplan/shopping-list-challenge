//need to enter items for purchase by entering text and hitting "Return" or clicking the "Add item" button
//check and uncheck items on list by click the "Check" button
//permanents remove items from the list

//hint: check out .submit, preventDefault(), toggleClass(), and closest()

console.log("hi");
//test to check if connected with index.html

var state = {
    items: []
};

// State modification functions
document.getElementById("shopping-list-entry").onClick = function(event) {
    var addItem = function(state, item) {
        state.items.push(item);
    };
}

