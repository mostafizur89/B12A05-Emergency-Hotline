// hearts Selection


function incressLoveCount() {
    const loveCount = document.querySelector(".heart-count");
    let count = parseInt(loveCount.textContent);
    count++;
    loveCount.textContent = count;
}
const hearts = document.querySelectorAll(".heart-btn");
for(const heart of hearts){
    heart.addEventListener("click", incressLoveCount)
}
