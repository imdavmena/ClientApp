import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '@app/_models';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
})
export class ViewComponent {
  currentRouter: string | undefined;
  user?: User;
  isOpen?: boolean;

  constructor(
    private router: Router,
    auth: AuthenticationService,
  ) {

    this.user = auth.userValue;
    this.currentRouter = this.router.url;
  }

  showAside(): void {
    this.isOpen = !this.isOpen;
  }

  ngOninit() {
    this.currentRouter = this.router.url;
  }
}
