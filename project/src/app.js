const express = require('express')
var cors = require('cors')
var path = require('path')
const app = express()
sqlite3 = require('sqlite3').verbose();
var glob = require("glob")


const port = 3000
var whitelist = [
    'http://localhost:3000','http://192.168.1.143:8080/'
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
process.on('SIGHUP', function() {
  console.log('Got SIGHUP signal');
  process.exit(0);
});
app.use(cors(corsOptions));
app.get('/', (req, res) =>{ 
	res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Credentials', 'false')
      let db = new sqlite3.Database('test.db');
        let sql = `SELECT * FROM faculty WHERE username = '${req.query.username}' AND password = '${req.query.password}'`;
        //console.log(req.query.username,req.query.password)
        db.all(sql, [], (err, rows) => {
          if (err) {
            throw err;
          }
          rows.forEach((row) => {
            console.log(row);
          });
          res.send(rows);
        });
         
        // close the database connection
        db.close();
	
});

app.get('/init', (req, res) =>{ 
	res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Credentials', 'false')
      let db = new sqlite3.Database('test.db');
        let sql = `SELECT * FROM faculty INNER JOIN messages ON messages.messageid = faculty.id`;
        db.all(sql, [], (err, rows) => {
          if (err) {
            throw err;
          }
          // rows.forEach((row) => {
          //   console.log(row);
          // });
          res.send(rows);
        });
         
        // close the database connection
        db.close();
	
});

app.get('/push', (req, res) =>{ 
	res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Credentials', 'false')
      let db = new sqlite3.Database('test.db');
        let sql = `INSERT INTO messages (message,messageid,dateposted,dateexpired) VALUES(?,?,?,?)`;
        //console.log(req.query.message);
        db.run(sql,[req.query.message,req.query.id,req.query.dateposted,req.query.dateexpired], (err) => {
          if (err) {
            throw err;
          }
          res.send("ok");
        });
         
        // close the database connection
        db.close();
	
});
app.get('/pushA', (req, res) =>{ 
	res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Credentials', 'false')
      let db = new sqlite3.Database('test.db');
        let sql = `INSERT INTO messages (message,mtype,messageid) VALUES(?,?,?)`;
        //console.log(req.query.message);
        db.run(sql,[req.query.message,req.query.mtype,req.query.id], (err) => {
          if (err) {
            throw err;
          }
          res.send("ok");
        });
         
        // close the database connection
        db.close();
	
});
app.get('/delete', (req, res) =>{ 
	res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Credentials', 'false')
      let db = new sqlite3.Database('test.db');
        let sql = `DELETE FROM messages WHERE dateexpired = ?`;
        //console.log(req.query.message);
        db.run(sql,[req.query.dateexpired], (err) => {
          if (err) {
            throw err;
          }
          res.send("ok");
        });
         
        // close the database connection
        db.close();
	
});
app.get('/deleteMSG', (req, res) =>{ 
	res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Credentials', 'false')
      let db = new sqlite3.Database('test.db');
      let ids = req.query.messageindex;
      let success = false;
      [...ids].forEach((id)=>{
        let sql = `DELETE FROM messages WHERE messageindex = ?`;
        //console.log(req.query.message);
        db.run(sql,[id], (err) => {
          if (err) {
            throw err;
          }
          success = true;
          //res.send("ok");
        });
      });

        //close the database connection
        if(success){
          res.send("deleted");
        }
        
        db.close();
	
});
app.get('/getmessage', (req, res) =>{ 
	res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Credentials', 'false')
      let db = new sqlite3.Database('test.db');
        let sql = `SELECT * FROM messages WHERE messageid = ?`;
        db.all(sql, [req.query.id], (err, rows) => {
          if (err) {
            throw err;
          }
          // rows.forEach((row) => {
          //   console.log(row);
          // });
          res.send(rows);
        });
         
        // close the database connection
        db.close();
	
});

app.get('/images', (req, res) =>{ 
	res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Credentials', 'false')
  // options is optional
  glob("*.{jpg,png}", function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    console.log(files)
    res.send(files);
  })
	
});

app.get('/videos', (req, res) =>{ 
	res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Credentials', 'false')
  // options is optional
  glob("*.{mp4,mov}", function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    console.log(files)
    res.send(files);
  })
	
});

  // // options is optional
  // glob("*.{jpg,png}", function (er, files) {
  //   // files is an array of filenames.
  //   // If the `nonull` option is set, and nothing
  //   // was found, then files is ["**/*.js"]
  //   // er is an error object or null.
  //   console.log(files)
  // })

  // glob("*.{mp4,mov}", function (er, files) {
  //   // files is an array of filenames.
  //   // If the `nonull` option is set, and nothing
  //   // was found, then files is ["**/*.js"]
  //   // er is an error object or null.
  //   console.log(files)
  // })
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

