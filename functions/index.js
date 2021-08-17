const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('sk_test_51IfE8aFap3r3HQRH3zwErlYeDPVcjZ0uNkh4nBuOBplAtgtQhMxAdQMN8lqfR9PO7eRewAXhfISJygR1L2omOJ3j00mWCD1JtR');

// -API


// -App config
const app = express();


// -Middlewares
app.use(cors({ origin: true }))
app.use(express.json());

//  -API routes
app.get('/', (request, response) => res.status(200).send("hello world"))

// -Listen command
exports.api = functions.https.onRequest(app);