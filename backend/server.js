const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const adminRouter = require("./routes/adminRouter");
const adoptionRequestRouter = require("./routes/adoptionRequestRouter");
const adoptPetListingRouter = require("./routes/adoptPetListingRouter");
const findingRequestRouter = require("./routes/findingRequestRouter");
const listingFlagRouter = require("./routes/listingFlagRouter");
const listingRouter = require("./routes/listingRouter");
const lostPetListingRouter = require("./routes/lostPetListingRouter");
const userFlagRouter = require("./routes/userFlagRouter");
const userRouter = require("./routes/userRouter");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
  });

const app = express();
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/adoptionRequests", adoptionRequestRouter);
app.use("/adoptPetListings", adoptPetListingRouter);
app.use("/findingRequests", findingRequestRouter);
app.use("/listingFlags", listingFlagRouter);
app.use("/listings", listingRouter);
app.use("/lostPetListings", lostPetListingRouter);
app.use("/userFlags", userFlagRouter);
app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});

app.use("/", (req, res, next) => {
  app.use("/admin", adminRouter);
  app.use("/adoptionRequests", adoptionRequestRouter);
  app.use("/adoptPetListings", adoptPetListingRouter);
  app.use("/findingRequests", findingRequestRouter);
  app.use("/listingFlags", listingFlagRouter);
  app.use("/listings", listingRouter);
  app.use("/lostPetListings", lostPetListingRouter);
  app.use("/userFlags", userFlagRouter);
  app.use("/users", userRouter);
  next();
});
