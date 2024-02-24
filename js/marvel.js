// function openModal(){
//   let modal= document.querySelector('#modal-window');
//   modal.classList.add("showModal");
// }

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


