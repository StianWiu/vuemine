console.clear();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());
const port = 3330;
const db = require('quick.db');
var cors = require('cors')
app.use(cors())

// Make variable to hold path to current folder
var path = __dirname;

app.post('/api/create/server', async function (req, res) {
  let servers = db.get("servers")
  // Check if there are any servers with the same name
  if (servers.find(s => s.name === req.body.serverName)) {
    return res.send('Server with same name already exists');
  } else {
    fs.mkdirSync(path + '/instances/' + req.body.serverName);
    db.set("servers." + req.body.serverId, { serverName: req.body.serverName, id: req.body.serverId, created: req.body.timeCreated })
    res.send('Server created');
  }

});

app.get('/api/firstinstall', async function (req, res) {
  if (isEmpty(path + "/instances/")) {
    res.send("true");
  } else {
    res.send("false");
  }
});

app.get('/api/get/servers', async function (req, res) {
  console.log("test")
  res.send(db.get("servers"));
});


function isEmpty(path) {
  return fs.readdirSync(path).length === 0;
}

// Start server
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});