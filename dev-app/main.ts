import { Aurelia } from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
  // Load local plugin from ../src
  aurelia.use.standardConfiguration();
  aurelia.use.feature('../src');
  aurelia.use.developmentLogging('info');
  aurelia.use.plugin('aurelia-testing');

  aurelia.start().then(() => aurelia.setRoot());
}
