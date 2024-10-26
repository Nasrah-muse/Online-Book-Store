async function fetchBookDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get("bookId");
  console.log("Book ID:", bookId);
  try {
    const response = await fetch("../books.json");
    if (!response.ok) {
      console.error("Response received:", response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const books = await response.json();
    console.log("Fetched books:", books);

    const book = books.find((b) => b.bookId === bookId);
    console.log("Found book:", book);
    if (book) {
      document.querySelector(
        ".book-image"
      ).innerHTML = `<img src="${book.bookImage}" alt="${book.bookTitle}">`;
      document.querySelector(".book-information").innerHTML = `
            <h1>${book.bookTitle}</h1>
            <p class="bookauthor">Author: ${book.bookAuthor}</p>
             <p class="bookdesc">${book.bookDescription}</p>
            <p class="bookdetail">${book.bookDetails}</p>
            <p class="bookprice">Price: $${book.bookPrice}</p>
            <div class="rate">
                <i class="fa-solid fa-star"></i>
                <span>(${book.bookRate})</span>
            </div>
               <div class="quantity-container">
            <label for="quantity">Quantity:</label>
            <div class="quantity-controls">
                <button id="decrease" class="quantity-btn">-</button>
                <input type="text" id="quantity" value="1" readonly>
                <button id="increase" class="quantity-btn">+</button>
            </div>
            <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;
      const quantityInput = document.getElementById("quantity");
      const increaseButton = document.getElementById("increase");
      const decreaseButton = document.getElementById("decrease");

      increaseButton.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
      });

      decreaseButton.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
        }
      });
    } else {
      console.error("Book not found");
    }
  } catch (error) {
    console.error("Error fetching book details:", error);
  }
}
document.addEventListener("DOMContentLoaded", fetchBookDetails);