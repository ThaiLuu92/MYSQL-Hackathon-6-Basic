import {
    getData,
    getDataById,
    insertData,
    deleteData,
    editData
  } from "../utils/util.js";

  export default class TodoController {

    async getAllTodo(req, res) {
        try {
          const todos = await getData("todo");
          res.status(200).json(todos);
        } catch (error) {
          console.log(111, error);
          res.status(500).json({ error: "Server Error" });
        }
      }

      async getTodoById(req, res) {
        try {
          const todo = await getDataById("todo", req.params.id);
          res.status(200).json(todo);
        } catch (error) {
          console.log(111, error);
          res.status(500).json({ error: "Server Error" });
        }
      }

      async createTodo(req, res) {
        try {
          const todo = await insertData("todo", req.body);
          res.status(200).json(todo);
        } catch (error) {
          console.log(111, error);
          res.status(500).json({ error: "Server Error" });
        }
      }

      async editTodo(req, res) {
        try {
          const todo = await editData("todo", req.params.id, req.body);
          res.status(200).json(todo);
        } catch (error) {
          console.log(111, error);
          res.status(500).json({ error: "Server Error" });
        }
      }

      async deleteTodo(req, res) {
        try {
          const todo = await deleteData("todo", req.params.id);
          res.status(200).json(todo);
        } catch (error) {
          console.log(111, error);
          res.status(500).json({ error: "Server Error" });
        }
      }

  }