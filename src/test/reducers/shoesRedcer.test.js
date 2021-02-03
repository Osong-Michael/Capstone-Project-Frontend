import shoesReducer from '../../reducers/shoesReducer';

describe('Shoes reducer', () => {
  it('should return the initial state', () => {
    expect(shoesReducer(undefined, {})).toEqual(
      {
        shoes: [],
        shoe: {},
        loading: false,
        error: null,
      },
    );
  });

  it('should handle FETCHING_SHOES', () => {
    expect(
      shoesReducer([], {
        type: 'FETCHING_SHOES',
      }),
    ).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should handle FETCHED_SHOES', () => {
    expect(
      shoesReducer([], {
        type: 'FETCHED_SHOES',
      }),
    ).toEqual(
      {
        loading: false,
      },
    );
  });

  it('should handle FETCHED_ONE_SHOE', () => {
    expect(
      shoesReducer([], {
        type: 'FETCHED_ONE_SHOE',
      }),
    ).toEqual(
      {
        loading: false,
      },
    );
  });
});
