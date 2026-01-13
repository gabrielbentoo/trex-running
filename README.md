# 🦖 T-Rex Runner (p5.js)

Recriação do clássico jogo **T-Rex Runner** (jogo do dinossauro do Google Chrome) desenvolvida em **JavaScript** utilizando as bibliotecas **p5.js** e **p5.play**.

O objetivo do jogo é controlar o dinossauro, desviando dos obstáculos e acumulando a maior pontuação possível.

---

## 🎮 Gameplay

- O T-Rex corre automaticamente
- Pressione **ESPAÇO** ou toque na tela para pular
- O jogo termina ao colidir com um obstáculo
- Após o *Game Over*, é possível reiniciar o jogo

---

## 🛠️ Tecnologias Utilizadas

- JavaScript  
- p5.js  
- p5.play  
- HTML5 Canvas  

---

## 📁 Estrutura de Arquivos

/
├── index.html
├── sketch.js
├── trex1.png
├── trex3.png
├── trex4.png
├── trex_collided.png
├── ground2.png
├── cloud.png
├── obstacle1.png
├── obstacle2.png
├── obstacle3.png
├── obstacle4.png
├── obstacle5.png
├── obstacle6.png
├── gameOver.png
├── restart.png
├── jump.mp3
├── checkPoint.mp3
└── die.mp3



---

## 🚀 Como Executar o Projeto

### Usando servidor local (recomendado)

Abra o projeto com um servidor local para evitar problemas de carregamento de arquivos.

Exemplo com Python:

python -m http.server


Depois, acesse no navegador:

http://localhost:8000


---

## 🎮 Controles

| Ação       | Controle            |
|-----------|---------------------|
| Pular     | Espaço / Toque      |
| Reiniciar | Clique em Restart   |

---

## 🧠 Lógica do Jogo

O jogo possui dois estados principais:

- **PLAY**: jogo em execução
- **END**: jogo finalizado (Game Over)

A pontuação aumenta com o tempo e a velocidade do jogo cresce conforme o jogador avança.  
A cada **1000 pontos**, um som de *checkpoint* é reproduzido.

---

## ☁️ Elementos do Jogo

- T-Rex com animação de corrida e colisão
- Chão com movimento infinito
- Nuvens decorativas
- Obstáculos gerados aleatoriamente
- Sons de pulo, colisão e checkpoint

---

## 📱 Compatibilidade

- Desktop (teclado)
- Dispositivos móveis (toque na tela)
- Canvas responsivo (`windowWidth` e `windowHeight`)

---

## 📌 Possíveis Melhorias

- Sistema de níveis
- Ranking de pontuação
- Modo noturno
- Power-ups
- Melhorias na detecção de colisão

---

## 📄 Licença

Projeto desenvolvido para fins educacionais e recreativos, inspirado no jogo original do Google Chrome.

---

## ✨ Autor

Desenvolvido por **Gabriel**  
Recriação do jogo **T-Rex Runner** usando p5.js
