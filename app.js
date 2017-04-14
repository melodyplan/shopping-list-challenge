//need to enter items for purchase by entering text and hitting "Return" or clicking the "Add item" button
//check and uncheck items on list by click the "Check" button
//permanents remove items from the list

//test to check if connected with index.html

var shoppingList = {
    items: []
};

// State modification functions
// I am pushing an item into the shoppingList.
// document.getElementById("submit").onClick = function(event) {
//     var addItem = function(shoppingList, item) {
//         shoppingList.items.push(item);
//         return item.submit();
//     };
// }

$('#js-shopping-list-form').on('submit', function(event) {
  event.preventDefault();
  var item = $('#shopping-list-entry').val();
  $('#shopping-list-entry').val('');

  addItem(shoppingList, item);
})

var addItem = function(shoppingList, item) {
  shoppingList.items.push(item);
  renderHtml(shoppingList);

}

var renderHtml = function(shoppingList) {
  var html = shoppingList.items.map(function(item) {
    var li = $('.templates li').clone();
    li.find('.shopping-item').text(item);
    return li;
  })
  $('.shopping-list').html(html)
}

//need to slashout an item using strike()?
$('shopping-item-controls').on('check', function(event) {
    var checkItem = $('shopping-item-toggle').strike();
    var deleteItem = $('shopping-item-delete').toggle(function(item) {
      delete item;
    })
})
//var checkItem = shoppingList.items.



// ['item 1', 'item 2', 'item 3']
// ['<li>item 1</li>', '<li>item 2</li>', '<li>item 3</li>']

//let's modify from the last exercise mebbe with the separated shopping list?:

// // Render functions
// // I don't really understand this bit?
// var renderList = function(shoppingList, element) {
//     var itemsHTML = shoppingList.items.map(function(item) {
//         return '<li>' + item + '</li>';
//     });
//     element.html(itemsHTML);
// };
//
// // Event listener to add item?
// $('#js-shopping-list-form').submit(function(event) {
//     event.preventDefault();
//     addItem(shoppingList, $('#js-shopping-list-form').val());
//     renderList(shoppingList, $('.shopping-list'));
// });
//
// // Event listener to remove shopping list item?
// // how come this doesn't link? i'm using the correct identifier
// $('.shopping-item-delete').click(function(event) {
//     this.remove();
// });
