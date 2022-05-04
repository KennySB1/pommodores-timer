require("dotenv").config(); // Secures variables
const app = require("./utils/app"); // Backend App (server)
const mongo = require("./utils/mongo"); // MongoDB (database)
const express = require("express");
const { PORT } = require("./constants");
const authRoutes = require("./routes/auth");

async function bootstrap() {
  await mongo.connect();

  const path = require("path");

  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.get("/", function (request, response) {
    response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });

  // app.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}))
  app.get("/healthz", (req, res) => res.status(200).send());
  app.use("/auth", authRoutes);

  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`);
  });
}

bootstrap();
