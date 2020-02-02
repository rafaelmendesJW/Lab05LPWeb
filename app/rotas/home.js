module.exports = function(app) {
    app.get('/home', (req, resp) => resp.render('index') );
}