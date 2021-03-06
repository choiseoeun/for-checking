import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Post.css";

function TimeLinePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState("");

  useEffect(() => {
    async function fetchData() {
      await axios.get('/api/booktrailer/video').then(res => {
        setIsLoading(false);
        setCards(res.data.data.map(
          (data, index) => (

            <article className="Post" key={index} style={{
              marginBottom: "5%"
            }}>
              <header>
                <div className="Post-user">
                  <div className="Post-user-name">
                    <span>{data.userName}</span>
                  </div>
                  <div className="Post-detail">
                    <button className="detail-button">
                      상세
                   </button>
                  </div>
                </div>
              </header>
              <div className="Post-image">
                <div className="Post-image-bg">
                  <p align="middle">
                    <iframe
                      width="90%" height="100%" src={data.URL.replace("youtu.be/", "www.youtube.com/embed/")}
                      frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </p>
                </div>
              </div>
              <div className="Post-caption">
                <div className="Like-about">
                  <div className="Like-button">
                    <button>
                      좋아요
                  </button>
                  </div>
                  <div className="Like-count">
                    <p>{data.likeCount}명이좋아합니다.</p>
                  </div>
                  <div className="share-button">
                    <button>
                      공유
                </button>
                  </div>
                </div>
                <div className="hashtags">
                  #해쉬태그 #감성 #고양이...{data.hashtags.map((hashtag, index) => (
                    <li key={index} className="hashtags_hashtag">{hashtag}</li>
                  ))}
                </div>
              </div>

            </article>
          )

        ));
        console.log(cards);
      }).catch(e => {
        console.log(e);
      });
    }

    fetchData();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>)
        : (

          <div className="cards">
            {cards}
          </div>
        )}

    </section>);

}

export default TimeLinePage
