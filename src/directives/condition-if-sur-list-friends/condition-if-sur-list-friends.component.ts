import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OneFriendComponent } from '../../components/one-friend/one-friend.component';

interface Friends {
  name: string;
  age: number;
  email: string
}

@Component({
  selector: 'app-condition-if-sur-list-friends',
  imports: [NgIf, NgFor, FormsModule, OneFriendComponent],
  templateUrl: './condition-if-sur-list-friends.component.html',
  styleUrl: './condition-if-sur-list-friends.component.css'
})
export class ConditionIfSurListFriendsComponent {
  friendsCreated:boolean=false;
  listFriendsAuth:boolean=false;
  // friendsDisplay:boolean=false;
  friendsCreationStatus:string="";
  friendsInputText:string="Texte de l'ami";
  myFriends: Friends[] = [
    { name: 'Alice', age: 25, email: "alice@gmail.com" },
    { name: 'Bob', age: 30, email: "Bob@gmail.com" },
    { name: 'Charlie', age: 28, email: "charlie@gmail.com" }
  ];
  // constructor(){

  // }

  onCreationFriends():void{
    this.friendsCreationStatus=`Votre ami ${this.friendsInputText} a été ajouté`;
    // this.friendsCreated=!this.friendsCreated;
    this.friendsCreated=true;
  }

  onUpdateFriendList(eventInput:Event):void{
    console.log(eventInput);
    // console.log((<HTMLInputElement>eventInput.target).value);
    // this.friendsInputText = (<HTMLInputElement>eventInput.target).value;
  }
}
