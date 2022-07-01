const mongoose = require("mongoose");
const {
  COUNTRY_ENUM,
  LANGUAGE_ENUM,
  PAYMENT_METHOD,
} = require("../utils/constants");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      username: String,
      name: String,
      lastName: String,
      birthDate: Date,
      country: { type: String, enum: COUNTRY_ENUM },
      language: { type: String, enum: LANGUAGE_ENUM },
      paymentMethods: [{ type: String, enum: PAYMENT_METHOD }],
    },
  },
  {
    timestamps: true,
    strict: "throw",
  }
);

module.exports = mongoose.model("User", UserSchema);
