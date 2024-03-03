function openModal(elementModal, elementClose) {
   const windowModal = document.getElementById(elementModal);
   const buttonClose = document.getElementById(elementClose);
   const body = document.getElementsByTagName("body")[0];

   // Verifica si el modal y el botón de cierre existen
   if (!windowModal || !buttonClose) {
      console.error("Modal o botón de cierre no encontrados");
      return;
   }

   // Agrega la clase para el fondo negro al <body>
   body.classList.add("body-modal-open");

   // Muestra el modal y deshabilita el desplazamiento del cuerpo
   windowModal.style.display = "flex";
   body.style.overflow = "hidden";

   // Cierra el modal y restablece el desplazamiento del cuerpo
   function closeModal() {
      windowModal.style.display = "none";
      body.style.overflow = "scroll";

      // Elimina la clase para el fondo negro al <body>
      body.classList.remove("body-modal-open");
   }

   // Agrega un event listener al botón de cierre
   buttonClose.addEventListener("click", closeModal);

   // Cierra el modal haciendo clic fuera de él
   window.addEventListener("click", function (event) {
      if (event.target == windowModal) {
         closeModal();
      }
   });

   // Cierra el modal al presionar la tecla 'Esc'
   document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
         closeModal();
      }
     });

}