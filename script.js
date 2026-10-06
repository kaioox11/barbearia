
const sideMenu = document.getElementById('sideMenu');
const closeMenuBtn = document.getElementById('closeMenu');

const menuTopoButtons = document.querySelectorAll('.menu-topo-btn');
const grupoSubmenus = document.querySelectorAll('.grupo-submenu');
const fecharLinks = document.querySelectorAll('.fechar-link');

menuTopoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');

        grupoSubmenus.forEach(grupo => grupo.classList.remove('show'));

        document.getElementById(targetId).classList.add('show');

        sideMenu.classList.add('active');
    });
});

closeMenuBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});

fecharLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });
});

  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString('pt-BR');
  document.getElementById('data-atual').textContent = dataFormatada;