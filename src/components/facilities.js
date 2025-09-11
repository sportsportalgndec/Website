import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import './facilities.css';
import cricket from "../assets/2.png";
import bg1 from "../assets/Cricket pitches  Sports stadium.jpeg";
import football from "../assets/3.png";
import bg2 from "../assets/Football grnd.JPG";
import billard from "../assets/4.png";
import bg3 from "../assets/Billiard Room.jpeg";
import swimming from "../assets/5.png";
import bg4 from "../assets/swimming pool pic.JPG";
import athlete from "../assets/6.png";
import bg5 from "../assets/Athletic track.JPG";
import hockey from "../assets/7.png";
import bg6 from "../assets/Hockey ground.jpeg";
import lawn from "../assets/8.png";
import bg7 from "../assets/Lawntennis courts.JPG";
import basketball from "../assets/9.png";
import bg8 from "../assets/Basketball court.jpeg";
import volleyball from "../assets/10.png";
import bg9 from "../assets/V.ball courts.jpeg";
import gym from "../assets/11.png";
import bg10 from "../assets/Gymnasium.jpeg";
import  tennis from "../assets/12.png";
import bg11 from "../assets/Lawntennis courts.JPG";
import kabaddi from "../assets/13.png";
import bg12 from "../assets/Football grnd.JPG";
import badminton from "../assets/14.png";
import bg13 from "../assets/Football grnd.JPG";
import chess from "../assets/15.png";
import bg14 from "../assets/chess Intramural.JPG";


