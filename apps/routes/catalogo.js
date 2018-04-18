module.exports = function (app) {

    app.get('/catalogo', function (req, res) {

        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'roldanadb.cjtssvhqxqfc.us-east-1.rds.amazonaws.com',
            user: 'root',
            password: 'Pa$$4eit',
            database: 'roldanaDB'
        })

        connection.query('SELECT * FROM roldanas', function (error, results, fields) {
            if (error) throw error;
            // console.log('Conexão OK', results);
            res.render('roldanas/catalogo', {resultsHTML:results});
        });
        connection.end();
    });

}