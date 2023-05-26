import dayjs from 'dayjs';

export default function showDateTime() {
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
  document.getElementById('completeDate').innerHTML = `complete date is ${now}`;
}
