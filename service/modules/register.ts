import cbrequest from '../index';
interface RegisterInfo
{
  account:string,
  email:string,
 password:string
}
export const UserRegister=(data:RegisterInfo)=>{
 return cbrequest.request(
    {
      url:'/users',
      method:'POST',
      data
    }
  )
}
export const testAPI=()=>{
  return cbrequest.request(
    {
      url:'/users',
      method:'GET'
    }
  )
}