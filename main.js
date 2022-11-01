function River() {
    const speed = Number(document.getElementById('inputSpeed').value);
    const speed_river = Number(document.getElementById('inputSpeedRiver').value);
    const time = Number(document.getElementById('inputTime').value);
    const time_river = Number(document.getElementById('inputTimeBack').value);
    if (speed === 0 || time === 0 || speed_river === 0 || time_river === 0) {
        alert("Введені некоректні дані в поля");
    }
    else if (speed - speed_river < 0){
        document.querySelector('.result').innerHTML = "Через сильну течію катер не зміг виплисти";
    }
    else {
        document.querySelector('.result').innerHTML = "Шлях пройдений катером = " + ((speed * time)+((speed - speed_river) * time_river)) + " Км";
        document.querySelector('.text').innerHTML = "Швидкість течії " + speed_river + " км/год";
    }
}