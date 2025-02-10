import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
// import { timer } from 'rxjs';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})

export class ListFriendsComponent {
  listFriendsAuth:boolean=false;
  friendsCreationStatus:string="Aucun ami"
  friendsInputText:string=""
  constructor(){
    setTimeout(() => {
      this.listFriendsAuth = true
    }, 3000);
  }

  onCreationFriends():void{
    this.friendsCreationStatus=`Votre ami a été ajouté`
  }

  onUpdateFriendList(eventInput:Event):void{
    console.log(eventInput);
    console.log((<HTMLInputElement>eventInput.target).value);
    this.friendsInputText = (<HTMLInputElement>eventInput.target).value;
  }

  listFriendsTab: { oneFriendName: string; oneFriendAge: number; email: string }[] = [
    { oneFriendName: 'Alice', oneFriendAge: 30, email: 'alice@example.com' },
    { oneFriendName: 'Bob', oneFriendAge: 25, email: 'bob@example.com' },
    { oneFriendName: 'Charlie', oneFriendAge: 35, email: 'charlie@example.com' }
  ];
}
