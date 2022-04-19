import React from "react";
import {useState} from 'react';
import "./App.css";
import { Card, Form } from 'react-bootstrap';
import { Button, Input, Row, Space, Col  } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';



function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"

    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div style={{justifyContent: "space-between"}}>
        <Button type="primary" ghost onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button type="primary" ghost onClick={() => removeTodo(index)} danger>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");
  const [size,setSize] = useState("medium");

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
      <Col>
      <Input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo"></Input>
      </Col>
      <Row justify="center">
      <Button type="submit" onClick={handleSubmit} style={{marginTop:20}}>
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
            <Card style={{ margin:20}}>
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

export default App;