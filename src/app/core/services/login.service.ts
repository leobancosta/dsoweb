import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginRetries: number = 0;

  constructor(private apiService: ApiService) { }

  loginUser(s_username: string, s_password: string): Observable<object> {
    // if (s_username == "admin@dxc.com" && s_password == "adminpassword") {
    //   return of({
    //     success: true,
    //     retries: this.loginRetries,
    //     message: "Login Successful"
    //   });
    // } else if (s_username && s_password) {
      if (s_username && s_password){
      // let params = new HttpParams({
      //   fromObject: {
      //     empEmail: s_username,
      //     empPassword: s_password,
      //     retries: this.loginRetries.toString()
      //   }
      // });
      let params = {
          empEmail: s_username,
          empPassword: s_password,
          retries: this.loginRetries.toString()
      }

      //enter get api here
      //api:/dso/gateway/v1/empLogin
      // return this.apiService.createPostRequest('employee/register', params).pipe(
      //   catchError(err => {
      //     console.log(err);
      //     return throwError({
      //       success: false,
      //       retries: this.loginRetries,
      //       message: "Server Error!"
      //     });
      //   })
      // );

      return this.apiService.createPostRequest('employee/authenticate', params).pipe(
        catchError(err => {
          console.log(err);
          return throwError({
            success: false,
            retries: this.loginRetries,
            message: "Server Error!"
          });
        })
      );
    } else {
      this.loginRetries++;

      return of({
        success: false,
        retries: this.loginRetries,
        message: "Invalid Username/Password"
      });
    }

  }
}