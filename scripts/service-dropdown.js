const suggestionsData = [
  "Bridal Makeover",
  "Casual Makeover",
  "Event Makeover",
  "Hair Cut",
  "Hair Care Package",
  "Hair Coloring",
  "Hair Straitening",
  "Facial",
  "Facial Care Package",
];

function showSuggestions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const suggestionsBox = document.getElementById("suggestions");
  suggestionsBox.innerHTML = ""; // Clear previous suggestions

  if (input === "") {
    suggestionsBox.style.display = "none";
    return;
  }

  const filteredSuggestions = suggestionsData.filter((item) =>
    item.toLowerCase().includes(input)
  );
  if (filteredSuggestions.length > 0) {
    filteredSuggestions.forEach((item) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.textContent = item;
      suggestionItem.onclick = () => {
        document.getElementById("searchInput").value = item;
        suggestionsBox.style.display = "none";
      };
      suggestionsBox.appendChild(suggestionItem);
    });
    suggestionsBox.style.display = "block";
  } else {
    suggestionsBox.style.display = "none";
  }
}
