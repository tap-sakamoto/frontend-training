import axios from "axios";
import {showDateTime} from "./showDateTime";

export function getApi() {
    let elementLoadingCondition = document.getElementById('loadingCondition');
    axios({
        method: 'get',
        url: 'https://profile.line-scdn.net/0hvpWsr9fXKV9qCgHaZtlWCFZPJzIdJC8XEmhjMB9Ydm0SOGsBXmlkaUkPc2dBaWpaX2g1OUgCdD9F',
        timeout: 100000,
        onDownloadProgress: (progressEvent) => {
            const total = progressEvent.total;
            if (total !== undefined) {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / total);
                console.log('percent : ' + percentCompleted);
                const elementProgressbar = document.getElementById('progressbar');
                const elementProgressLabel = document.getElementById('progressLabel');
                if (elementProgressbar !== null) {
                    elementProgressbar.ariaValueNow = String(percentCompleted);
                }
                if (elementProgressLabel !== null) {
                    elementProgressLabel.style.width = percentCompleted + '%';
                    elementProgressLabel.innerHTML = percentCompleted + '%';
                }
            }
            if (elementLoadingCondition !== null) {
                elementLoadingCondition.innerHTML = 'now loading!!!';
            }
        },
    })
        .then((response) => {
            if (elementLoadingCondition !== null) {
                elementLoadingCondition.innerHTML = 'completed-ts';
            }
            showDateTime();
        })
        .catch((error) => {
            if (elementLoadingCondition !== null) {
                elementLoadingCondition.innerHTML = 'error-ts';
            }
        })
}

// const elementGetApiButton = document.getElementById('getApiButton');
// console.log('elementGetApiButton')
// if (elementGetApiButton !== null) {
//     console.log('elementGetApiButton')
//     elementGetApiButton.onclick = getApi;
// }
