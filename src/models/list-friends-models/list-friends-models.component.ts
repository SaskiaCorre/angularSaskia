import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OneFriendComponent } from "../../components/one-friend/one-friend.component";

@Component({
  selector: 'app-list-friends-models',
  imports: [FormsModule, OneFriendComponent],
  templateUrl: './list-friends-models.component.html',
  styleUrl: './list-friends-models.component.css'
})

export class ListFriendsModelsComponent {
  listFriendsAuth:boolean=false;
  friendsCreationStatus:string="🥶 Aucun ami ..."
  friendName:string="Marcel"
  friendsNumberInput:number= 4;
  constructor(){
    setTimeout(() => {
      this.listFriendsAuth = true;
    }, 600000);
  }

  onAddingFriends():void{
    this.friendsCreationStatus=`🥳 Votre ami ${this.friendName} a été ajouté !`;
  }
  onUpdateFriendName(eventInput:Event):void{
    console.log(eventInput);
    console.log((<HTMLInputElement>eventInput.target).value);
    this.friendName = (<HTMLInputElement>eventInput.target).value;
  }
}

