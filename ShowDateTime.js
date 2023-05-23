// import {dayjs} from './node_modules/dayjs/dayjs.min.js';
import dayjs from "dayjs";

export function showDateTime(){
    let now = dayjs().format("YYYY/M/D h:m:s (ddd)");
    document.getElementById('completeDate').innerHTML = "complete date is " + now;
}
