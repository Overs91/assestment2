document.addEventListener("DOMContentLoaded", function () {
  function createItemList() {
    let numItems;
    do {
      // Prompt the user for the number of items
      numItems = parseInt(
        prompt("How many items would you like in the list? (1-10)"),
        10
      );

      // number withing the range
      if (isNaN(numItems) || numItems < 1 || numItems > 10) {
        alert("Please enter a number between 1 and 10.");
      }
    } while (isNaN(numItems) || numItems < 1 || numItems > 10);

    const itemList = document.getElementById("item-list");

    itemList.innerHTML = "";

    // Generate the list items dynamically
    for (let i = 1; i <= numItems; i++) {
      const item = document.createElement("div");
      item.className = "d-flex mb-4";
      item.innerHTML = `
                <div class="text-primary">
                    <img width="40" height="20" src="demo.files/svg/various/line-chart.svg" alt="...">
                </div>
                <div class="mx-2">
                    <h3 class="h5 fw-bold mb-1">Item #${i}</h3>
                    <p>This is item #${i}.</p>
                </div>
            `;
      itemList.appendChild(item);
    }
  }

  const itemButton = document.getElementById("item-button");
  if (itemButton) {
    itemButton.addEventListener("click", createItemList);
  }
});
