import React,{useState} from "react"
import ReactDOM from 'react-dom'
import './index.css'

const AddTask=({addTask})=>{

 const [value,setValue] =useState("")


const handleSubmit= e=>{

  e.preventDefault();

  if(value !=="")

  {

    addTask(value)

    setValue("");

  }

}

return(

  <form onSubmit={handleSubmit}>

  <input 

  type="text"

  value={value}

  placeholder="toAdd TodoList"

  onChange={e =>setValue(e.target.value)}

/>

<button type="sumbit">add</button>

</form>  

);

}

  const TodoApp=()=>{

    const addTask=text=>updateTask([...tasks,{text} ])

    const[tasks,updateTask]=useState([

{text:"wake up",

  taskCompleted:"false"

},

{

  text:"fresh up",

 taskCompleted:"false"

},

{

 text:"walking",

 taskCompleted:"false"    

}         

])

const toggleTask=index=>{

const newTask =[...tasks] 

 if (newTask[index].taskCompleted){

   newTask[index].taskCompleted=  false;

 }else{

   newTask[index].taskCompleted= true;

 }

 updateTask(newTask);

}

const removeTask=index=>{

 const newTask=[...tasks]

  newTask.splice(index,1)

  updateTask(newTask);

}

    return(

      <div className="Todolist"><h1 className="h1">TodoApp LIST</h1>

      {tasks.map((task,index)=>(

      




  <div className="todo Status">

      <span onClick={()=>toggleTask(index)} className={task.taskCompleted? "task-name" :"task-name completed-task"}>

      {index}

        {task.text}

      </span>

      <button onClick={()=>removeTask(index)}>delete</button>

      </div>

      ))}

      <AddTask addTask={addTask}/>

      </div>

    );

    }
ReactDOM.render(<TodoApp/>,document.getElementById("root"))
