// Función para crear el modal
function createModal() {
    // Crear el contenedor del modal
    var modalContainer = document.createElement('div');
    modalContainer.id = 'movieModal';
    modalContainer.className = 'modal';

    // Crear el contenido del modal
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Crear el título del modal
    var modalTitle = document.createElement('h2');
    modalTitle.id = 'modalTitle';
    modalTitle.textContent = 'Título de la Película';

    // Crear la imagen del modal
    var modalImage = document.createElement('img');
    modalImage.id = 'modalImage';
    modalImage.alt = 'Imagen de la película o serie';
    modalImage.src = 'ruta-a-la-imagen-de-la-pelicula.jpg';

    // Crear la lista de actores del modal
    var modalActors = document.createElement('ul');
    modalActors.id = 'modalActors';

    // Crear el resumen del modal
    var modalDescription = document.createElement('p');
    modalDescription.id = 'modalDescription';
    modalDescription.textContent = 'Resumen de la película...';

    // Crear el enlace al tráiler del modal
    var modalTrailer = document.createElement('a');
    modalTrailer.id = 'modalTrailer';
    modalTrailer.href = 'http://example.com/trailer';
    modalTrailer.textContent = 'Ver Tráiler';
    modalTrailer.target = '_blank';

    // Añadir el título, la imagen, la lista de actores, el resumen y el enlace al tráiler al contenido del modal
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalImage);
    modalContent.appendChild(modalActors);
    modalContent.appendChild(modalDescription);
    modalContent.appendChild(modalTrailer);

    // Añadir el contenido del modal al contenedor del modal
    modalContainer.appendChild(modalContent);

    // Añadir el contenedor del modal al cuerpo del documento
    document.body.appendChild(modalContainer);
}

// Función para abrir el modal
function openModal() {
    var modal = document.getElementById('movieModal');
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById('movieModal');
    modal.style.display = 'none';
}

// Event listener para el botón que abre el modal
document.getElementById('openModalBtn').addEventListener('click', openModal);

// Event listener para el botón de cierre dentro del modal
document.getElementById('modalTrailer').addEventListener('click', closeModal);

// Llamar a la función para crear el modal
createModal();