const CarouselSlider = () => {
  const cardsContainerRef = useRef(null);
  const appBgContainerRef = useRef(null);
  const cardInfosContainerRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = [
    
    {
      id: 1,
      cardImage: cricket,
      bgImage: bg1,
      name: 'CRICKET',
      overlayColor: '#164dc2',
      location: 'Indian Ocean',
      description: 'Paradise on earth',
    },
    {
      id: 2,
      cardImage: football,
      bgImage: bg2,
      name: 'FOOTBALL',
      overlayColor: '#b94000',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
    {
      id: 3,
      cardImage: billard,
      bgImage: bg3,
      name: 'BILLIARDS ',
      overlayColor: '#c50d00',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
    {
      id: 4,
      cardImage: swimming,
      bgImage: bg4,
      name: 'SWIMMING',
      overlayColor: '#cb0000',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
  {
      id:5,
      cardImage: athlete,
      bgImage: bg5,
      name: 'ATHLETICS',
       overlayColor: '#c00088',
      location: 'Greece',
      description: 'Blue & white bliss',
    },  
  {
      id: 6,
      cardImage: hockey,
      bgImage: bg6,
      name: 'HOCKEY',
       overlayColor: '#00871a',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
  {
      id:7,
      cardImage: lawn,
      bgImage: bg7,
      name: 'LAWN TENNIS',
      overlayColor: '#00728f',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
  {
      id:8,
      cardImage: basketball,
      bgImage:bg8,
      name: 'BASKETBALL',
      overlayColor: '#164dc2',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
  {
      id: 9,
      cardImage: volleyball,
      bgImage: bg9,
      name: 'VOLLEYBALL',
      overlayColor: '#b94000',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
  {
      id: 10,
      cardImage: gym,
      bgImage: bg10,
      name: 'GYMNASTIC',
      overlayColor: '#c50d00',
      location: 'Greece',
      description: 'Blue & white bliss',
    },    
   {
      id: 11,
      cardImage: tennis,
      bgImage: bg11,
      name: 'TABLE TENNIS',
      overlayColor: '#cb0000',
      location: 'Greece',
      description: 'Blue & white bliss',
    },         
   {
      id: 12,
      cardImage: kabaddi,
      bgImage: bg12,
      name: 'KABADDI',
      overlayColor: '#c00088',
      location: 'Greece',
      description: 'Blue & white bliss',
    },       
{
      id: 13,
      cardImage: badminton,
      bgImage: bg13,
      name: 'BADMINTON',
      overlayColor: '#00871a',
      location: 'Greece',
      description: 'Blue & white bliss',
    },        
{
      id: 14,
      cardImage: chess,
      bgImage: bg14,
      name: 'CHESS',
      overlayColor: '#00728f',
      location: 'Greece',
      description: 'Blue & white bliss',
    },       
     
  ];

  const totalCards = cardsData.length;

  const getClassName = (index) => {
    if (index === currentIndex) return 'card current--card';
    if (index === (currentIndex + 1) % totalCards) return 'card next--card';
    if (index === (currentIndex - 1 + totalCards) % totalCards)
      return 'card previous--card';
    return 'card';
  };

  const getInfoClassName = (index) => {
    if (index === currentIndex) return 'info current--info';
    if (index === (currentIndex + 1) % totalCards) return 'info next--info';
    if (index === (currentIndex - 1 + totalCards) % totalCards)
      return 'info previous--info';
    return 'info';
  };

  const getBgClassName = (index) => {
    if (index === currentIndex) return 'app__bg__image current--image';
    if (index === (currentIndex + 1) % totalCards) return 'app__bg__image next--image';
    if (index === (currentIndex - 1 + totalCards) % totalCards)
      return 'app__bg__image previous--image';
    return 'app__bg__image';
  };

  // ✅ wrap swapCards with useCallback
  const swapCards = useCallback((direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'right') {
        return (prevIndex + 1) % totalCards;
      } else {
        return (prevIndex - 1 + totalCards) % totalCards;
      }
    });
  }, [totalCards]);

  useEffect(() => {
    const interval = setInterval(() => {
      swapCards('right');
    }, 3500);

    return () => clearInterval(interval);
  }, [swapCards]); // ✅ now no warning

  useEffect(() => {
    const currentInfoEl = cardInfosContainerRef.current?.querySelector('.current--info');
    if (currentInfoEl) {
      gsap.fromTo(
        currentInfoEl.querySelectorAll('.text'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
      );
    }
  }, [currentIndex]);

  return (
    
<>
    {/* ✅ Heading alag section me rakhi */}
    {/* <section className="facilities-section">
      <h2 className="facilities-heading">Our Facilities</h2>
    </section> */}


    <section className="carousel-section">
       
      <div className="app">
        <div className="cardList">
          <button
            ref={prevBtnRef}
            className="cardList__btn btn btn--left"
            onClick={() => swapCards('left')}
          >
            <div className="icon">
              <svg>
                <use xlinkHref="#arrow-left"></use>
              </svg>
            </div>
          </button>

          <div ref={cardsContainerRef} className="cards__wrapper">
            {cardsData.map((card, index) => (
              <div key={card.id} className={getClassName(index)}>
                <div className="card__image">
                  <img src={card.cardImage} alt={card.name} />
                </div>
              </div>
            ))}
          </div>

          <button
            ref={nextBtnRef}
            className="cardList__btn btn btn--right"
            onClick={() => swapCards('right')}
          >
            <div className="icon">
              <svg>
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </div>
          </button>
        </div>

        <div className="infoList">
          <div ref={cardInfosContainerRef} className="info__wrapper">
            {cardsData.map((card, index) => (
              <div key={card.id} className={getInfoClassName(index)}>
                <h1 className="text name">{card.name}</h1>
                {/* <h4 className="text location">{card.location}</h4> */}
              </div>
            ))}
          </div>
        </div>

        <div ref={appBgContainerRef} className="app__bg">
          {cardsData.map((card, index) => (
            <div key={card.id} className={getBgClassName(index)}>
  <img src={card.bgImage} alt={card.name} />
  <div
    className="bg-overlay"
   style={{
          backgroundColor: card.overlayColor || "#FF914D", // default color if not passed
  position: "absolute",
  inset: 0,
  opacity: 0.4, 
  filter: "brightness(1)", // ✅ correct way
  pointerEvents: "none", // overlay won't block clicks
        }}

  ></div>
</div>

          ))}
        </div>

        <svg className="icons" style={{ display: 'none' }}>
          <symbol id="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <polyline
              points="328 112 184 256 328 400"
              style={{
                fill: 'none',
                stroke: '#fff',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '48px',
              }}
            />
          </symbol>
          <symbol id="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <polyline
              points="184 112 328 256 184 400"
              style={{
                fill: 'none',
                stroke: '#fff',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '48px',
              }}
            />
          </symbol>
        </svg>
      </div>
    </section>
    </>
  );
};

export default CarouselSlider;
