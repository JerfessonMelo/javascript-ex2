function pegarValor(){
    let altura = parseInt(document.getElementById("altura").value);
    let sexoSelecionado = document.querySelector("input[name='sexo']:checked");
    let pesoIdeal;

    if (sexoSelecionado.value == "Feminino") {
        pesoIdeal = 52 + (0.67 * (altura - 152.4));
        } else if (sexoSelecionado.value == "Masculino") {
            pesoIdeal = 52 + (0.75 * (altura - 152.4));
    }
    document.getElementById("pesoIdeal").textContent = "Peso Ideal: " + pesoIdeal.toFixed(2);
}