export function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  return { cYear: yyyy, cMonth: mm, cDay: dd };
}

export function daysInMonth(year, month) {
  year = parseInt(year);
  month = parseInt(month);
  return new Date(year, month, 0).getDate();
}

export let monthsArr = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(date) {
  let x = date.split("-");

  return (
    x[0].padStart(2, "0") + " " + monthsArr[x[1] - 1].substr(0, 3) + "," + x[2]
  );
}
