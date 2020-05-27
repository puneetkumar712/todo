import TodoStore from "../../service/TodoStore";
const request = require("supertest");
let server;

jest.mock("../../service/TodoStore");
// jest.mock("../../service/TodoStore",  () => {
//     return {
//         TodoStore : jest.fn().mockImplementation(()=> {
//             return {
//                 getTodos : () => {
//                     return [1,2,3]
//                 }
//             }
//         })
//     }
// });

describe("Todo", () => {
  beforeEach(() => {
    server = require("../../index");
    // console.log(TodoStore.getTodos)
    // console.log(TodoStore.prototype.getTodos)
    // TodoStore.prototype.getTodos.mockReturnValue([1,2,3])
    // console.log(getTodos)
    TodoStore.getTodos.mockClear();
  });

  afterEach(async () => await server.close());

  it("GET /todo Should return the all todos available", async () => {
    const todos = [
      {
        id: 1,
        name: "Finish Node",
        complete: false,
      },
      {
        id: 2,
        name: "React with Jest",
        complete: false,
      },
    ];
    TodoStore.getTodos.mockReturnValue(todos);

    const response = await request(server).get("/todo");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(todos);
  });

  it.only("POST /todo should save the todo in the list", async () => {
    const todo = { name: "Complete AWS training", complete: false };
    const expectTodo = { ...todo, id: 1 };
    const mockaddTodo = jest.fn().mockReturnValue(expectTodo);
    TodoStore.addTodo.mockImplementation(mockaddTodo)

    const response = await request(server)
      .post("/todo")
      .send(todo)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectTodo);
    expect(mockaddTodo.mock)
  });

  it("POST /todo return 400 when Todo parameters are not passed correctly", async ()=> {
    const todoRequest = {name:"do this"};
    const response = await request(server)
                    .post('/todo')
                    .send(todoRequest)
    expect(response.status).toBe(400);
    console.log(response.error.text)

  });
});
