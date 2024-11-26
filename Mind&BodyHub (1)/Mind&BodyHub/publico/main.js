const toggleButton = document.getElementById("modoscuro");
toggleButton.addEventListener("click", () => {
 
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.body.removeAttribute("data-theme");
  } else {
    document.body.setAttribute("data-theme", "dark");
  }
});
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_bu2zwxt';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      window.location.href = 'success.html';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

window.addEventListener('load',()=> {
  const contenedor_loader=document.querySelector('.loader')
   contenedor_loader.computedStyleMap.opacity=0
   contenedor_loader.computedStyleMap.visibility='hidden'
})
