import { helper } from '@ember/component/helper';

export default helper(function display([value]) {
  return value === undefined ? 'undefined' : JSON.stringify(value, null, 2);
});
