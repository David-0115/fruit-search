const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//filter fruit based upon user input (str) passes results to showSuggestions
function search(str) {
	const results = fruit.filter((val) => val.toLowerCase().includes(str));
	showSuggestions(results);
}

//records the user input and passes that value to search function
function searchHandler(e) {
	let inputVal = input.value.toLowerCase();
	search(inputVal);

};

//takes the results from search function clears any existing list creates new list in DOM with results array
function showSuggestions(results) {
	suggestions.innerHTML = ""
	if (results.length > 10) {

	} else {
		results.forEach(element => {
			const newLi = document.createElement('li')
			newLi.innerText = element;
			suggestions.appendChild(newLi);
		});
	};

};

//when a user clicks a suggestion, makes the value of the input box = clicked suggestion, clears remaining list.
function useSuggestion(e) {
	input.value = e.srcElement.innerText;
	suggestions.innerHTML = ""
};

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);