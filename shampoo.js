let isFront = true;

function toggleImage() {
    const image = document.getElementById('shampooImg');

    // Verifica se está na frente ou no verso e troca a imagem
    if (isFront) {
        image.src = 'back.jpg';  // Certifique-se de que a imagem "back.jpg" esteja no diretório correto
        image.alt = 'Shampoo Back';
    } else {
        image.src = 'front.jpg';  // Certifique-se de que a imagem "front.jpg" esteja no diretório correto
        image.alt = 'Shampoo Front';
    }
    isFront = !isFront;  // Alterna entre frente e verso
}
