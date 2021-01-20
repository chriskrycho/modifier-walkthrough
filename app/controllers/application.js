import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { TrackedArray } from 'tracked-built-ins';

export default class ApplicationController extends Controller {
  @tracked values = new TrackedArray();

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
