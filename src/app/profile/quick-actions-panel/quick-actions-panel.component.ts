import { Component } from '@angular/core';
import { QuickActionCardFormComponent } from "../quick-action-card-form/quick-action-card-form.component";
import { QuickActionCardLinkComponent } from "../quick-action-card-link/quick-action-card-link.component";

@Component({
  selector: 'app-quick-actions-panel',
  standalone: true,
  imports: [QuickActionCardFormComponent, QuickActionCardLinkComponent],
  templateUrl: './quick-actions-panel.component.html',
  styleUrl: './quick-actions-panel.component.css'
})
export class QuickActionsPanelComponent {

}
