import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {UbudElementCommonNavComponentModule, UbudElementCommonSidebarComponentModule, UbudElementCommonCardComponentModule, UbudElementCommonPipesComponentModule }from '@ubud/element/common';
import { AppTemplate } from './templates/app/app.template';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(
            {},
            {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false,
                },
            },
        ),
        EffectsModule.forRoot([]),

        RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'}),
        UbudElementCommonCardComponentModule,
        UbudElementCommonNavComponentModule,
        UbudElementCommonPipesComponentModule,
        UbudElementCommonSidebarComponentModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'id',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
