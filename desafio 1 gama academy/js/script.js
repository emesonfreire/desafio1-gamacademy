const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<img src= "../assets/loader.gif"/ alt="carregando"><p>Carregando...</p>`

  let pronto = `<p>Pronto!</p></br>
  <p>Atualize o navegador para enviar outro formulário ou click <a href="index.html">aqui</a></p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 2000)
  
})