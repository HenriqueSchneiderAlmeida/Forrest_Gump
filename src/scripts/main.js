document.addEventListener('DOMContentLoaded', function() {

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    // comportamento do Header
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosHeader();
        } else {
            exibeElementosHeader();
        }

    })
})