const amqp = require("amqplib");
// Advanced Message Queue Protocol

const msg = { number: process.argv[2] };

connect();

async function connect() {
  try {
    const connection = await amqp.connect("amqp://rabbitmq:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("jobs");

    // Create the queue "jobs" and save the message inside
    channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
    console.log(`Job was sent successfully ${msg.number}`);
  } catch (error) {
    console.log(error);
  }
}
