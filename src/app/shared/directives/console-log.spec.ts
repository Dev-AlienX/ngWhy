import { ConsoleLog } from './console-log';

describe('ConsoleLog', () => {
  it('should create an instance', () => {
    const directive = new ConsoleLog();
    expect(directive).toBeTruthy();
  });
});
