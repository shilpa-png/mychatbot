async function getAnswer() {
  const queryInput = document.getElementById("userQuery");
  const answerBox = document.getElementById("answer");
  let query = queryInput.value.trim();

  if (!query) {
    answerBox.textContent = "Please type an item name!";
    return;
  }

  // Replace spaces with underscores for Wikipedia API
  query = query.replace(/ /g, "_");

  try {
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${query}`);
    const data = await response.json();

    if (data.extract) {
      answerBox.textContent = data.extract;
    } else {
      answerBox.textContent = "Sorry, I couldn't find instructions for that item.";
    }
  } catch (error) {
    answerBox.textContent = "Error fetching data: " + error.message;
  }
}
