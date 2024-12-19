var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const menuDiv = document.getElementById('menu-mobile');
    const btnAnimar = document.getElementById('btn-menu');
    const menuLinks = menuDiv.querySelectorAll('a'); 

  
    btnAnimar.addEventListener('click', animarMenu);

    function animarMenu() {
        menuDiv.classList.toggle('abrir');
        btnAnimar.classList.toggle('ativo'); 
    }

   
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuDiv.classList.remove('abrir'); 
            btnAnimar.classList.remove('ativo'); 
        });
    });
});