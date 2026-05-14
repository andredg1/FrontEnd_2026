let botao = document.getElementById("calcular");

        botao.addEventListener("click", function() {

            let valor = Number(document.getElementById("valor").value);

            let bandeira = document.getElementById("bandeira").value;

            let parcelas = Number(document.getElementById("parcelas").value);

            let taxa = 0;

            switch(bandeira) {

                case "visa":
                    taxa = valor * 0.02;
                    break;

                case "master":
                    taxa = valor * 0.0185;
                    break;

                case "elo":
                    taxa = valor * 0.03;
                    break;

            }

            let juros = valor * (0.015 * parcelas);
            let taxaMensal = 12.50 * parcelas;
            let valorTotal = valor + taxa + juros + taxaMensal;
            let valorParcela = valorTotal / parcelas;
            let resultado = document.getElementById("resultado");
            
           resultado.innerHTML =
            "Taxa da bandeira: R$ " + taxa.toFixed(2) + "<br><br>" +
            "Valor dos juros: R$ " + juros.toFixed(2) + "<br><br>" +
            "Taxa mensal: R$ " + taxaMensal.toFixed(2) + "<br><br>" +
            "Valor de cada parcela: R$ " + valorParcela.toFixed(2);
       });
