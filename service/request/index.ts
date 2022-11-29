import axios from 'axios'
import type{AxiosInstance,AxiosRequestConfig,AxiosResponse} from 'axios';
import type{CBrequestConfig} from './type';

import {getToken} from '@/utils/auth';
class CBrequest
{
  instance:AxiosInstance
  constructor(config:CBrequestConfig)
  {
    this.instance=axios.create(config)
    this.instance.interceptors.request.use((config)=>{
      const token=getToken()
      if(config && config.headers)
      {
        if(token)
        {
          config.headers['Authorization']='Bearer '+token
        }
      }
      return config
    },
    err=>{
       return err
    })
    this.instance.interceptors.response.use((res)=>{
      return res
    },
    err=>{
      return err.response
    })
    if(config.interceptors)
    {
      this.instance.interceptors.request.use(config.interceptors.requestSuccessFn,config.interceptors.requestFailureFn)
      this.instance.interceptors.response.use(config.interceptors.responsetSuccessFn,config.interceptors.responseFailureFn)
    }
  }
  request<T = any>(config:CBrequestConfig<T>)
  {
    
    return new Promise<T>((resolve,reject)=>{
      this.instance.request<any,T>(config).then(res=>{
        if(config.interceptors?.responsetSuccessFn)
        {
          res=config.interceptors.responsetSuccessFn(res)
        }
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
}
}
export default CBrequest