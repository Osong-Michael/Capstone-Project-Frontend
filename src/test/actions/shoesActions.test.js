import {
  fetchShoesPending,
  fetchShoesSuccess,
  fetchShoesError,
  fetchOneShoeSuccess,
}
  from '../../actions';

describe('Shoe Actions', () => {
  it('should create an action to start fetching Shoes', () => {
    const expectedAction = {
      type: 'FETCHING_SHOES',
    };
    expect(fetchShoesPending()).toEqual(expectedAction);
  });

  it('should create an action for success fetching Shoes', () => {
    const shoes = [
      {
        name: 'Air Jordan 3',
        image: 'https://res.cloudinary.com/dus4yypr8/image/upload/v1606814866/my-shoes/air-3_hau9az.png',
        price: '$200',
        description: "The Air Jordan 3 is Michael Jordan's third signature basketball shoe and remains as one of the most sought after sneakers to-date. They were the first pair of Jordan sneakers that legendary designer Tinker Hatfield created, and they made their official debut in the year 1988",
      },
    ];
    const expectedAction = {
      type: 'FETCHED_SHOES',
      shoes,
    };
    expect(fetchShoesSuccess(shoes)).toEqual(expectedAction);
  });

  it('should create an action if fetching Shoes fails', () => {
    const error = 'Failed to load Data...';
    const expectedAction = {
      type: 'FETCHING_SHOES_FAILED',
      error,
    };
    expect(fetchShoesError(error)).toEqual(expectedAction);
  });

  it('should create an action for success fetching One Shoe', () => {
    const shoe = {};
    const expectedAction = {
      type: 'FETCHED_ONE_SHOE',
      shoe,
    };
    expect(fetchOneShoeSuccess(shoe)).toEqual(expectedAction);
  });
});
