import { modifier } from 'ember-modifier';

export default modifier(function myOn(element, positional) {
  const [eventType, callback] = positional;

  element.addEventListener(eventType, callback);

  return () => element.removeEventListener(eventType, callback);
});
