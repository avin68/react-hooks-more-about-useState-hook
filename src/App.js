import { useState } from "react";

// function App(){

//     const initializerFunction = ()=>{
//       console.log('avin')
//       return 0
//     }
//     const [state , setState] = useState(initializerFunction)
//     const increaseHandler = ()=>{
//       setState(state + 1)
//     }

//     return(
//     <>
//       <h1>{state}</h1>
//       <button onClick={increaseHandler}>increase</button>
//     </>
//   )
// }

// ----------------------------------------------

// function App(){

//   const initializerFunction = ()=>{
//     console.log('avin')
//     return 0
//   }
//   const [state , setState] = useState(initializerFunction())
//   const increaseHandler = ()=>{
//     setState(state + 1)
//   }

//   return(
//   <>
//     <h1>{state}</h1>
//     <button onClick={increaseHandler}>increase</button>
//   </>
// )
// }

// ----------------------------------------------

// function createInitialTodos() {
//   const initialTodos = [];
//   for (let i = 0; i < 50; i++) {
//     initialTodos.push({
//       id: i,
//       text: "Item " + (i + 1),
//     });
//   }
//   console.log('avin')
//   return initialTodos;
// }

// function App() {
//   const [todos, setTodos] = useState(createInitialTodos);
//   const [text, setText] = useState("");

//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button
//         onClick={() => {
//           setText("");
//           setTodos([
//             {
//               id: todos.length,
//               text: text,
//             },
//             ...todos,
//           ]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {todos.map((item) => (
//           <li key={item.id}>{item.text}&  it's length:{item.text.length}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

////////////////////////////////////////////////


function todoFunction(){
  const todo = []
  for(let i=0 ; i<50 ; i++){
    todo.push({
      id : i,
      text : "item" + (i+1)
    })
    
  }
  console.log(todo)
  console.log('avin');
  
  return todo
}


function App(){
  const [text , setText] = useState("")
  const [todos , setTodos] = useState(todoFunction)

  const addingHandler =()=>{
    setText("");
    // setTodos([{id: text.length,
    //   text : text}, ...todos])
    setTodos([...todos, {id: text.length,
      text : text}])
    }
  return(
    <>
      <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
      <button onClick={addingHandler}>Add</button>
      <ul>
        {todos.map(item=>(
          <li key={item.id}>id-{item.id} {item.text} </li>
        ))}
      </ul>
    </>
  )
}

export default App
