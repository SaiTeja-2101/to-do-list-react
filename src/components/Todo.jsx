import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FaStar } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
// import { FaSortAmountDown } from "react-icons/fa";
import './Todo.css';
import { UserButton } from "@clerk/clerk-react";
import { FaFilter } from "react-icons/fa";
// import {useState} from 'react';
function Todo() {
  const [btnvalue, setBtnValue] = useState("All");
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortBy, setSortBy] = useState("None");
  const [showSort, setShowSort] = useState(false);
  const [dueDate, setDueDate] = useState("")
  
 
  function addTasks() {
    if (input.trim() === "") {
      alert("Please enter a task");
      return;
    }
    setTasks([...tasks, { text: input, completed: false, starred: false, dueDate }]);
    setInput("");
  }
  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i != index);//can also be written as ((_,i)=>i!=index)
    setTasks(newTasks);
  }
  function completedTask(index) {
    if (!tasks[index].completed) {
      const audio = new Audio("/finished.mp3");
      audio.play();
    }
    const newTasks = tasks.map((task, i) => {
      return i == index ? { ...task, completed: !task.completed } : task;
    })
    setTasks(newTasks);
  }
  function addFavourites(index) {
    const newTasks = tasks.map((task, i) => (
      i === index ? { ...task, starred: !task.starred } : task
    ))
    setTasks(newTasks);
  }
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setIsLoaded(true);
  }, [])
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, isLoaded]);
  const filteredTasks = tasks.filter(task => {
    if (btnvalue === "All") return true;
    if (btnvalue === "Active") return !task.completed;
    if (btnvalue === "Completed") return task.completed;
    if (btnvalue === "Starred") return task.starred;
  });
  let sortedTasks = [...filteredTasks];
  if (sortBy === "DueDate") {
    sortedTasks.sort((a, b) => {
      return new Date(a.dueDate) - new Date(b.dueDate);
    });
  }
  else if (sortBy === "Alphabetical") {
    sortedTasks.sort((a, b) => {
      return a.text.localeCompare(b.text);
    });
  }
  else if (sortBy === "Important") {
    sortedTasks.sort((a, b) => {
      return (b.starred ? 1 : 0) - (a.starred ? 1 : 0);
    });
  }
  else {
    sortedTasks = filteredTasks; // No sorting applied
  }
  
  return (
    <div className="App">

     <div style={{
    position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
    <h1 style={{ margin: 0 }}>To-Do List</h1>

    {/* Absolute-positioned UserButton */}
    <div style={{ position: "absolute", right: 0 }}>
      <UserButton appearance={{
    elements: {
      userButtonAvatarBox: {
        width: '40px',
        height: '40px',
      },
    },
  }} />
    </div>
  </div>
      <div className="todo-wrapper">
        <div className="todo-input">
          <input type="text" className="add-task" placeholder="Add a new task..." value={input} onChange={((e) => setInput(e.target.value))} />
          <input
            type="date"
            className="add-date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            style={{ marginLeft: "10px", padding: "10px", fontSize: "1.2rem", border: "1px solid #ccc", borderRadius: "22px" }}
          />
          <button className="add-button" onClick={addTasks}><i className="fa-solid fa-plus"></i></button>
        </div>
        <div className="btn-area">
          <button className={`btn ${btnvalue === "All" && "active"}`} onClick={() => setBtnValue("All")} >All</button>
          <button className={`btn ${btnvalue === "Active" && "active"}`} onClick={() => setBtnValue("Active")}>Upcoming</button>
          <button className={`btn ${btnvalue === "Completed" && "active"}`} onClick={() => setBtnValue("Completed")}>Completed</button>
          <button className={`btn ${btnvalue === "Starred" && "active"}`} onClick={() => setBtnValue("Starred")}>Important</button>

          <span style={{ marginLeft: "10px", position: "relative" }}>
            <button 
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                marginTop:"10px",
                display: "flex",
                alignItems: "center",
               
              }}
              onClick={() => setShowSort(!showSort)}
            >
              <FaFilter size={25}/>
            </button>
            {showSort && (
              <div style={{
                position: "absolute",
                top: "30px",
                left: 0,
                background:"white",
                border: "1px solid #ccc",
                borderRadius: "6px",
                // fontSize: "2rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 10
              }}>
                <select
                  value={sortBy}
                  onChange={e => {
                    setSortBy(e.target.value);
                    setShowSort(false);
                  }}
                  style={{
                    border: "none",
                    background: "none",
                    padding: "10px 8px",
                    fontSize: "1.3rem",
                    width: "180px"
                  }}
                  size={4}
                >

                  <option value="None" style={{ paddingBottom: "10px" }}>None</option>
                  <option value="DueDate" style={{ paddingTop: "10px", paddingBottom: "10px", borderTop: "2px solid grey", borderBottom: "2px solid grey" }}>Due Date</option>
                  <option value="Alphabetical" style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "2px solid grey" }}>A-Z</option>
                  <option value="Important" style={{ paddingTop: "10px", paddingBottom: "10px" }}>Important</option>
                </select>
              </div>
            )}
          </span>
        </div>
        <div className="todo-list">
          <ul className="todo-items">
            {sortedTasks.map((task) => {
              const index = tasks.indexOf(task);
              return (
                <li key={index} className="item">
                  <span className="left-icon" onClick={() => completedTask(index)} style={{ cursor: "pointer" }}>
                    {task.completed ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />}
                  </span>
                  <span className="task-text" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.text}
                    {task.dueDate && (
                      <span style={{ fontSize: "0.9em", color: "black", marginLeft: "10px", fontWeight: "lighter" }}>
                        (Due: {task.dueDate})
                      </span>
                    )}
                  </span>
                  <span className="right-icons">
                    <FaStar onClick={() => addFavourites(index)} style={{ cursor: "pointer", color: task.starred ? "#f1ca05 " : "grey" }} />
                    <TiDelete onClick={() => deleteTask(index)} style={{ cursor: "pointer" }} />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
  
      </div>
    </div>

  )
}

export default Todo
