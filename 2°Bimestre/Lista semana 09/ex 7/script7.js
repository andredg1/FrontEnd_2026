 let botao = document.getElementById("btn");

        botao.addEventListener("click", function() {

            let cartao = document.getElementById("cartao").value;
            cartao = cartao.replace(/\D/g, "");

            let resultado = document.getElementById("resultado");
            if(cartao.length < 13 || cartao.length > 16) {

                resultado.innerHTML = "Número inválido (tamanho incorreto)";
                resultado.className = "vermelho";
                return;
            }

            
            let soma = 0;
            let invertido = cartao.split("").reverse().join("");

            for(let i = 0; i < invertido.length; i++) {

                let digito = Number(invertido[i]);

                if(i % 2 === 1) {
                    digito = digito * 2;
                    if(digito > 9) {
                        digito = digito - 9;
                    }
                }

                soma += digito;
            }

            let valido = (soma % 10 === 0);

          
            let bandeira = "";

            if(cartao.startsWith("4")) bandeira = "Visa";
            else if(cartao.startsWith("5")) bandeira = "Mastercard";
            else if(cartao.startsWith("3")) bandeira = "American Express";
            else bandeira = "Desconhecida";

            let categoria = "Crédito";
            if(cartao.startsWith("4")) categoria = "Débito / Crédito";
            if(cartao.startsWith("5")) categoria = "Crédito";

            // Banco emissor (simulado)
            let banco = "Banco não identificado";
            if(cartao.startsWith("4")) banco = "Banco Internacional";
            if(cartao.startsWith("5")) banco = "Banco Nacional";

            if(valido) {

                resultado.className = "verde";
                resultado.innerHTML =
                    "STATUS: VÁLIDO\n" +
                    "BANDEIRA: " + bandeira + "\n" +
                    "CATEGORIA: " + categoria + "\n" +
                    "BANCO EMISSOR: " + banco;

            } else {

                resultado.className = "vermelho";
                resultado.innerHTML =
                    "STATUS: INVÁLIDO\n" +
                    "BANDEIRA: " + bandeira + "\n" +
                    "CATEGORIA: " + categoria + "\n" +
                    "BANCO EMISSOR: " + banco;
            }

        });