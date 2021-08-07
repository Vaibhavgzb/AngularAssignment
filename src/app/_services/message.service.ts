import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class MessageService {
    private subject = new Subject<any>();

    getMessage() : Observable<any>{
        return this.subject.asObservable();
    }

    clearMessage() {
        this.subject.next();
    }

    sendMessage( message:string ) {
         this.subject.next({text:message});
    }
}