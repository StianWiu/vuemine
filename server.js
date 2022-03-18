console.clear();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());
const port = 3330;
const { Database } = require('simpl.db');
const config = {
  autoSave: 'true',
  collectionsFolder: './instances/collections/',
  dataFile: './instances/data.json',
};
const db = new Database(config);
var cors = require('cors')
app.use(cors())

// Make variable to hold path to current folder
var path = __dirname;

app.post('/api/create/server', async function (req, res) {
  if (req.body.serverName == "") {
    res.send("Server name cannot be empty");
    return;
  } else {
    if (db.fetch("servers." + req.body.serverName.toLowerCase()) === undefined) {
      db.push("servers." + req.body.serverName.toLowerCase(), { serverName: req.body.serverName, id: req.body.serverId, created: req.body.timeCreated })
      fs.mkdirSync(path + '/instances/' + req.body.serverName);
      return res.send('true');
    } else {
      return res.send("Server name already exists");
    }
  }
});

app.get('/api/firstinstall', async function (req, res) {
  if (db.fetch("servers") !== undefined) res.send(false);
  else res.send(true);
});

app.get('/api/get/servers', async function (req, res) {
  console.log("test")
  res.send(db.get("servers"));
});

// Start server
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});