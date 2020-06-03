import React from 'react';
import axios from 'axios';
import Card from "../Sections/Card";

class TimeLinePage extends React.Component {
    state = {
        isLoading: true,
        card: []
    };
    getCards = async () => {
        const {
          data: {
            data:{ card }
          }
        } = await axios.get('/api/users/video');
        //console.log(movies);
        this.setState({ card, isLoadig: false})
      }
    
      componentDidMount(){
        this.getCards();
      }
    
    render() {
        const { isLoading, cards } = this.state;
        return (
            <section className="container">
              {isLoading ? (
              <div className="loader">
                <span className="loader__text">Loading...</span>
              </div>)
               : (  
               
               <div className="cards">
                 { cards.map(card =>
                 <Card 
                    key = {card.id}
                    id = {card.id} 
                    userName = {card.userName} 
                    url = {card.URL} 
                    likecount = {card.likeCount}
                    hashtags = {card.hashtags}
                />
              )}
               </div>
          )}
               
            </section>);
        }
}

export default TimeLinePage

