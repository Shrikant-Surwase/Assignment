import { config } from "./config/config";
import connectDb from "./config/db";
import app from "./src/app";

const startServer = async () => {
  await connectDb();
  const port = config.port || 3000;
  app.listen(port, () => {
    console.log(`Server is started on ${port}`);
  });
};
startServer();
