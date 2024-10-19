function soma (){
    var num1 = parseFloat(document.getElementById("ct1").value);
    var num2 = parseFloat(document.getElementById("ct2").value);
    var ce = document.getElementById('ce').value;
 
    if (isNaN(num1) || isNaN(num2)) {
       document.getElementById("resultado").innerText = "Por favor, insira números válidos.";
    }

    switch (ce) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            // Verifica se o divisor é zero antes de dividir
            if (num2 === 0) {
                document.getElementById('resultado').innerText = "Divisão por zero não permitida.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida.";
    }

    // Exibe o resultado
    document.getElementById('resultado').innerText = "Resultado: " + resultado;
 }/*fim da função */
 
 document.addEventListener('keydown',function(evento){
    if (evento.key==='Enter'){
       soma();
    }
    
 });