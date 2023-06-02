import {getApi} from "./ts/getApi";
import "./scss/app.scss";

const elementGetApiButton = document.getElementById('getApiButton');
console.log('elementGetApiButton')
if (elementGetApiButton !== null) {
    console.log('elementGetApiButton')
    elementGetApiButton.onclick = getApi;
}
