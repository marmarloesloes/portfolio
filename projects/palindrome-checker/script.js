const button = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

button.addEventListener("click", () => {
const inputValue = textInput.value.trim().toLowerCase();

const cleanedValue = inputValue.replace(/[^a-z0-9]/gi, '');
  
  if (cleanedValue === "") {
  alert("Please input a value");
} else {
  const reversedValue = cleanedValue.split('').reverse().join('');
  if (cleanedValue === reversedValue) {
    result.textContent = `${inputValue} is a palindrome`;
  } else {
    result.textContent = `${inputValue} is not a palindrome`;
  }
}
});