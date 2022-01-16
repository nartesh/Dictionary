//variable for displaying the message
let searchMessage = document.querySelector("search_message");

//function for adding a word to the dictionary list
function addWord() {
	let add_word = document.getElementById("wordbox").value;
	let word_list = document.getElementById("wordList");
	word_list.innerHTML += "<li class=\"word-item\">" + add_word + "</li>";
	return false;
}

//function for checking a word whether or not it exists in the dictionary    
function searchWord() {
	let searched_word = document.getElementById("searchbox").value;
	let words = document.getElementsByClassName("word-item"); 
	let exists = 0;
	//checking the word if it exists in the dictionary array
	for (i = 0; i < words.length; i += 2) { 
		if (words[i].innerText === searched_word) {
			exists = 1;
		}
	}
	//display the corresponding message
	if (exists === 0) {
		searchMessage.innerHTML = "The searched word does not exist in the dictionary!<br>";
	} else {
		searchMessage.innerHTML = "The searched word exist in the dictionary!<br>";
	}
	return false;
}