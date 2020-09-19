const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HRWKrEMbuzcTWtFYwPak6jYLMbD3IabJ5fr6lfU5ezJDcyWeJrXIadEfzSggPhGfwQAByUbrQ5MDx8bfEnJIkfq00C7MGTYx7"
);

//API

//APP CONFIG
const app = express();
//MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());
//API ROUTES
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//LISTEN COMMAND
exports.api = functions.https.onRequest(app);

//http://localhost:5001/e-commerce-41fdd/us-central1/api
