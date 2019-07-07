import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../app/services/authentication.service';
import { Usuarie } from '../../app/models/usuarie.model';
import { UsuarieHttpService } from '../../app/services/usuarie-http.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: Usuarie;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UsuarieHttpService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        // this.userService.delete(id)
        //     .pipe(first())
        //     .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        // this.userService.getAll()
        //     .pipe(first())
        //     .subscribe(users => this.users = users);
    }
}