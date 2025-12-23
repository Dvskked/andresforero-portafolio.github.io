function mostrar(id) {
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.remove('activa');
  });

  document.getElementById(id).classList.add('activa');
}
