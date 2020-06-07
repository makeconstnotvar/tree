const express = require('express'),
  helmet = require('helmet'),
  compression = require('compression'),
  app = express(),
  http = require('http'),
  path = require('path'),
  server = http.createServer(app),
  favicon = require('serve-favicon');

app.use(helmet());
app.use(compression());
app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/styles', express.static(path.join(__dirname, 'app/styles')));


app.get('*', (req, res) => {
    res.sendFile('index.html', {root:path.join(__dirname, 'app')})
});

app.use(function (req, res, next) {
  console.error(`404 ${req.url}`);
  res.sendStatus(404)
});

app.use(function (err, req, res, next) {
  err.userMessage = err.userMessage || 'На сервере произошла ошибка';
  if (res.status() < 500)
    res.status(500);
  res.send(err.userMessage);
});

server.listen(3000, function () {
  console.log(`Приложение запущено http://localhost:3000`);
});