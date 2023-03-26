const redis = require("redis")
// const util = require("util")

// // class to define methods for commonly used redis commands
// class RedisClient {
//   constructor() {
//     this.client = redis.createClient();
//     this.client.connect()
//       .then(console.log("Connected to Redis"))
//     this.client.on('error', (error) => {
//       console.log(`Redis client not connected to server: ${error}`);
//     });
//   }

// }

// const redisClient = new RedisClient();


let redisClient;

(async () => {
  redisClient = redis.createClient({
    password: 'Ck4Bv8xBaNTMKqZXeF90Gkj4YEFRfjJX',
    socket: {
      host: 'redis-12337.c228.us-central1-1.gce.cloud.redislabs.com',
      port: 12337
    }
  });

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect()
    .then(console.log("Connected to Redis"))
})();

module.exports = redisClient;
