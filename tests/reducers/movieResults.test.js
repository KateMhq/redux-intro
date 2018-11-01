import movieResults from '../../src/reducers/movieResults';

describe('results', ()=>{
  it('get the movies', ()=>{
    const action = {
      type: 'RECEIVE_MOVIES',
      movies: ['batman', 'ironman']
    }
    const state = [];
    const resultCall = movieResults(state, action);
    const expectedResult = ['batman', 'ironman'];

    expect(resultCall).toEqual(expectedResult);
  })
  it('default case', ()=>{
    const action = {
      type: 'XXX',
      movies: ['batman', 'ironman']
    }
     const state = [];
     const resultCallUndefined = movieResults(undefined, action);
     const expectedResult = state;

     expect(resultCallUndefined).toEqual(expectedResult);
  })
})
