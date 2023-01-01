const net = require('net');

const client = new net.Socket();
client.connect(65000, '127.0.0.1', () => {
  console.log('Connected');
  client.write('Server & Client by UltimaChaos');
});

client.on('close', () => {
  console.log('Connection STOPED');
});