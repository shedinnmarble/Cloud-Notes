import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'app.component.html'
})
export class AppComponent {
    submitted = false;
    onSubmit() { this.submitted = true; }
}
