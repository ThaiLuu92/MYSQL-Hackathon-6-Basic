import express from "express";
import TodoController from "../controller/todo.controller.js";
const todoController = new TodoController();

const todoRouter = express.Router();

// Lấy tất cả các danh mục
todoRouter.get("/", todoController.getAllTodo);

// Lấy danh mục theo id
todoRouter.get("/:id", todoController.getTodoById);

// Tạo danh mục
todoRouter.post("/", todoController.createTodo);

// Sửa danh mục
todoRouter.put("/:id", todoController.editTodo);

// Xóa danh mục
todoRouter.delete("/:id", todoController.deleteTodo);


export default todoRouter;