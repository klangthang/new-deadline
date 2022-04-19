<<<<<<< HEAD
import React from "react";
import "./App.css";
import { Card, Form } from 'react-bootstrap';
import { Button, Input, Row  } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';



function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"

    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button type="primary" ghost onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button type="primary" ghost onClick={() => removeTodo(index)} danger>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
      </Form.Group>
      <Input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo"></Input>
      <Row justify="center">
      <Button type="submit" onClick={handleSubmit} >
        Submit
      </Button>
      </Row>
    </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

=======
import React from "react";
import "./App.css";
import { Button, Layout, Input } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';


const { Content } = Layout;

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"

    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button type="primary" ghost onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button type="primary" ghost onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  // return (
  //   <Form onSubmit={handleSubmit}>
  //     <Form.Group>
  //       <Form.Label><b>Add Todo</b></Form.Label>
  //       <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
  //     </Form.Group>
  //     <Button variant="primary mb-3" type="submit">
  //       Submit
  //     </Button>
  //   </Form>
  // );  
  return (
    <Layout>
      <Content>
        <p>Add Todo</p>
        <Input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo"/>
        <Button onClick={handleSubmit} type = "submit">Submit</Button>
      </Content>
    </Layout>
  ) 
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Layout>
              <Content>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Content>
            </Layout>
          ))}
        </div>
      </div>
    </div>
  );
}

>>>>>>> 7b196aebdd158599bb868276432c84921561430f
export default App;