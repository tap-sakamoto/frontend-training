import dayjs from "dayjs";

export function showDateTime() {
    let now = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const a = document.getElementById('completeDate');
    if (a !== null) {
        a.innerHTML = "complete date is " + now;
    }
}
