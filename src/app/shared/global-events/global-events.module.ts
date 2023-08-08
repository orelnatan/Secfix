import { NgModule, Provider } from '@angular/core';

const argsProvider: Provider = {
    provide: 'args', useValue: null 
};

@NgModule({
    providers: [
        argsProvider
    ]
})
export class GlobalEventsModule {}