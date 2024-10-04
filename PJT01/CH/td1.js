// Criando um contêiner para simular o JFrame
let frame = document.createElement('div');
frame.style.display = 'flex'; // Usar flexbox para layout em linha
frame.style.flexWrap = 'wrap'; // Permite que os elementos se movam para a linha seguinte
frame.style.padding = '10px'; // Adiciona um espaçamento interno
frame.style.width = '300px';  // Define a largura como 300 pixels
frame.style.height = '100px';  // Define a altura como 100 pixels
frame.style.border = '1px solid black'; // Adiciona uma borda para simular um JFrame
frame.style.position = 'relative'; // Permite a posicionamento dos elementos

// Adicionando o contêiner ao body
document.body.appendChild(frame);

// Criando um campo de texto
let campoTexto = document.createElement('input');
campoTexto.type = 'text';
campoTexto.size = 20;
campoTexto.style.marginRight = '5px'; // Espaço entre o campo de texto e o botão

// Adicionando o campo de texto ao contêiner
frame.appendChild(campoTexto);

// Criando um botão
let botao = document.createElement('button');
botao.textContent = "Enviar";

// Adicionando o botão ao contêiner
frame.appendChild(botao);

// Função para obter o texto do campo de texto e exibir no console
botao.addEventListener('click', function() {
    let texto = campoTexto.value;
    console.log("Texto enviado: " + texto);
});

// Tornando o contêiner visível (não é necessário se ele já foi adicionado)
frame.style.display = 'flex'; // Certificando-se de que o contêiner está visível
