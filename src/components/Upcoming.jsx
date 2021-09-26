import { formatDate } from "../utils/dateUtil";

export default function Upcoming(){
    let savedData = JSON.parse(localStorage.getItem("eventInfo"))
    let events = []
    if(!savedData){
        savedData = {}
    }
    Object.entries(savedData).forEach((value)=>{
        if(value[1].message.trim()!=="")
        events.push({date: value[0], message: value[1].message});
    })
    let st = "pranshu"
    st.substr()
    events.sort((a, b)=>{
        console.log("a b is: ",a,b)
        let x = a.date.split("-")
        let y = b.date.split("-")
        let s = x[2]+"-"+x[1].padStart(2,"0")+"-"+x[0].padStart(2,"0");
        let t = y[2]+"-"+y[1].padStart(2,"0")+"-"+y[0].padStart(2,"0");
        console.log(s,t,"is")

        if(s<t){
            return -1;
        }
        if(s>t){
            return 1;
        }
        return 0;
    })
    return(
        <div>
            <div className="uphead">Upcoming Events</div>
            <div className="upcoming">
            {events.map((value)=>{
                return (
                <div class="infoup">
                    <div class="dateup">{formatDate(value.date)}</div>
                    <div className="messageup">{value.message}</div> 
                </div>)
            })}
        </div>
        </div>
        
    )
}