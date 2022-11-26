import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('test return object', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load(getBuffer());

  expect(buffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
