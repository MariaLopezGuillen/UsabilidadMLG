function openModal(elementModal, elementClose){
	const windowModal = document.getElementById(elementModal);
	const buttonClose = document.getElementById(elementClose);
	const body = document.getElementsByTagName("body")[0];
   
	// Agrega la clase para el fondo negro al <body>
	body.classList.add('body-modal-open');
   
	windowModal.style.display = "flex";
	body.style.overflow = "hidden";
   
	buttonClose.addEventListener("click", function(){
	   windowModal.style.display = "none";
	   body.style.overflow = "scroll";
	   // Elimina la clase para el fondo negro al <body>
	   body.classList.remove('body-modal-open');
	});
   
	window.addEventListener("click", function(event){
	   if (event.target == windowModal) {
		 windowModal.style.display = "none";
		 body.style.overflow = "scroll";
		 // Elimina la clase para el fondo negro al <body>
		 body.classList.remove('body-modal-open');
	   }
	});
   }
   