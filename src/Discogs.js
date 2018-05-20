import React, {
  Component
} from "react";
import ReactDOM from 'react-dom';
import RaisedButton from "./Button";
// import RaisedButton from 'material-ui/RaisedButton';
// const cardContainer = document.querySelector('.discos');
class Discogs extends Component {
  render() {
    return ( <div>
      <h2> DISCOGRAPHY </h2> 
      <p> See their dicography below. </p> 
    <div> { /* <RaisedButton  /> */ } {
        /* <RaisedButton label="Primary" primary={true}  />
            <RaisedButton label="Secondary" secondary={true}  />
            <RaisedButton label="Disabled" disabled={true}  /> */
      } <br / >
      <br / > { /* <RaisedButtonExampleSimple/> */ } </div> <Card / ></div>
    );
  }
}
class CardFront extends React.Component {
  constructor() {
    super()

    this.state = {
      discos: [{
          "title": "Bloodflowers",
          "date": "2000",
          src: "https://upload.wikimedia.org/wikipedia/en/6/68/The_Cure_-_Bloodflowers.jpg"
        },
        {
          "title": "Kiss Me, Kiss Me, Kiss Me",
          "date": "1987",
          src: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F81a965422d7b7c42c269705cdcf35552.1000x1000x1.jpg"
        },
        {
          "title": "The Top",
          "date": "1984",
          src: "https://images-na.ssl-images-amazon.com/images/I/A1kpUHdmt1L._SY355_.jpg"
        },
        {
          "title": "Pornography",
          "date": "1982",
          src: "https://e.snmc.io/lk/f/l/90f69be975966ff064ee823484e90f6f/3014863.jpg"
        },
        {
          "title": "Faith",
          "date": "1981",
          src: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F0d679bd600c616d79f176099b1928e65.1000x1000x1.jpg"
        },
        {
          "title": "Seventeen Seconds",
          "date": "1980",
          src: "http://cdn.albumoftheyear.org/album/seventeen-seconds.jpg"
        }
      ],
      itemsToShow: 1,
      expanded: false
    }
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.itemsToShow === 1 ? (
      this.setState({
        itemsToShow: this.state.discos.length,
        expanded: true
      })
    ) : (
      this.setState({
        itemsToShow: 1,
        expanded: false
      })
    )
  }

  render() {
    return ( <div className = 'card-side side-front'>
      <div className = 'container-fluid' >
      <div className = 'row' >
      <div className = 'col-xs-12 side-front-content' >
      <p > See their dicography below. </p> </div> </div> 
      <div className = "row" >
      <ul > {
        this.state.discos.slice(0, this.state.itemsToShow).map((disco, i) =>
          <li key = { i} > {disco.title} - { disco.date} 
          <div > < img src = { disco.src}/></div > < /li>
        )} </ul> 
        </div> 
        <p><button className = "btn btn-primary" onClick = {this.showMore} > 
        {this.state.expanded ? ( <span > Show less < /span>
        ) : ( < span > Show more < /span>
        )
      } </button> </p> </div> </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return ( 
    <div className = 'card-container' >
      <div className = 'card-body' >
      <CardFront / >
      </div> </div>
    )
  }
}
{/* //ReactDOM.render(<Card />, cardContainer); */}
export default Discogs;