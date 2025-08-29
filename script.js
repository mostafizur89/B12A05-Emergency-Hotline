// coin section

// let coins = 100;
// const coinBtn = document.getElementById("coin-btn");
// const historyCard = document.getElementById("history-card");

// document.querySelectorAll(".call-btn").forEach(call-btn => {
//     call-btn.addEventListener("click", () => {
//         if (coins >= 20){
//             coins -=20;
//             coinBtn.textContent = coins: ${coins}
//             alert(calling ${call-btn.textContent }...);
//             if(history-card.textContent === "no call "){
//                historyCard.textContent = "";
//             }
//             historyCard.innerHTML += <p>called: ${call-btn.textContent}</p>
//         }
//         else{
//             alert("Not enough sufficient coin")
//         }
//     })
// })



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


