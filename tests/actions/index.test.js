import React from 'react';
import { setMovieString , receiveMovies} from '../../src/actions';

describe('actions', () => {
  it('setMovieString returns expected action', () =>{
    const action = setMovieString('hello');

    const expectedAction = {
      type: 'SET_MOVIE_STRING',
      movieString: 'hello'
    };

    expect(action).toEqual(expectedAction);
  });

  it('update movie search', ()=>{
    const action = receiveMovies({Search:'this is the result'})

    const expectedAction ={
      type: 'RECEIVE_MOVIES',
      movies: 'this is the result'
    }

    expect(action).toEqual(expectedAction);
  })
});
