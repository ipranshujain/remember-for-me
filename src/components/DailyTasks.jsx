import { useEffect, useState } from "react"
import { AiFillPlusCircle, AiTwotoneDelete } from "react-icons/ai";
import {BiCheckboxChecked, BiCheckbox} from "react-icons/bi"
export default function DailyTasks(){
    
    const [dailyData, setDailyData] = useState([])
    const [inputValue, setInputValue] = useState("")
    
    function addTask(){
        console.log("I am clicked")
        if(inputValue.trim().length!==0){
            setDailyData([...dailyData, {isChecked: false, task: inputValue}])
            localStorage.setItem("dailyTasks", JSON.stringify([...dailyData, {isChecked: false, task: inputValue}]));
        }
        else{
            console.log("Size is 0")
        }
    }
    useEffect(()=>{
        const dailyData = JSON.parse(localStorage.getItem("dailyTasks"))
        if(dailyData)
            setDailyData(dailyData)
    }, [])
    // onClick={(e)=>{
    //     const list = dailyData;
    //     list[idx].isChecked = e.target.value;
    //     setDailyData([...list])
    // }}
    function changeCheck(idx){
        const list = dailyData;
        list[idx].isChecked = !list[idx].isChecked;
        setDailyData([...list])
        localStorage.setItem("dailyTasks", JSON.stringify([...list]));
    }
    function deleteFun(idx){
        localStorage.setItem("dailyTasks", JSON.stringify(dailyData.filter((task, jdx)=> jdx !==idx)));
        setDailyData(dailyData.filter((task, jdx)=> jdx !==idx))
    }
    return (<div className="daily-tasks">
            <div className="daily-tasks-head">Enter Daily Task</div>
            <div className="tasks-list">
                {dailyData.map((task, idx)=>{
                    return <div className="tasks-list-task" key={idx}>
                        <div onClick={()=>changeCheck(idx)}>{(task.isChecked)?(<BiCheckboxChecked size={40}/>):(<BiCheckbox size={40}/>)}</div>
                        <div style={{textDecoration: task.isChecked?"line-through":""}} className="task-class">{task.task}</div>
                        <div className="delete-icon" onClick={()=>deleteFun(idx)}>
                            <AiTwotoneDelete size={30}/>
                        </div>
                    </div>
                })}
            </div>
            <div className="add-daily-task">
            <div className="add-daily-task-input">
                <input placeholder='Enter Task' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />
            </div>
                <div className="add-icon-container" onClick={addTask}>
                    <div className="add-icon">
                        <AiFillPlusCircle size={30} />
                    </div>
                    <div className="add-icon-title" >Add Task</div>
                </div>
            </div>
            </div>)
}