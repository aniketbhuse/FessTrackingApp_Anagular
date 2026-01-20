import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GlobalConstant } from '../constant/Global.constant';
// upto angular 15 => guard is service
// from angular 17 => guard is arrow function
export const authGuard: CanActivateFn = (route, state) => {
  
  const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
  const router = inject(Router);

  if(localData !=  null){
  return true;
  }
  else
    {
      router.navigateByUrl('/login');
    return false;
  }
};
