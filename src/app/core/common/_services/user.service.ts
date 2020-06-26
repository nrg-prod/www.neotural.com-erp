import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/index';
import { ServerURL } from './url';


@Injectable()
export class UserService {    
    suburl:string;
    private commonURL = this.globalsURL.serverURL;

    
    //  let arr4: Array<Dropbox> = [];
    constructor(private http: HttpClient, private globalsURL: ServerURL) { }

}
