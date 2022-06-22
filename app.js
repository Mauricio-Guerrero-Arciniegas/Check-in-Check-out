const express = require("express");

// Routers
const { registersRouter } = require("./routes/registers.routes");
//const { postsRouter } = require('./routes/posts.routes');

// Init express app
const app = express();

app.use(express.json());

// Define endpoints
app.use("/api/v1/registers", registersRouter);
//app.use('/api/v1/posts', postsRouter);

// Global error handler
app.use("*", (err, req, res, next) => {
  console.log(err);
});

module.exports = { app };