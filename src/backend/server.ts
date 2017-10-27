/**
 * Module dependencies.
 */
import * as express from "express";
import * as path from "path";

/**
 * Controllers (route handlers).
 */
import * as homeController from "./controllers/homeController";

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../../views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "../frontend/public"), { maxAge: "1h" }));

/**
 * Primary app routes.
 */
app.get("/", homeController.home);
app.get("/about", homeController.home);
app.get("/contact", homeController.home);

/**
 * Start Express server.
 */
app.listen(app.get("port"), (err: string) => {
  if (err) {
    return console.log(err);
  }

  return console.log(("server is listening on %d in %s mode"), app.get("port"), app.get("env"));
});
