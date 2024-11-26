document.addEventListener('DOMContentLoaded', () => {
  const iconeSacola = document.getElementById('iconSacola'); // Ícone da sacola
  const sacolaContainer = document.getElementById('sacolaContainer'); // Sacola
  const fecharSacola = document.getElementById('fecharSacola'); // Botão fechar

  // Verifica se os elementos foram encontrados
  if (!iconeSacola || !sacolaContainer || !fecharSacola) {
      console.error('Um ou mais elementos não foram encontrados!');
      return;
  }

  // Mostrar a sacola ao clicar no ícone
  iconeSacola.addEventListener('click', () => {
      sacolaContainer.classList.add('open');
      console.log('Sacola aberta!');
  });

  // Fechar a sacola ao clicar no botão de fechar
  fecharSacola.addEventListener('click', () => {
      sacolaContainer.classList.remove('open');
      console.log('Sacola fechada!');
  });
});

  