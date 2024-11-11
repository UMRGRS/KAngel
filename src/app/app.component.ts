import { Component } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KAngel';

  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {  initFlowbite();})
      }
    });
  }
}
