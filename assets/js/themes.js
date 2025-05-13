<script>
  // Funkcja sprawdzająca, czy element jest widoczny na ekranie
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  // Funkcja do dodania klasy 'visible' do elementu, który jest widoczny
  function handleScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add('visible');
      }
    });
  }

  // Dodajemy nasłuchiwanie na przewijanie strony
  window.addEventListener('scroll', handleScroll);

  // Uruchamiamy od razu, aby sprawdzić elementy, które są już widoczne na początku
  handleScroll();
</script>
