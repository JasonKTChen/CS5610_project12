import express from "express";
import bodyParser from "body-parser";
import cardrouter from "./routes/card-routes.js";
import session from "express-session";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  session({
    secret: "jason",
    cookie: {
      path: "/",
      _expires: null,
      originalMaxAge: null,
      httpOnly: true,
    },
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cardrouter);

app.use(express.static("frontend"));

app.listen(PORT, () => {
  console.log(`listening for connetions on port ${PORT}`);
});
