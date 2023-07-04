const inputText = document.querySelectorAll(".input-text");
const completarLacuna = document.querySelectorAll(".campo-obrigatorio")
const btnEnviar = document.getElementById("botao-enviar");

btnEnviar.addEventListener('click', () => {
    inputText.forEach((input, index) => {
        if (input.value === "") {
            if (input.classList.contains("campo-preenchido")) {
                input.classList.remove("campo-preenchido");
            }
            input.classList.add("campo-nao-preenchido");
            completarLacuna[index].classList.add("ativo");
        } else {
            if (input.classList.contains("campo-nao-preenchido")) {
                input.classList.remove("campo-nao-preenchido");
                completarLacuna[index].classList.remove("ativo");
            }
            input.classList.add("campo-preenchido");
        }
    });
})


