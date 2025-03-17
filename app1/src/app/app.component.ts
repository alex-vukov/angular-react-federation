import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import injector from 'app2/injectApp';
import { importRemote } from 'module-federation-import-remote';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app1';
  unmount: (s: string) => void = () => {};

  ngOnInit() {
    importRemote<{ inject: (s: string) => void; unmount: (s: string) => void }>(
      {
        url: 'http://localhost:3002',
        scope: 'app2',
        module: './injectApp',
      }
    )
      .then(({ inject, unmount }) => {
        inject('inject-target');
        this.unmount = unmount;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  ngOnDestroy() {
    this.unmount('inject-target');
  }
}
