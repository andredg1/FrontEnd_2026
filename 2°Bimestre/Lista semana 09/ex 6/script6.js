let botao = document.getElementById("calcular");

        botao.addEventListener("click", function() {

            let pacote = Number(document.getElementById("pacote").value);
            let pessoas = Number(document.getElementById("pessoas").value);
            let valorBase = pacote * pessoas;
            let taxaServico = valorBase * 0.10;
            let totalComTaxa = valorBase + taxaServico;
            let desconto = 0;
            
              if(pessoas > 100) {
                desconto = totalComTaxa * 0.05;

            }

            let totalFinal = totalComTaxa - desconto;
            let resultado = document.getElementById("resultado");

            resultado.innerHTML =
            "Custo Bruto: R$ " + valorBase.toFixed(2) + "<br><br>" +
            "Taxa de Serviço: R$ " + taxaServico.toFixed(2) + "<br><br>" +
            "Desconto Aplicado: R$ " + desconto.toFixed(2) + "<br><br>" +
            "Total Final: R$ " + totalFinal.toFixed(2);

        });