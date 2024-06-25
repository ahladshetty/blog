import express from "express";
import sequelize from "./DB/db.js";
import "dotenv/config";

import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(adminRouter);
app.use(blogRouter);

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }

  app.listen(port, () => {
    connectToDatabase();
  });
})();
