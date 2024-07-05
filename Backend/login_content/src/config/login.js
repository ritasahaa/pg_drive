const mongoose = require("mongoose");
// change url of your monogoDB login == database
mongoose.connect("mongodb://localhost:27017/PG_Drive", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
