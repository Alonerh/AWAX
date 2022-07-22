function abrirMenu() {
    var funcionar = document.querySelector('.navegation')
    if(funcionar.style.display == 'none') {
        funcionar.style.display = 'block';
    } else {
        funcionar.style.display = 'none';
    }
}