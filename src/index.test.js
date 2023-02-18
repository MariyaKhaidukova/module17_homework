import { getMonth } from './index.js';

describe(`test getMonth`, () => {
  it('adds 3 to equal март', () => {
    const result = getMonth(3);
    expect(result).toBe(`март`);
  });
  it('adds 8 to equal август', () => {
    const result = getMonth(5);
    expect(result).toBe(`август`);
  });
  it('adds 11 to equal ноябрь', () => {
    const result = getMonth(11);
    expect(result).toBe(`ноябрь`);
  });
  

});