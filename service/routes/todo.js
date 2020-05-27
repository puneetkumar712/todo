import express from "express";
import TodoStore from "../service/TodoStore";
import Joi from "@hapi/joi";
const router = express.Router();

router.use((req, res, next) => {
    console.log("Time: ", Date.now())
    next();
})

router.get("/", (req, res)=> {
    res.status(200).send(TodoStore.getTodos())
});

const schema = Joi.object({
    name: Joi.string().required().min(1),
    complete: Joi.boolean().required()
})

router.post("/", (req, res)=> {
    const {error} = schema.validate(req.body);
    // console.log(error);
    if(error) return res.status(400).send(error.details[0].message)

    // console.log('req', req.body);
    const addedTodo = TodoStore.addTodo(req.body)
    console.log(addedTodo)
    res.status(200).send(addedTodo);
})

export default router;