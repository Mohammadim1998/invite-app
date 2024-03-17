const mongoose = require("mongoose");

const handler = (req, res) => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/next-db")
        .then(() => console.log("Connected To DB Successfully :"))
        .catch((err) => console.log("Error in DB Connection =>", err));

    return res.json({ message: "Welcome to next.js apu routes features" })
}

export default handler;