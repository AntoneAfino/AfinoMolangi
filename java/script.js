// Menu Responsive (optionnel si tu ajoutes un bouton)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
// Attendre que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche l'envoi réel du formulaire
  
      // Afficher une alerte de confirmation
      alert('Merci pour votre message ! Nous vous répondrons très bientôt.');
  
      // Réinitialiser les champs du formulaire
      form.reset();
    });
  });
// Sélection des éléments
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Clique sur l'icône du menu
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
  