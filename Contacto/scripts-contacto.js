
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    let email = document.getElementById('email').value;
    let regex = /.+@.+/
    if (!regex.test(email)) {
      alert('El email no es válido');
      return;
    }
    let edad = document.getElementById('edad').value;
    let regex2 = /^\d+$/
    if (!regex2.test(edad)) {
      alert('La edad no es válida');
      return;
    }
  }