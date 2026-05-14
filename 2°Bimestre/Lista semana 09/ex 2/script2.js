let celsius = document.getElementById("celsius");
        let fahrenheit = document.getElementById("fahrenheit");

        celsius.addEventListener("input", function() {

            let valorCelsius = Number(celsius.value);

            let resultado = (valorCelsius * 9/5) + 32;

            fahrenheit.value = resultado.toFixed(2);

        });

        fahrenheit.addEventListener("input", function() {

            let valorFahrenheit = Number(fahrenheit.value);

            let resultado = (valorFahrenheit - 32) * 5/9;

            celsius.value = resultado.toFixed(2);

        });