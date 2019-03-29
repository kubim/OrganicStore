import axios from 'axios';
import * as Config from '../constants/Config';
export  default  async  function  callApi(k=0, part, method = 'GET', body){
    if(k===0)
        return await  axios({
            method:method,
            url: `${Config.API_URL}/${part}`,
            data: body
        }).catch(err => {
            console.log(err);
        });
    if(k===1)
        return await  axios({
            method:method,
            url: `${Config.API_URL1}/${part}`,
            data: body
        }).catch(err => {
            console.log(err);
        })
}
