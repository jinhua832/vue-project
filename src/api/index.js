//公共的请求方法
import base from './base'
import axios from '@/utils/request'
const api = {
    totalInfo(){
        return axios.get(base,this.totalInfo)
    }
}
export default api