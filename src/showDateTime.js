import dayjs from "dayjs";

export function showDateTime(){
    let now = dayjs().format('YYYY-MM-DD HH:mm:ss');
    document.getElementById('completeDate').innerHTML = "complete date is " + now;
}
