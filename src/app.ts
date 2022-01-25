import express, { Application } from 'express';
import morgan from 'morgan';

// Routes
import indexRoutes from './routes/index.routes';
import courseRoutes from "./routes/courseRoutes";
import instructorRoutes from "./routes/instructorRoutes";
import classeRoutes from "./routes/classeRoutes";
import studentRoutes from "./routes/studentRoutes";
import matriculateRoutes from "./routes/matriculateRoutes";
import userRoutes from "./routes/userRoutes";
import { loginUser } from './useCases/createUser/loginController';
import { config } from 'dotenv';
export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }
  env = config();
  settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(morgan("dev"));
    // this.app.use(express.urlencoded({extended:false}));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use("/courses", courseRoutes);
    this.app.use("/instructors", instructorRoutes);
    this.app.use("/classes", classeRoutes);
    this.app.use("/matriculates", matriculateRoutes);
    this.app.use("/students", studentRoutes);
    this.app.use("/users", userRoutes);
    this.app.use("/login", loginUser);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log(`server started at http://localhost:${this.app.get("port")}`);
  }
}