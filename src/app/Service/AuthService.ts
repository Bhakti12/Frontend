import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { config } from 'src/config/env';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usePort = config.PORT;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  Register(
    firstName: string,
    lastName: String,
    address: string,
    MobileNo: string,
    profilePic: string,
    idProof: string,
    email: string,
    password: string
  ) {
    try {
        const registerPort = this.usePort + `/register`;
      this.http
        .post(
          registerPort,
          {
            firstName,
            lastName,
            address,
            MobileNo,
            profilePic,
            idProof,
            email,
            password,
          },
          this.httpOptions
        )
        .subscribe((response: any) => {
          if (response.code === 403) {
            console.log(response);
          } else {
            console.log(response);
          }
        });
    } catch (err) {}
  }

  Login(email: string, password: string) {}
}
