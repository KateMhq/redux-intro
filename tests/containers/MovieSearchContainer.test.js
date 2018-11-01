import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../src/containers/MovieSearchContainer';



describe('mapStateToProps', () => {
  it('extracts movieInput from state', () =>{
    const reduxState = {
      movieInput: 'batman'
    };

    const expectedOutput = {
      movieString: 'batman'
    };

    const output = mapStateToProps(reduxState);

    expect(output).toEqual(expectedOutput);
  });
});

describe('map dispatch to props', ()=> {
  it('passing functions via dispatch', ()=> {
    const dispatch = jest.fn();

    const mapDispatchToPropsCall = mapDispatchToProps(dispatch);
    mapDispatchToPropsCall.handleChange('hello');
    expect(dispatch).toHaveBeenCalledWith({"movieString": "hello", "type": "SET_MOVIE_STRING"});
  })
})
