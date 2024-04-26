const wordInput = document.getElementById("wordInput");
const submitWord = document.getElementById("clickforResult");
const resultArea = document.getElementById("resultDisplay");
const accordion = document.getElementById("accordionFlushExample");

//function to create elements
function element(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}

//Fetch API when user clicks on search button

submitWord.addEventListener("click", () => {
  const word = wordInput.value;
  console.log(word);

})