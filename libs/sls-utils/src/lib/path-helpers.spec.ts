import { projectPath } from './path-helpers';

describe('projectPath(context)', () => {
  it('should work', () => {
    expect(projectPath(__dirname)).toEqual('libs/dev/utils/src/lib');
  });
});
