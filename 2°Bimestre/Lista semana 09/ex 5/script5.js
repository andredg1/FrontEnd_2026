let convidados = [];

        let botao = document.getElementById("adicionar");

        botao.addEventListener("click", function() {

            let input = document.getElementById("nome");
            let nome = input.value.trim();

            if(nome == "") {
                return;
            }

            convidados.push(nome);
            atualizarLista();
            input.value = "";

        });

        function atualizarLista() {

            let lista = document.getElementById("lista");
            lista.innerHTML = "";

            for(let i = 0; i < convidados.length; i++) {

                let item = document.createElement("li");
                let span = document.createElement("span");
                span.innerText = convidados[i];

                item.appendChild(span);

                let btnConcluir = document.createElement("button");
                 btnConcluir.innerText = "Concluir";
                 btnConcluir.classList.add("btn-concluir");
                 btnConcluir.addEventListener("click", function() {
                    span.classList.toggle("riscado");

                });

                item.appendChild(btnConcluir);

                let btnEditar = document.createElement("button");
                btnEditar.innerText = "Editar";
                btnEditar.classList.add("btn-editar");
                btnEditar.addEventListener("click", function() {

                    let novoNome = prompt("Digite o novo nome:");
                    if(novoNome != null && novoNome.trim() != "") {
                        convidados[i] = novoNome;
                        atualizarLista();
                    }
                });

                item.appendChild(btnEditar);

                let btnExcluir = document.createElement("button");
                btnExcluir.innerText = "Excluir";
                btnExcluir.classList.add("btn-excluir");
                btnExcluir.addEventListener("click", function() {

                    convidados.splice(i, 1);
                    atualizarLista();
                });

                item.appendChild(btnExcluir);
                lista.appendChild(item);
            }
        }