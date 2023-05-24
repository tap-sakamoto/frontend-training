import {showDateTime} from "./showDateTime";
import axios from "axios";

export function getApi() {
    axios({
        method: 'get',
        url: 'https://profile.line-scdn.net/0hvpWsr9fXKV9qCgHaZtlWCFZPJzIdJC8XEmhjMB9Ydm0SOGsBXmlkaUkPc2dBaWpaX2g1OUgCdD9F?=',
        timeout: 100000,
        onDownloadProgress: (progressEvent) => {
            let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log('total' + progressEvent.total);
            console.log('loaded' + progressEvent.loaded);
            document.getElementById('test1').style.width = percentCompleted + '%';
            document.getElementById('test1').innerHTML = percentCompleted + '%';
            document.getElementById('test2').innerHTML = 'now loading';
        },
    })
        .then((response) => {
            document.getElementById('test2').innerHTML = 'completed';
            showDateTime();
        })
        .catch((error) => {
            document.getElementById('test2').innerHTML = 'error';
        })
}

document.getElementById('getApiButton').onclick = getApi;
