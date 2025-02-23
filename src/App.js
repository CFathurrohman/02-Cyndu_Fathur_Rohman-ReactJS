import Greeting from "./Greeting";
import Counter from "./Counter";
import React from "react";
import Example from "./Example";
import TodoList from "./Todolist";

//Komponen Header
function Header(){
  return (
    <div>
      <h1>Aplikasi React Saya</h1>
    </div>
  );
}

//Komponen Main
function Main(){
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya!</h2>
      <p>Ini adalah area konten utama.</p>
    </main>
  )
}

//Komponen Footer
function Footer(){
  return (
    <p>&copy; 2025 Aplikasi React Saya</p>
  )
}

//Komponen App yang menggunakan Header, Main, dan Footer
function App(){
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="John" />
      <Counter />
      <Example />
      <TodoList />
      <Footer />
    </div>
  )
}

export default App;