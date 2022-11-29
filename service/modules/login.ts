import cbrequest from '../index';
interface logindata
{
  account:string,
  password:string
}
 export const UserLogin=(data:logindata)=>{
 return cbrequest.request({
    url:'/login',
    method:'POST',
     data
  }).then(res=>{
    return Promise.resolve(res.data)
  }).catch(err=>{
    return Promise.resolve(err)
  })
 }
