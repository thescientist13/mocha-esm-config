import { add } from './add.js';
import assert from 'assert';

it('should add two numbers from an es module', () => {
  assert.equal(add(3, 5), 8);
});