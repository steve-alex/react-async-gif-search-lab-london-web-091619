import React from 'react';
import GifList from './GifList';


class GifSearch extends React.Component {
    state = {
      searchTerm: "",
      gifs: []
    }
    componentDidMount(){
      this.renderGifs()
    }

    renderGifs = () => {
      return fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm} &api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(searchData => {
          this.setState({
            gifs: searchData
            })
          })
    }

    updateSearch = (event) => {
      this.setState({
        searchTerm: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.renderGifs()
    }

    render(){
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.updateSearch}/>
            <input type="submit"/>
          </form>

          <GifList gifs={this.state.gifs}/>
        </div>
      )
    }
}

export default GifSearch;