import { getDate } from "./dateUtil";

export function cleanStorage() {
  const { cYear, cMonth, cDay } = getDate();
  let b = cYear + "-" + cMonth.padStart(2, "0");
  let savedData = JSON.parse(localStorage.getItem("eventInfo"));
  const newObj = {};
  if (!savedData) {
    savedData = {};
  }
  Object.entries(savedData).forEach((value) => {
    let x = value[0].split("-");
    let a = x[2] + "-" + x[1].padStart(2, "0");
    if (a >= b && value[1].message.trim() !== "") {
      newObj[value[0]] = value[1];
    }
  });
  localStorage.setItem("eventInfo", JSON.stringify(newObj));
}
