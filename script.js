const tempLoad = () => {
    let fa = document.getElementById("fa");
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#04D9B2";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca";
        fa.style.color = "#F2CB05";
    }, 1000);

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9";
        fa.style.color = "#F25C05";
    }, 2000);

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8";
        fa.style.color = "#F20505";
    }, 3000);

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7";
        fa.style.color = "#730202";
    }, 4000);
};

setInterval(() => {
    tempLoad();
}, 5000);

tempLoad(); // Inicializando no carregamento

const calculateTemp = () => {
    const numberTemp = document.getElementById("temp").value;

    const tempSelected = document.querySelector("#temp_diff");
    const valeTemp = tempSelected.options[tempSelected.selectedIndex].value;

    const fahToCel = (fahr) => {
        let celsius = ((fahr - 32) * 5) / 9;
        return celsius;
    };

    const celToFah = (cel) => {
        let fahrenheit = cel * (9 / 5) + 32;
        return fahrenheit;
    };

    let result;
    if (valeTemp == "cel") {
        result = celToFah(numberTemp); // Corrigido o nome da função
        document.getElementById("resultContainer").innerHTML = `= ${result.toFixed(2)} °Fahrenheit`;
    } else {
        result = fahToCel(numberTemp); // Corrigido o nome da função
        document.getElementById("resultContainer").innerHTML = `= ${result.toFixed(2)} °Celsius`;
    }
};
