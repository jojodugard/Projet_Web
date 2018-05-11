var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bd_projetweb"
});

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use('/bower_components',
express.static(__dirname + '/bower_components'));

app.post('/participants', function (req, res) {
	var sql = 'INSERT INTO Participants(nomP, prenomP, mailP, telP, typeP, mdpP) VALUES (\'' + req.body.nomP + '\', \'' + req.body.prenomP + '\', \'' + req.body.mailP 
    + '\', \'' + req.body.telP + '\', \'' + req.body.typeP + '\', \'' + req.body.mdpP + '\');'
    con.query(sql, function (err, result) {
            if (err) throw err;
			res.send('Participant créé avec succès !');
        }
    );
});

app.post('/evenements', function (req, res) {
    con.query('INSERT INTO Evenements(acroE, nomE, lieuE, descE, dateOE, dateCE, nbMaxPartE, etuOk, dipOk, proOk, adminOk, ensOk, accOk) VALUES (\'' 
    + req.body.acroE + '\', \'' + req.body.nomE + '\', \'' + req.body.lieuE 
    + '\', \'' + req.body.descE + '\', \'' + req.body.dateOE + '\', \'' + req.body.dateCE + '\', \'' + req.body.nbMaxPartE + '\', \'' + req.body.etuOk
    + '\', \'' + req.body.dipOk + '\', \'' + req.body.proOk + '\', \'' + req.body.adminOk + '\', \'' + req.body.ensOk + '\', \'' + req.body.accOk  + '\');', 
        function (err, result) {
            if (err) throw err;
            res.send('Evènement créé avec succès !');
        }
    );
});

app.post('/participations', function (req, res) {
    con.query('INSERT INTO Evenements(acroE, nomE, lieuE, descE, dateOE, dateCE, nbMaxPartE, etuOk, dipOk, proOk, adminOk, ensOk, accOk) VALUES (\'' 
    + req.body.acroE + '\', \'' + req.body.nomE + '\', \'' + req.body.lieuE 
    + '\', \'' + req.body.descE + '\', \'' + req.body.dateOE + '\', \'' + req.body.dateCE + '\', \'' + req.body.nbMaxPartE + '\', \'' + req.body.etuOk
    + '\', \'' + req.body.dipOk + '\', \'' + req.body.proOk + '\', \'' + req.body.adminOk + '\', \'' + req.body.ensOk + '\', \'' + req.body.accOk  + '\');', 
        function (err, result) {
            if (err) throw err;
            res.send('Evènement créé avec succès !');
        }
    );
});

app.listen(3000, function () {
        console.log('Example app listening on port 3000!') ;
});