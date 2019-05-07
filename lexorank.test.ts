
import {RankUtils} from '../../src/utilities/rank.utilities';
import {expect} from '@loopback/testlab';

describe('Rank', () => {
  let _rank = new RankUtils();
  it('Test success empty prev empty next', async () => {
    let [rank, ok] = _rank.insert('', '');
    expect(rank).equal('U');
    expect(ok).equal(true);
  });
});
