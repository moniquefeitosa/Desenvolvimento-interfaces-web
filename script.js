function carregarRepositorio() {
    let xhr2 = new XMLHttpRequest();
    xhr2.onload = function() {
        //alert('Seja bem vindo à Home-Page da(o)'+ this.responseText);
        let dataRepos = JSON.parse(this.responseText);
        let repositorio = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${dataRepos.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Atualizado: ${dataRepos.updated_at}</h6>
          <a href="https://github.com/moniquefeitosa/Arquitetura-de-Computadores"target="_blank" class="card-link">Repositório</a>
        </div>
      </div>
    `;
        document.getElementById('repositorios').innerHTML = repositorio;
    }

    xhr2.open('GET', 'https://api.github.com/repos/moniquefeitosa/Arquitetura-de-Computadores');
    xhr2.send();
}

function carregarInfoPessoais() {
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        //alert('Seja bem vindo à Home-Page da(o)'+ this.responseText);
        let data = JSON.parse(this.responseText);
        let perfil = ` 
        <div class="card" style="width: 18rem;">
        <img src="${data.avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.login}</h5>
          <p class="card-text">${data.bio}</p>
          <a href="https://github.com/moniquefeitosa" target="_blank" class="btn btn-primary">Ir para perfil no GitHub</a>
        </div>
      </div>
                  
    `;
        document.getElementById('informacaoPessoal').innerHTML = perfil;
    }

    xhr.onerror = function() {
        alert('Ocorreu um erro na requisição');
    }

    xhr.open('GET', 'https://api.github.com/users/moniquefeitosa');
    xhr.send();
}