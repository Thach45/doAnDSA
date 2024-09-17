console.log('Hello World');
const array = [64, 67, 34, 44, 7, 25, 12, 22, 11];
document.addEventListener("DOMContentLoaded", () => {
    const arrayContainer = document.querySelector(".array-container");
 
    // Hiển thị các phần tử của mảng dưới dạng các thanh
    array.forEach((value,index) => {
        const bar = document.createElement("div");
        bar.classList.add("array-bar");
        bar.classList.add(`${index}`);

        bar.style.height = `${value * 3}px`;
        bar.textContent = value;
        arrayContainer.appendChild(bar);
    });
});
const startProgram = document.querySelector(".start");
startProgram.addEventListener("click", async () => {
    console.log("Start program");
    const arrayBars = document.querySelectorAll(".array-bar");

    // Hàm để thêm thời gian trễ
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    for (let i = 0; i < array.length; i++) {
        let minIdx = i;
        arrayBars[minIdx].style.backgroundColor = "red";

        for (let j = i + 1; j < array.length; j++) {
            arrayBars[j].style.backgroundColor = "yellow";
            await delay(1000); // Thêm thời gian trễ 100ms

            if (array[j] < array[minIdx]) {
                if (minIdx !== i) {
                    arrayBars[minIdx].style.backgroundColor = "blue";
                }
                minIdx = j;
                arrayBars[minIdx].style.backgroundColor = "red";
            } else {
                arrayBars[j].style.backgroundColor = "blue";
            }
        }

        if (minIdx !== i) {
            [array[i], array[minIdx]] = [array[minIdx], array[i]];

            arrayBars[i].style.height = `${array[i] * 3}px`;
            arrayBars[i].textContent = array[i];
            arrayBars[minIdx].style.height = `${array[minIdx] * 3}px`;
            arrayBars[minIdx].textContent = array[minIdx];
            arrayBars[minIdx].style.backgroundColor = "blue";
        }
        arrayBars[i].style.backgroundColor = "green";
    }

    console.log(array);
});