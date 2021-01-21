import Modifier, { modifier } from 'ember-modifier';
import { inject as service } from '@ember/service';

class Focus extends Modifier {
  @service('focus-manager') focusManager;

  didReceiveArguments() {
    if (this.args.named.when) {
      this.focusManager.setFocusTo(this.element);
    }
  }
}

export default modifier(function focus(element, _, named) {
  const shouldFocus = named.when;
  if (shouldFocus) {
    element.focus();
  }
});
