import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'list-friends', loadComponent: () =>import('../components/list-friends/list-friends.component').then(m => m.ListFriendsComponent)},
    {path: 'one-friend', loadComponent: () =>import('../components/one-friend/one-friend.component').then(m => m.OneFriendComponent)},
    {path: 'list-friends-models', loadComponent: () =>import('../models/list-friends-models/list-friends-models.component').then(m => m.ListFriendsModelsComponent)},
    {path: 'data-binding', loadComponent: () =>import('../components/tp/data-binding/data-binding.component').then(m => m.DataBindingComponent)},
    {path: 'interpolation', loadComponent: () =>import('../components/lessons/text-interpolation/text-interpolation.component').then(m => m.TextInterpolationComponent)},
    {path: 'condition-if', loadComponent: () =>import('../directives/condition-if-sur-list-friends/condition-if-sur-list-friends.component').then(m => m.ConditionIfSurListFriendsComponent)},

    { path: '**', loadComponent: () => import('../shared-components/not-found/not-found.component').then(m => m.NotFoundComponent) },
  ];

