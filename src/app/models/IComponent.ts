import { Type } from '@angular/core';
export class IComponent {
    constructor(public component: Type<any>, public data?: any) { }
}
