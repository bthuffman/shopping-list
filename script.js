window.onload = function () {
	initShoppingList();
};

function initShoppingList() {
	let form = document.getElementById("item-form");

	form.addEventListener("submit", (event)=> {
		handleItemForm(event, form);
	//	If the form reference were established inside of this function then it would not be able to be used outside of it.
	});
}

function handleItemForm(event, formRef) {
if(event.preventDefault){
//	prevents it from submitting it to a backend service.
	event.preventDefault();
}
//	the second preventDefault creates backwards compatiability for older browser
	addItemToShoppingList();
	// console.log("Event: ", event);
//	the console log is very useful for testing your code bit by bit (recommended you do)
	return false;
}

function addItemToShoppingList() {
	let itemName = document.getElementById("item-name");
	let itemAmount = document.getElementById("item-amount");

	let itemHtml = createListItemHtml(itemName.value, itemAmount.value);
	console.log("Item HTML: ", itemHtml);
	let itemListRef = document.getElementById("shopping-list");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);

}
//To create an html element that will append to our page...
function createListItemHtml(itemName, itemAmount) {
	return '<li> ${itemName} - ${itemAmount} </li>';
}