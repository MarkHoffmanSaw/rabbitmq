const amqp = require("amqplib");
// Advanced Message Queue Protocol

connect();

async function connect() {
  try {
    const connection = await amqp.connect("amqp://rabbitmq:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("jobs");

    // Recieve the jobs (queue) from the publisher
    // Return the message from the queue
    channel.consume("jobs", (message) => {
      const input = JSON.parse(message.content.toString());
      console.log(`Recieved job with input ${input}`);
    });

    console.log("Waiting for messages");
  } catch (error) {
    console.log(error);
  }
}
