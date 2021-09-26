import {getDate, monthsArr, daysInMonth} from "../utils/dateUtil"

export default function InputDate({currentDate, setCurrentDate}){
    const {cYear} = getDate();
    const {year, month} = currentDate;
    let tempYear = []
    let tempMonths  = monthsArr;
    for(let i=cYear;i<=cYear+10;i++){
        tempYear.push(i);
    }
    
    return <div class="inputDate">
        <select className="yearInput" name="year" onChange={(e)=>setCurrentDate({month: month, year: e.target.value, nDays: daysInMonth(e.target.value, month)})}>
            {tempYear.map((value)=>{
                if(year!==value)
                return(<option value={value}>{value}</option>)
                else
                return(<option selected value={value}>{value}</option>)
           })}    
        </select>
        <select className="monthInput" name="year" onChange={(e)=>setCurrentDate({year: year, month: e.target.value, nDays: daysInMonth(year, e.target.value)})}>
            {tempMonths.map((value, i)=>{
                if(month!==(i+1))
                return(<option value={i+1}>{value}</option>)
                else
                return(<option selected value={i+1}>{value}</option>)
           })}    
        </select>
    </div>
}