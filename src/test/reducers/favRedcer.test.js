/* eslint-disable camelcase */
import favouriteReducer from '../../reducers/favouritesReducer';

describe('Favourite reducer', () => {
  it('should handle FETCHING_SHOES', () => {
    expect(
      favouriteReducer([], {
        type: 'FETCHING_SHOES',
      }),
    ).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should handle FETCHED_FAVOURITES', () => {
    expect(
      favouriteReducer([], {
        type: 'FETCHED_FAVOURITES',
      }),
    ).toEqual(
      {
        loading: false,
      },
    );
  });
});
