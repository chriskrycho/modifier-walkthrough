import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { TrackedArray } from 'tracked-built-ins';

export default class ApplicationController extends Controller {
  @tracked values = new TrackedArray(['hello', 'goodbye', 'hola', 'adieu']);

  get firstBadIndex() {
    // smart
    return 1;
  }

  updateValue = (index, newValue) => {
    this.values[index] = newValue;
  };

  addInput = () => {
    this.values.push('');
  };

  delete = (index) => {
    this.values.splice(index, 1);
  };
}
