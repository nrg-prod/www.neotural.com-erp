import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermgt } from 'src/app/core/common/_models';

@Injectable()
export class UserMgtService {    

public url = require("../apiurl.json");
private commonURL = this.url[0].apiurl+'usermgt/';

constructor(private http: HttpClient) { }

//*********************Employee************************

// Save 
save(usermgt: Usermgt){
    console.log('service....');
    return this.http.post<Usermgt>(this.commonURL+'save',usermgt);
}

// Load 
load(){
    return this.http.get(this.commonURL+'load');
}

// get 
get(id:number){
    return this.http.get<Usermgt>(this.commonURL+'get?id='+id);
}

// Update 
update(usermgt: Usermgt){
    return this.http.put<Usermgt>(this.commonURL+'update',usermgt);

}

// Remove 
remove(id:number){
    return this.http.delete<String>(this.commonURL+'remove?id='+id);
}
}
