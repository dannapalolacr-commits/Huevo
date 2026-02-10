function romperHuevo() {
    const container = document.querySelector('.egg-container');
    
    // Si ya está abierto, no hacer nada
    if (container.classList.contains('open')) return;

    // Añadir la clase que separa las piezas y muestra la imagen
    container.classList.add('open');
}