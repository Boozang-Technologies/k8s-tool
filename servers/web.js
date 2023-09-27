'use strict'
const fs = require("fs");
const k8s= require("./k8s")
const _config = global._config

const _express = require('express')
const app = _express();
const http = require('http').Server(app);
console.log(_config)
http.listen(_config["http-port"], () => {
  console.log(`Socket.IO server running at http://localhost:${_config["http-port"]}/`);
});


app.use(_express.static(__dirname + '/../public'));
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET");
  if(req.url=="/init"){
    return res.send(`globalThis.env={platform:"${process.platform}"}`)
  }
  next();
});

exports.http=http;

const io = require('socket.io')(http);

io.on('connection', o=>{
  o.io=io
  socketFun(o,"http: ")
});
console.log("connect http")


io.on('disconnect', o=>{
  _registerList.splice(_registerList.indexOf(o),1)
  console.log("disconnect")
})

function socketFun(socket){
  socket.on('work', msg => {
    // console.log(msg)
    let _fun=function(v){
      _sendMsg({
        k:msg.k,
        data:v
      })
    }

    k8s.k8s[msg.method](msg.data||_fun,_fun)
  });

  socket.on('disconnect', function() {
    console.log("disconnect")
  });

  function _sendMsg(m){
    socket.io.emit("work",m)
  }
}