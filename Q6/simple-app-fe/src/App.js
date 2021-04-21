import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Layout } from "antd";
import CalenderHome from "./components/Calender/CalenderHome";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>
          <div className="App">
            <TodoList />
          </div>
        </Content>
        <Sider>
          <CalenderHome />
        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
