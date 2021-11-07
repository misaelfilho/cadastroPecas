let peso = 101


if (peso > 100) {
    console.log("A peça possui um peso adequado, pode ser cadastrada!");

    let listaPecas = ["Retrovisor", "Farol", "Pneus", "Volante", "Roda", "Fusível", "Carlota", "Disco de Embreagem", "Bico Injetor", "Radiador"];

    let numeroPecas = listaPecas.length;

    if (numeroPecas < 10) {
        console.log("A lista ainda possui espaço para mais peças.")

        let nomePeca = listaPecas[2];

        if (nomePeca.length > 3) {
            console.log("Nome da peça é válido, pode seguir com o cadastro");
        } else {
            console.log("Nome de peça inválido, o nome deve ter mais de 3 caracteres")
        }

    } else {
        console.log("Não há espaço disponível na lista, a capacidade máxima foi atingida")
    }

} else {
    console.log("A peça não pode ser cadastrada, não possui o peso mínimo")
}