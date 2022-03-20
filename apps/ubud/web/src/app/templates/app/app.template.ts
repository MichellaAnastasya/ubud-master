import { ChangeDetectionStrategy, Component } from "@angular/core";
@Component({
    selector: 'ubud-app-template',
    templateUrl: './app.template.html',
    changeDetection:ChangeDetectionStrategy.OnPush,
})

export class AppTemplate{}