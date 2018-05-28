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

app.post('/isparticipants', function (req, res) {
	if (req.body.mail === 'admin' && req.body.mdp === 'admin') {
		res.send('admin');
	}
	else {
		var sql = 'SELECT COUNT(*) as \'result\'FROM Participants WHERE mailP=\'' + req.body.mail + '\' AND mdpP=\'' + req.body.mdp +'\';'
    	con.query(sql, function (err, result) {
    	        if (err) throw err;
				if (result[0].result === 1) {
					res.send('normal');
				}
				else {
					res.send('non');
				}
    	});
    }
});

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
    con.query('INSERT INTO Evenements(acroE, nomE, lieuE, descE, dateEvt, dateOE, dateCE, nbMaxPartE, etuOk, dipOk, proOk, adminOk, ensOk, accOk, nbAccEtu, nbAccDip, nbAccPro, nbAccAdmin, nbAccEns) VALUES (\'' 
    + req.body.acro + '\', \'' + req.body.nameEvt + '\', \'' + req.body.lieuEvt 
    + '\', \'' + req.body.DescEvt + '\', \'' + req.body.DateEvt + '\', \'' + req.body.DateOuv + '\', \'' + req.body.DateClo + '\', \'' + req.body.nbMax + '\', \'' + req.body.isEtu
    + '\', \'' + req.body.isDip + '\', \'' + req.body.isPro + '\', \'' + req.body.isAdmin + '\', \'' + req.body.isEns + '\', \'' + req.body.isAcc  + '\', \'' + req.body.nbEtu + '\', \'' + req.body.nbDip + '\', \'' + req.body.nbPro + '\', \'' + req.body.nbAdmin + '\', \'' + req.body.nbEns + '\');', 
        function (err, result) {
            if (err) throw err;
            res.send('Succes');
        }
    );
});

app.post('/getevenements', function (req, res) {
    con.query('SELECT E.idE, acroE, nbMaxPartE, coalesce(COUNT(DISTINCT idP),0) as nbPart FROM Evenements E LEFT OUTER JOIN Participer P ON p.idE = E.idE GROUP BY E.idE, acroE, nomE, lieuE, descE, dateOE, dateCE, nbMaxPartE, etuOk, dipOk, proOk, adminOk, ensOk, accOk, nbAccEtu, nbAccDip, nbAccPro, nbAccAdmin, nbAccEns', function (err, result) {
            if (err) throw err;
            res.send(result);
        }
    );
});

app.post('/deleteevenement', function (req, res) {
    con.query('DELETE FROM Evenements WHERE idE = ' + req.body.idE + ';', function (err, result) {
            if (err) throw err;
            res.send('OK');
        }
    );
});

app.post('/getevenement', function (req, res) {
    con.query('SELECT E.idE, acroE, nomE, lieuE, descE, dateEvt, dateOE, dateCE, nbMaxPartE, etuOk, dipOk, proOk, adminOk, ensOk, accOk, nbAccEtu, nbAccDip, nbAccPro, nbAccAdmin, nbAccEns FROM Evenements E WHERE E.idE = ' + req.body.id + ' ;', function (err, result) {
            if (err) throw err;
            res.send(result);
        }
    );
});

app.post('/getparticipantsevenement', function (req, res) {
    con.query('SELECT Pa.idP, Pa.nomP, Pa.prenomP, Pa.typeP, (SELECT COUNT(*) FROM Participants WHERE refP = Pa.idP) as nbaccompP FROM Participer P, Participants Pa  WHERE P.idE = ' + req.body.id + ' AND P.IDP=Pa.IDP ;', function (err, result) {
			if (err) throw err;
            res.send(result);
        }
    );
});

app.post('/getnbevenements', function (req, res) {
    con.query('SELECT COUNT(*) as nbEvents FROM Evenements', function (err, result) {
            if (err) throw err;
            res.send(result);
        }
    );
});

app.post('/getnbevenements', function (req, res) {
    con.query('SELECT COUNT(*) as nbEvents FROM Evenements', function (err, result) {
            if (err) throw err;
            res.send(result);
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