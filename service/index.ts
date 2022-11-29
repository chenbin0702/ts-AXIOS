import CBrequest from './request';
import {BASE_URL,TIME_OUT} from './config';
const cbrequest=new CBrequest(
  {
    baseURL:BASE_URL,
    timeout:TIME_OUT,
  }
)
export default cbrequest