export default function DisplayGrid({daysWithInfo, setDaysInfo, currentDate}){
    let nullBox = [];
    for(let i=1;i<=35 - daysWithInfo.length;i++){
        nullBox.push(i);
    }
    function updateData(i, value){
        daysWithInfo[i] = {...daysWithInfo[i], message: value}
        setDaysInfo([...daysWithInfo])
        let savedData =JSON.parse(localStorage.getItem("eventInfo"))
        if(!savedData){
            savedData = {}
        }
        savedData[`${i+1}-${currentDate.month}-${currentDate.year}`] = {message: value}; 
        localStorage.setItem("eventInfo",JSON.stringify(savedData))
    }
    return (
        <div className = "adjust">{daysWithInfo.map((value, i)=>{
            return (
                <div className="box">
                    <div className="boxday">{value.day}</div>
                    <textarea onChange={(e)=>updateData(i, e.target.value)} className="message" style={{overflow:'hidden'}} value={value.message}/>
                </div>
                )
        })}
        {nullBox.map((value)=>{
            return (
                <div>
                </div>
            )
        })}
        </div>
    )
}

