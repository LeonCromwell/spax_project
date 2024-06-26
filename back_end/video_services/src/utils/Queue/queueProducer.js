const kue = require("kue");
const queue = kue.createQueue({
  redis: {
    host: process.env.REDIS_SERVER || "localhost",
    port: 6379,
  },
});

function createJobVideo(data) {
  return new Promise((resolve, reject) => {
    const job = queue.create("video", data).save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(job);
      }
    });
    queue.on("job enqueue", function (id, type) {
      console.log("Job %s got queued of type %s", id, type);
    });
  });
}

module.exports = createJobVideo;
