let add = document.getElementById("add-btn");
let lists = document.getElementById("lists");
let inputField = document.getElementById("title-input");
let dayField = document.getElementById("day-input");
const currentday = new Date().getDate();

add.addEventListener('click', function() {
    let title = document.createElement('p');
    let reminingTime = document.createElement('span')
    title.innerText = inputField.value;
    reminingTime.innerText = calculateTime();
    if (reminingTime.innerText === "late")
        reminingTime.style.color = "red";
    lists.appendChild(title);
    lists.appendChild(reminingTime)
    inputField.value = "";
    dayField.value = "";
})


function calculateTime() {
    let date = new Date();
    let day = dayField.value;
    let remDay = 0;
    let str;

    if (day > currentday) {
        remDay = day - currentday;
    }
    if (remDay <= 0) {
        str = "late";
    } else
        str = `expire in  and ${remDay} day`
    return str;

}