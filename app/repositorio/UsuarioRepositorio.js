class UsuarioRepositorio{
    
    constructor(conexao) {
       this._conexao = conexao;
    }

    porId(id, callback ) {
        this._conexao.query(`select * from usuarios where id = ${id}`, callback);
    }


    todos(callback ) {
      this._conexao.query('select * from usuarios', callback);
    }

   
    salva(usuarios, callback) {
        console.log('ID ' + usuarios.id);

        if ( (usuarios.hasOwnProperty('id')) && (usuarios.id > 0) ) {
               this._conexao.query('update usuarios set ? where id = ' + usuarios.id, usuarios, callback);
               console.log('executou update');

        } else {
            this._conexao.query('insert into usuarios set ?', usuarios, callback);
            console.log('executou insert');

        }    
    }

    remove(usuarios, callback) {
        this._conexao.query('delete from usuarios where id = ' + usuarios.id, callback);
    }

} 

module.exports = () => { return UsuarioRepositorio };