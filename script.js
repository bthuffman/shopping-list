window.onload = function () {
	initShoppingList();
};
/*NOTE This script includes all my comments. The use-this-script.js is to be the one connected to the html.
........................*/
 */
function initShoppingList() {
	let form = document.getElementById("item-form")
	// console.log(form);
// }
	form.addEventListener("submit", (event)=> {
		handleItemForm(event, form);
	//	If the form reference were established inside of this function then it would not be able to be used outside of it.
	});
}

function handleItemForm(event, formRef) {
if(event.preventDefault){

	event.preventDefault();
}
	 addItemToShoppingList();
	// console.log("Event: ", event);
//	the console log is very useful for testing your code bit by bit (recommended you do)
// 	console.log(demo);
	return false;
}
//	event.preventDefualt prevents it from submitting it to a backend service.
//	the second preventDefault creates backwards compatiability for older browser
/* function demo() {
	return 1;
}
*/
//Console logging the demo isn't working.

function addItemToShoppingList() {
	let itemName = document.getElementById("item-name");
	let itemAmount = document.getElementById("item-amount");

	//Creates list item html and appends to page.
	let itemHtml = createListItemHtml(itemName.value, itemAmount.value);
	console.log("Item HTML: ", itemHtml());
	let itemListRef = document.getElementById("shopping-list");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);

}


//To create an html element that will append to our page...
function createListItemHtml(itemName, itemAmount) {
	return '<li> ${itemName} - ${itemAmount} </li>';
}
