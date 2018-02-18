import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public oidcSecurityService: OidcSecurityService,
  private http: HttpClient) {
    if (this.oidcSecurityService.moduleSetup) {
      this.doCallbackLogicIfRequired();
    } else {
      this.oidcSecurityService.onModuleSetup.subscribe(() => {
          this.doCallbackLogicIfRequired();
      });
    }
  }


private doCallbackLogicIfRequired() {
  if (window.location.hash) {
      this.oidcSecurityService.authorizedCallback();
  }
}

login() {
    this.oidcSecurityService.authorize();
}

logout() {
    this.oidcSecurityService.logoff();
}
getData() {
	const token = this.oidcSecurityService.getToken();
  const headers = new HttpHeaders({"Authorization": "Bearer " + token});
  
  this.http.get("http://localhost:60136/values", { headers: headers }).subscribe(() => {
    alert("got data")
});

  }
}
