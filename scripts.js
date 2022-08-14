let items = document.querySelectorAll(".calculator__item");

let result = document.querySelector(".calculator__result");
result.innerHTML = 0;

items.forEach((item, itemIndex) =>
    item.addEventListener("click", () => {
        if (itemIndex === 1) {
            result.innerHTML = 0;
        } else if (itemIndex === 2) {
            console.log("delete");
        } else if (itemIndex === 3) {
            console.log("delete");
        } else if (itemIndex === 4) {
            result.innerHTML += 1;
        } else if (itemIndex === 5) {
            result.innerHTML = 2;
        } else if (itemIndex === 6) {
            result.innerHTML = 3;
        }
    }))