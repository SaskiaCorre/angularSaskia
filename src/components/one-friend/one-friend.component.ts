import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [NgStyle, NgClass],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {

  // friend = { id: 1, name: 'Alice', age: 25, status: 'Online', bio: 'Aime le développement web', xss: "<script>alert('Hello, XSS')</script>" }
  oneFriendId:number=1;
  oneFriendName:string="Sam Palmer";
  oneFriendAge:number=34;
  oneFriendStatus:string="Online";
  oneFriendBio:string="Personnage inventé";
  // oneFriendXss:string="<script>alert('Hello, XSS')</script>";
  oneFriendImg:string="https://picsum.photos/seed/picsum/150/150";
  oneFriendHobbies:string[]=['Musique','Sport','Cinéma'];
  oneFriendStyle:string='OFF';

  constructor(){
    this.oneFriendStyle = Math.random()>0.5?'ON':'OFF';
  }
  
  getOneFriendStatus(){
    // return this.friend.status;
    return this.oneFriendStatus;
  }

  getColor():string{
    return this.oneFriendStyle === 'ON' ? 'lightseagreen' : 'orangered'
  }
}
