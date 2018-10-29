import React from 'react';
import VotingButtons from './VotingButtons';
import CountriesVisited from './CountriesVisited';
import CountrySelector from './CountrySelector';

class App extends React.Component {
  constructor(props){
    super(props);

    const reduxState = this.props.store.getState();

    this.state = {
      selectedButton: reduxState.selectButton.selectedButton,
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen,
      countriesVisited: reduxState.countriesVisited.countriesVisited
    }
  }

  componentDidMount(){
    const { store } = this.props;
    store.subscribe( () => {
      this.updateFromStore();
    });
  }

  updateFromStore(){
    const { store } = this.props;

    const reduxState = store.getState();

    this.setState({
      selectedButton: reduxState.selectButton.selectedButton,
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen,
      countriesVisited: reduxState.countriesVisited.countriesVisited
    });
  }

  render(){
    return (
      <div>
        <VotingButtons
          selectedButton={this.state.selectedButton}
          dispatch={this.props.store.dispatch}
        />
        <CountrySelector
          selectedCountry={this.state.selectedCountry}
          countriesVisited={this.state.countriesVisited}
          countryListOpen={this.state.countryListOpen}
          dispatch={this.props.store.dispatch}
        />
        <CountriesVisited
          countriesVisited={this.state.countriesVisited}
          dispatch={this.props.store.dispatch}/>
      </div>
    )
  }
}

export default App;
