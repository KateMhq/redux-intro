import {mapStateToProps} from '../../src/containers/MovieResultsContainer';

describe('Movie results container mapStateToProps', ()=>{
  it('pass state as props', ()=>{
    const state={
      movieResults:'results'
    }

    const mapStateToPropsCall = mapStateToProps(state)

    const expectedResult = {
      movies: 'results'
    }

    expect(mapStateToPropsCall).toEqual(expectedResult)
  })
})
