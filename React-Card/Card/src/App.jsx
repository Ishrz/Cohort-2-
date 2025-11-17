import React from "react";
import "./App.css";
import Cards from "./components/cards";

function App() {
  let arr = [
    {
      name: "iphone",
      desc: "iPhone 16 pro max flana dhimka,,,,",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stock: true,
    },
    {
      name: "Blackberry",
      desc: "Blackberry pro max flana dhimka,,,,",
      img: "https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stock: true,
    },
    {
      name: "OnePlus",
      desc: "Oneplus 10 pro max flana dhimka,,,,",
      img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stock: false,
    },
    {
      name: "Samsung",
      desc: "Samsung galaxy flip max flana dhimka,,,,",
      img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stock: true,
    },
  ];

   let arr2 = [
    {
      name: "iphone",
      desc: "iPhone 16 pro max flana dhimka,,,,",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stock: false,
    },
    {
      name: "Blackberry",
      desc: "Blackberry pro max flana dhimka,,,,",
      img: "https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stock: false,
    },
    {
      name: "OnePlus",
      desc: "Oneplus 10 pro max flana dhimka,,,,",
      img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stock: true,
    },
  ]

  return (
    <>
      <div className="main w-full h-screen flex justify-center items-center gap-4 flex-wrap pt-4">
        <Cards title={arr} />
        <Cards title={arr2}/>
      </div>
    </>
  );
}

export default App;
