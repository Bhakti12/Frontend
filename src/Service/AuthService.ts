import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';

export class AuthService{
    constructor(
        private http : HttpClient
    ){

    }

    Register(firstName:string,lastName:String,address:string,MobileNo:string,profilePic:string,idProof:string,email:string,password:string){
        
    }

    Login(email:string,password:string){

    }
}