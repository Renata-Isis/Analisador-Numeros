let num = document.getElementById("num"); // selecionando os elementos HTML
    let sel = document.getElementById("addNum");
    let res = document.getElementById("resultado");
    let array = []; // criando o array

    function isNumber(n) { // função que verifica se o dado inserido é um número e se está dentro das limitações estabelecidas
        if (Number(n) >= 1 && Number(n) <= 100){
            return true
        } else {
            return false
        }
    }

    function isList(n, l) { // função que verifica se o número digitado esta se repetindo, no caso do indexOf se o retorno é -1 siginifica que o número não foi encontrado no array, logo não se repete
        if(l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }
 
    function adicionar(){ // função para adicionar os dados digitados

        if(isNumber(num.value) && !isList(num.value, array)){ // condição para add um número, ele deve ser número e não deve estar na lista. Aqui passamos o valor de num e o array na função isList
            array.push(Number(num.value)); // forma utilizada para se add os dados no array
            let item = document.createElement('option'); // criação dinamica de option
            item.text = `O valor adicionado é ${num.value}`
            sel.appendChild(item) // colocando o valor add dentro do selector
            res.innerHTML = "" // limpando o resultado para caso aja add de números  

        } else {
            window.alert("Valor inválido ou já encontrado na lista.")
        }
        num.value = ""// limpando a aba de add de numéro 
        num.focus();// voltando o cursor para a aba de add número
    }

    function finalizar() { // função referente ao botão finalizar
        if(array.length == 0) { // condição caso não seja preenchido nenhum dado
            window.alert("Para finalizar preencha as informações.")
        } else {
            let tot = array.length // variavel criada para receber o tamanho do array, indepedente da qauntidade de números digitados pelo usuário
            let maior = array[0] // para encontrar o maior ou menor número, o parametro sempre será a posição 0 já que antes do número digitado nessa posição não há nenhum outro.
            let menor = array[0]
            let soma = 0
            let media = 0;
            for(let i in array) {
                soma +=array[i] 
                if(array[i] > maior)
                maior = array[i]
                if (array[i < menor])
                menor = array[i]
            }
            media = soma/tot 
            res.innerHTML = ""
            res.innerHTML += `<p>Temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor cadastrado é ${maior}</p>`
            res.innerHTML += `<p>O menor valor cadastrado é ${menor}</p>`
            res.innerHTML += `<p>A soma total dos valores é ${soma}</p>`
            res.innerHTML += `<p>A média final é: ${media}</p>`
        }
            
    }