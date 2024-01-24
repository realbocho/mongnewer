const data = {
    "더 건강한 삶을 원한다면 (블록)": ["헬스 5년차가 알려주는 초보 루틴", "Text1b", "Text1c"],
    "Category2": ["Text2a", "Text2b", "Text2c"],
    // Add more categories and text items as needed
};

document.addEventListener('DOMContentLoaded', function () {
    const categoryDropdown = document.getElementById("category");

    // Populate the category dropdown with options
    for (const category in data) {
        const option = document.createElement("option");
        option.value = category;
        option.text = category;
        categoryDropdown.add(option);
    }
});

function generateRandomText() {
    const selectedCategory = document.getElementById("category").value;
    const textItems = data[selectedCategory];
    const outputDiv = document.getElementById("output");

    if (textItems && textItems.length > 0) {
        const randomIndex = Math.floor(Math.random() * textItems.length);
        const randomText = textItems[randomIndex];

        // Create inner circle for text
        const innerCircle = document.createElement("div");
        innerCircle.className = "inner-circle";
        innerCircle.innerText = randomText;

        // Dynamically adjust circle size based on text length
        const textSize = randomText.length * 10; // Adjust the multiplier as needed
        innerCircle.style.width = textSize + "px";
        innerCircle.style.height = textSize + "px";

        // Change background color
        const randomColor = getRandomColor();
        innerCircle.style.backgroundColor = randomColor;

        // Append innerCircle to outputDiv at random position
        const xPos = Math.random() * (window.innerWidth - textSize);
        const yPos = Math.random() * (window.innerHeight - textSize);
        innerCircle.style.position = "absolute";
        innerCircle.style.left = xPos + "px";
        innerCircle.style.top = yPos + "px";
        
        outputDiv.appendChild(innerCircle);
    } else {
        outputDiv.innerText = "Please select a category with text items.";
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
