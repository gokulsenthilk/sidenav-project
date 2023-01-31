import { Component } from '@angular/core';

@Component({
  selector: 'default',
  template: `
    <div style="height: 600px;" #dashboard>
      <dashboard></dashboard>
    </div>
    <div style="height: 600px;" #analytics>
      <analytics></analytics>
    </div>
    <div style="height: 600px;" #history>
      <history></history>
    </div>
    <div style="height: 600px;" #explore>
      <explore></explore>
    </div>
  `,
})
export class DefaultComponent {}
