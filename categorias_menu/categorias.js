const menuIcon = document.getElementById('menu-icon'); 
const categoriasSidebar = document.getElementById('categorias-sidebar'); 
const closeCategorias = document.getElementById('close-categorias');


menuIcon.addEventListener('click', () => {
    categoriasSidebar.style.right = '0'; 
});


closeCategorias.addEventListener('click', () => {
    categoriasSidebar.style.right = '-100%'; 
});
