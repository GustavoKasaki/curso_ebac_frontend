$('document').ready(function() {
    fetch('https://api.github.com/users/gustavokasaki', {
        method: 'GET'
    })
    .then(function(resposta) {
        if (!resposta.ok) {
            throw new Error(`Erro ${resposta.status}`);
        }
        else {
            return resposta.json();
        }
    })
    .then(function(json) {
        $('#avatar').attr('src', `${json.avatar_url}`);
        $('#nome').html(`${json.name}`);
        $('#username').html(`@${json.login}`);
        $('#repos').html(`${json.public_repos}`);
        $('#seguidores').html(`${json.followers}`);
        $('#seguindo').html(`${json.following}`);
        $('#link').attr('href', `${json.html_url}`);
    })
    .catch(function() {
        console.error('Erro ao encontrar as informações solicitadas');
    })
})