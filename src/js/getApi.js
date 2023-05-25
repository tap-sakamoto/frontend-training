import axios from "axios";
import {showDateTime} from "./showDateTime";

export function getApi() {
    axios({
        method: 'get',
        url: 'https://profile.line-scdn.net/0hvpWsr9fXKV9qCgHaZtlWCFZPJzIdJC8XEmhjMB9Ydm0SOGsBXmlkaUkPc2dBaWpaX2g1OUgCdD9F',
        timeout: 100000,
        onDownloadProgress: (progressEvent) => {
            let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log('percent : ' + percentCompleted);
            document.getElementById('progressbar').ariaValuenow = percentCompleted;
            document.getElementById('progressLabel').style.width = percentCompleted + '%';
            document.getElementById('progressLabel').innerHTML = percentCompleted + '%';
            document.getElementById('loadingCondition').innerHTML = 'now loading';
        },
    })
        .then((response) => {
            document.getElementById('loadingCondition').innerHTML = 'completed';
            showDateTime();
        })
        .catch((error) => {
            document.getElementById('loadingCondition').innerHTML = 'error';
        })
}

document.getElementById('getApiButton').onclick = getApi;
