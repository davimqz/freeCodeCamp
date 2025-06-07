document.getElementById("check-btn").addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value;
  const resultElement = document.getElementById("result");

  if (inputText.trim() === "") {
    alert("Please input a value");
    return;
  }

  const originalText = inputText;
  const cleanedText = originalText
    .replace(/[^a-z0-9]/gi, "") .toLowerCase();            

  const reversedText = cleanedText.split("").reverse().join("");
  const isPalindrome = cleanedText === reversedText;

  if (isPalindrome) {
    resultElement.innerText = `${originalText} is a palindrome.`;
  } else {
    resultElement.innerText = `${originalText} is not a palindrome.`;
  }
});
