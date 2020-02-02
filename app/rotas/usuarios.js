module.exports = function (app) {

    app.get('/usuarios', function (req, resp) {
        resp.render('inscrever-se');
    });

app.post('/usuarios', function (req, resp) {

    let usuario = req.body;
    console.log(usuario);

   /* req.assert('email', 'Email  é obrigatório.').notEmpty();
    req.assert('endereco', 'Endereco é obrigatório.').notEmpty();
    req.assert('senha', 'Senha é obrigatorio').notEmpty();
    //req.assert('dataCadastro', 'Data inválida').isDate();

    let erros = req.validationErrors();

    if (erros) {
        resp.render('produtos/form-cadastro', { errosValidacao: erros, produto: produto });
        return;
    } */


    let conexao = new app.infra.ConnectionFactory().getConexao();
    let usuarios = new app.repositorio.UsuarioRepositorio(conexao);

    console.log(conexao);

    usuarios.salva(usuario, function (erros, resultados) {
       //resp.render('produtos/listagem' );   
       resp.redirect('/usuarios');
    });

    conexao.end();

});
}