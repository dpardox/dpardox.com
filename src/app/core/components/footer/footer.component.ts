import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  readonly year = signal(new Date().getFullYear());

  // TODO (dpardo): Add built technologies

}
