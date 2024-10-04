import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MeuFormulario {
    public static void main(String[] args) {
        // Criando o frame (janela)
        JFrame frame = new JFrame("Meu Formulário");
        
        // Criando o campo de texto
        JTextField campoTexto = new JTextField(20);
        campoTexto.setText("");
        
        // Criando o botão
        JButton botao = new JButton("Enviar");
        
        // Adicionando ação ao botão
        botao.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String texto = campoTexto.getText();
                System.out.println("Texto enviado: " + texto);
            }
        });
        
        // Configurando o layout do frame e adicionando os componentes
        frame.setLayout(new FlowLayout());
        frame.add(campoTexto);
        frame.add(botao);
        
        // Configurando o tamanho e o comportamento do frame
        frame.setSize(300, 100);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}