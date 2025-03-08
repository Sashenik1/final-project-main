//--------------------------Set Date-----------------------------

function updateDate() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let formattedDate = now.toLocaleDateString("en-UK", options).toUpperCase();
    formattedDate = formattedDate.replace(/(\d{1,2}) (\w+) (\d{4})/, '$2 $1, $3');

    document.getElementById("date1").textContent = formattedDate;
    document.getElementById("date2").textContent = formattedDate;
    document.getElementById("date3").textContent = formattedDate;
}
updateDate();


//-----------------------Menu------------------------

function toggleMenu() {
    document.body.classList.toggle('open-mobile-menu');
    document.querySelector(".hamburger").classList.toggle('is-active');
}

//-------------------------rotateSVGs--------------------------

function rotateSVGs() {
    let svg1 = document.getElementById("svg1").innerHTML;
    let svg2 = document.getElementById("svg2").innerHTML;
    let svg3 = document.getElementById("svg3").innerHTML;
    let svg4 = document.getElementById("svg4").innerHTML;
   



    document.getElementById("svg1").innerHTML = svg4;
    document.getElementById("svg2").innerHTML = svg1;
    document.getElementById("svg3").innerHTML = svg2;
    document.getElementById("svg4").innerHTML = svg3;
}

setInterval(rotateSVGs, 1000);





//----------------------- Exchange rates-----------------------------

async function fetchExchangeRates() {
    try {
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        const data = await response.json();

        const usd = data.find(currency => currency.cc === 'USD');
        const eur = data.find(currency => currency.cc === 'EUR');

        document.getElementById('usd-rate').textContent = `USD: ${usd.rate.toFixed(2)} UAH`;
        document.getElementById('eur-rate').textContent = `EUR: ${eur.rate.toFixed(2)} UAH`;
    } catch (error) {
        document.getElementById('usd-rate').textContent = 'Помилка завантаження USD';
        document.getElementById('eur-rate').textContent = 'Помилка завантаження EUR';
        console.error('Помилка отримання даних:', error);
    }
}

fetchExchangeRates();

//------------------------Swap shapes-----------------------

let currentPos = 1;

function swapShapes() {
    let square = document.getElementById("square");
    let nextPos = (currentPos % 4) + 1;
    let nextElement = document.getElementById(`pos${nextPos}`).firstElementChild;

    document.getElementById(`pos${currentPos}`).appendChild(nextElement);
    document.getElementById(`pos${nextPos}`).appendChild(square);
    document.getElementById(`p${nextPos}`).style.fontWeight = 600;
    document.getElementById(`p${currentPos}`).style.fontWeight = 400;

    currentPos = nextPos;
}