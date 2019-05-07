import {RankUtils} from '../../src/utilities/rank.utilities';
import {expect} from '@loopback/testlab';

describe('Rank', () => {
  let _rank = new RankUtils();
  it('Test success empty prev empty next', async () => {
    let [rank, ok] = _rank.insert('', '');
    expect(rank).equal('U');
    expect(ok).equal(true);
  });

  it('Test success empty prev', async () => {
    let [rank, ok] = _rank.insert('', '2');
    expect(rank).equal('1');
    expect(ok).equal(true);
  });

  it('Test success empty next', async () => {
    let [rank, ok] = _rank.insert('x', '');
    expect(rank).equal('y');
    expect(ok).equal(true);
  });
});
