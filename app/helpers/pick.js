import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

export default helper(function pick([path, fn]) {
  return (event) => fn(get(event, path));
});
