import React from 'react';

class GifList extends React.Component {

    renderGIFS(){
      if (!!this.props.gifs.data){
        return this.props.gifs.data.map(gif => {
          return (
            <li>
              <img
                src={gif.images.original.url}
                key={gif.images.original.url}/>
            </li>
          )
        })
      }
        // return this.props.gifs.data.map(gif => {
        //     return <li>gif</li>
        // })
    }

    render(){
        return(
            <div>
                <h1>List of giphys</h1>
                <ul>
                    {this.renderGIFS()}
                </ul>
            </div>
        )
    }
}

export default GifList;