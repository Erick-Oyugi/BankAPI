// eslint-disable-next-line @typescript-eslint/no-var-requires
const net = require('net');
const serverName = '192.168.19.48';
const port = 25016;
const request =
  '0200A23A00000CC080000000000004000022310000103023060623060623060610301030CTWL9VY3746 000000KONNECT 109839260000000404130021006000252007KONNECT000012254722136041';

console.log(`Connecting to ${serverName} on port ${port}`);
console.log('ISOMessage Request:',request)
const client = new net.Socket();

client.connect(port, serverName, () => {
  console.log(`Just connected to ${client.remoteAddress}:${client.remotePort}`);

  

  client.write(request);
});


client.on('data', (data) => {
  console.log({ data });

  const responseData = data;
  const response = responseData.toString();
  console.log(`Server says: ${response}`);

  client.destroy();
});

