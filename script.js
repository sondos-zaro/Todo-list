let add = document.getElementById("add-btn");
let lists = document.getElementById("lists");
let inputField = document.getElementById("title-input");
let dayField = document.getElementById("day-input");
const currentday = new Date().getDate();

add.addEventListener('click', function() {
    let title = document.createElement('p');
    let reminingTime = document.createElement('span')
    let deletelist = document.createElement('button')
    deletelist.innerText = "Delete"
    deletelist.style.marginLeft = "35%"
    title.innerText = inputField.value;
    reminingTime.innerText = calculateTime();
    if (reminingTime.innerText === "late")
        reminingTime.style.color = "red";
    lists.appendChild(title);
    lists.appendChild(reminingTime);
    lists.appendChild(deletelist);
    inputField.value = "";
    dayField.value = "";

    deletelist.addEventListener('click', function() {

        lists.removeChild(title);
        lists.removeChild(reminingTime)
        lists.removeChild(deletelist)
    })


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