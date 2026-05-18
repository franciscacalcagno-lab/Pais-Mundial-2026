document.addEventListener("DOMContentLoaded", () => {

  const puntos = document.querySelectorAll('.punto');
  const img = document.getElementById('imagenTimeline');

  puntos.forEach(punto => {
    punto.addEventListener('click', () => {
      
      const evento = punto.closest('.evento');

      // 🔹 SI TIENE IMAGEN
      const urlImg = evento.getAttribute('data-img');

      // 🔹 SI TIENE LINK
      const urlLink = evento.getAttribute('data-link');

      if (urlLink) {
        window.open(urlLink, "_blank"); // abre nueva pestaña
        return;
      }

      if (urlImg) {
        img.src = urlImg;
        img.style.display = 'block';
      }

    });
  });

});
document.addEventListener("DOMContentLoaded", () => {

  const puntos = document.querySelectorAll('.punto');
  const img = document.getElementById('imagenTimeline');

  puntos.forEach(punto => {
    punto.addEventListener('click', () => {

      const evento = punto.closest('.evento');

      const urlImg = evento.getAttribute('data-img');
      const urlLink = evento.getAttribute('data-link');

      if (urlLink) {
        window.open(urlLink, "_blank");
        return;
      }

      if (urlImg) {
        img.src = urlImg;
        img.style.display = 'block';
      }

    });
  });

});