function mostrarDescricao(id) {
    const descricao = document.getElementById(`descricao-${id}`);
    const todasDescricoes = document.querySelectorAll('.descricao');

    todasDescricoes.forEach(desc => {
        if (desc !== descricao) {
            desc.classList.remove('active');
        }
    });

    descricao.classList.toggle('active');
}
