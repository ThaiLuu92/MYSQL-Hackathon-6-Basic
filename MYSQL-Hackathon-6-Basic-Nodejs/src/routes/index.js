import todoRouter from "./todo.route.js";



export default function route(app) {
    app.use("/api/v1/todo" , todoRouter);
  
}