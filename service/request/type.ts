import type{AxiosRequestConfig,AxiosResponse} from 'axios';
interface CBinterceptors<T=AxiosResponse>
{
  requestSuccessFn?:(config:AxiosRequestConfig)=>AxiosRequestConfig
  requestFailureFn?:(err:any)=>any
  responsetSuccessFn?:(res:T)=>T
  responseFailureFn?:(err:any)=>any
}
export interface CBrequestConfig<T=AxiosResponse> extends AxiosRequestConfig
{
  interceptors?:CBinterceptors<T>
}