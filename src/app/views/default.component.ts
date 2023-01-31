import { Component } from '@angular/core';

@Component({
  selector: 'default',
  template: `
    <div style="height: 600px;" id="dashboard">
      <dashboard></dashboard>
    </div>
    <div style="height: 600px;" id="analytics">
      <analytics></analytics>
    </div>
    <div style="height: 600px;" id="history">
      <history></history>
    </div>
    <div style="height: 600px;" id="explore">
      <explore></explore>
    </div>
  `,
})
export class DefaultComponent {}
