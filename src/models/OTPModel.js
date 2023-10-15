const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(

  {
    email: { type: String },
    otp: { type: String },
    status: { type: Number, default: 0 }
  }, {versionKey: false, timestamps: true}

);

const OTPModel = mongoose.model("otps", DataSchema);
module.exports = OTPModel;