const to_garage = document.getElementById("to_garage");
const to_winners = document.getElementById("to_winners");
let winners_content = document.getElementById("winners_content");
let container = document.getElementById("container");

let cars_bloks = document.getElementById("cars_bloks");

to_winners.onclick = function () {
    winners_content.style.display = "block";
    container.style.display = "none";
}

to_garage.onclick = function () {
    container.style.display = "block";
    winners_content.style.display = "none";
}

const apiURL = 'http://localhost:3000';
const garage = `${apiURL}/garage`;

async function show() {
    const response = await fetch(`${garage}`);
    const data = await response.json();
    for (cars of data) {
        let cars = document.createElement("div");
        cars.className = "cars";
        let box_btn = document.createElement("div");
        box_btn.className = "box-btn";
        let btn_select = document.createElement("button");
        btn_select.className = "btn btn-select";
        btn_select.id = "select-car";
        btn_select.innerHTML = "Select";
        let btn_remove = document.createElement("button");
        btn_remove.className = "btn btn-remove";
        btn_remove.id = "remove-car";
        btn_remove.innerHTML = "Remove";
        let name_car = document.createElement("span");
        name_car.className = "name-car";
        name_car.innerHTML = data.name;

        let box_car = document.createElement("div");
        box_car.className = "box-car";
        let btnA = document.createElement("button");
        btnA.className = "btn-cars btnA";
        btnA.id = "start-engine-car";
        btnA.innerHTML = "A";
        let btnB = document.createElement("button");
        btnB.className = "btn-cars btnB";
        btnB.id = "stop-engine-car";
        btnB.innerHTML = "B";
        let car = document.createElement("div");
        car.className = car;
        car.id = "car";

        let finish = document.createElement("div");
        finish.className = "finish";
        let img = document.createElement("img");
        img.src = "https://img.icons8.com/external-flaticons-flat-flat-icons/64/FA5252/external-finish-line-achievements-flaticons-flat-flat-icons.png"

        let block = document.createElement("div");
        block.className = "block";
        box_btn.append(btn_select, btn_remove, name_car);
        box_car.append(btnA, btnB, car);

        cars.append(box_btn, box_car);
        finish.append(img);

        block.append(cars, finish);

        cars_bloks.append(block);
    }

}
show();
