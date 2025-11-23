import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const teamMembers = [
    {
      name: "Noah Thompson",
      profession: "Digital Strategist",
      image:
        "https://images.unsplash.com/photo-1762936263573-af3e0d866980?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "Focuses on market trends and growth hacking techniques.",
    },
    {
      name: "Isabella Rossi",
      profession: "Security Engineer",
      image:
        "https://images.unsplash.com/photo-1762147682327-493301b0f512?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "Responsible for threat modeling, penetration testing.",
    },
    {
      name: "Jayden Miller",
      profession: "Cloud Architect",
      image:
        "https://images.unsplash.com/photo-1762575910569-46971cd69df3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "Designs and manages scalable, high-availability infrastructure",
    },
    {
      name: "Sofia Khan",
      profession: "Technical Writer",
      image:
        "https://images.unsplash.com/photo-1576775068104-807d10cdf0ea?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "Creates clear, concise documentation, API references.",
    },
    {
      name: "Ethan Wright",
      profession: "Machine Learning Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      info: "Develops and deploys predictive models .",
    },
  ];

  let [members, setMembers] = useState([]);

  function formData(data) {
    setMembers([...members, data]);
  }

  function removeFormData(id) {
    setMembers(() => {
      return members.filter((elem, index) => {
        return index !== id;
      });
      // console.log(id)
    });
  }

  return (
    <>
    
      <Navbar />
      <Cards removeFormData={removeFormData} members={members} />
      <Form formData={formData} />
    </>
  );
}

export default App;
