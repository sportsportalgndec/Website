import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import HeroSection from "../components/HeroSection";
import "./Facilities.css"
import cricket from "../assets/2.png";
import sportsbg1 from "../assets/Athletic track.JPG";
import football from "../assets/3.png";
import sportsbg2 from "../assets/Football grnd.JPG";
import billard from "../assets/4.png";
import sportsbg3 from "../assets/Hockey ground.jpeg";
import swimming from "../assets/5.png";
import sportsbg4 from "../assets/Lawntennis courts.JPG";
import athlete from "../assets/6.png";
import sportsbg5 from "../assets/B.ball courts.jpeg";
import hockey from "../assets/7.png";
import sportsbg6 from "../assets/V.ball courts.jpeg";
import lawn from "../assets/8.png";
import sportsbg7 from "../assets/Cricket pitches  Sports stadium.jpeg";
import basketball from "../assets/9.png";
import sportsbg8 from "../assets/Gymnasium.jpeg";
import volleyball from "../assets/10.png";
import sportsbg9 from "../assets/swimming pool pic.JPG";
import gym from "../assets/11.png";
import sportsbg10 from "../assets/Lawntennis courts.JPG";
import  tennis from "../assets/12.png";
import sportsbg11 from "../assets/Lawntennis courts.JPG";
import kabaddi from "../assets/13.png";
import sportsbg12 from "../assets/Billiard Room.jpeg";
import badminton from "../assets/14.png";
import sportsbg13 from "../assets/10m Shooting range 2.jpeg";
import chess from "../assets/15.png";
import sportsbg14 from "../assets/chess Intramural.JPG";

import player1 from "../assets/hero/Footballplayer.png";
import sportsBg1 from "../assets/hero/6.png";
import player2 from "../assets/hero/Badmintonplayer.png";
import sportsBg2 from "../assets/hero/8.png";
import sportsBg3 from "../assets/hero/10.png";
import player3 from "../assets/hero/Athleticplayer.png"
import sportsBg4 from "../assets/hero/12.png";
import player4 from "../assets/hero/Hockeyplayer.png"
import sportsBg5 from "../assets/hero/14.png";
import player5 from "../assets/hero/Volleyballplayer.png";
import sportsBg6 from "../assets/hero/16.png";
import player6 from "../assets/hero/Basketballplayer.png"
import sportsBg7 from "../assets/hero/18.png";
import player7 from "../assets/hero/Handballplayer.png";
import sportsBg8 from "../assets/hero/20.png"
import player8 from "../assets/hero/Cricketplayer.png";

const homeSlides = [
  {
    bg: sportsBg1,
    player: player1,
    style: { 
      top: "48%", 
      left: "5%", 
      transform: "translate(0%, -50%)", 
      width: "30vw"   // scaled width
    },
    textStyle: { top: "22vh", right: "4%" , fontSize: "4.5vw"}, // font scales
    mobileStyle: { 
      top: "40%", 
      left: "8%", 
      transform: "translate(0%, -50%)", 
      width: "25vw"  // scaled for mobile
    },
    mobileTextStyle: { top: "6vh", right: "4.5%", fontSize: "4.5vw" }, // scales on mobile
    line1Color: "#ffffff",
    line2Color: "#778fff",
    line1Text: "FIELDS OF PASSION",
    line2Text: "GROUNDS OF GLORY",
  },
  {
    bg: sportsBg2,
    player: player2,
    style: { 
      top: "45%", 
      right: "8%", 
      transform: "translateY(-50%)", 
      width: "28vw"
    },
    textStyle: { top: "22vh", left: "2%", fontSize: "4.8vw" },
    mobileStyle: { 
      top: "42%", 
      right: "5%", 
      transform: "translateY(-50%)", 
      width: "28vw" 
    },
    mobileTextStyle: { top: "5vh", left: "4%", fontSize: "4.5vw" },
    line1Color: "#ffffff",
    line2Color: "#778fff",
    line1Text: "FIELDS OF PASSION",
    line2Text: "GROUNDS OF GLORY",
  },
  {
    bg: sportsBg3,
    player: player3,
    style: { 
      top: "48%", 
      left: "0.6%", 
      transform: "translate(0%, -50%)", 
      width: "32vw"
    },
    textStyle: { top: "22vh", right: "4%", fontSize: "4.8vw" },
    mobileStyle: { 
      top: "45%", 
      left: "4%", 
      transform: "translate(0%, -50%)", 
      width: "30vw" 
    },
    mobileTextStyle: { top: "6vh", right: "5%", fontSize: "4.5vw" },
    line1Color: "#ffffff",
    line2Color: "#ffde59",
    line1Text: "FIELDS OF PASSION",
    line2Text: "GROUNDS OF GLORY",
  },
  {
    bg: sportsBg4,
    player: player4,
    style: { 
      top: "49%", 
      right: "4%", 
      transform: "translateY(-50%)", 
      width: "32vw"
    },
    textStyle: { top: "22vh", left: "2%", fontSize: "4.4vw" },
    mobileStyle: { 
      top: "40%", 
      right: "5%", 
      transform: "translateY(-50%)", 
      width: "28vw" 
    },
    mobileTextStyle: { top: "5.5vh", left: "2%", fontSize: "4.5vw" },
    line1Color: "#ffffff",
    line2Color: "#ffde59",
    line1Text: "FIELDS OF PASSION",
    line2Text: "GROUNDS OF GLORY",
  },
  // Slides 5-8
  {
    bg: sportsBg5,
    player: player5,
    style: { top: "48%", left: "5%", transform: "translate(0%, -50%)", width: "30vw" },
    textStyle: { top: "22vh", right: "2%", fontSize: "4.5vw" },
    mobileStyle: { top: "42%", left: "10%", transform: "translate(0%, -50%)", width: "28vw" },
    mobileTextStyle: { top: "5.5vh", right: "4%", fontSize: "4vw" },
    line1Color: "#ffffff",
    line2Color: "#6181ccff",
    line1Text: "FIELDS OF PASSION",
    line2Text: "GROUNDS OF GLORY",
  },
  {
    bg: sportsBg6,
    player: player6,
    style: { top: "45%", right: "8%", transform: "translateY(-50%)", width: "28vw" },
    textStyle: { top: "22vh", left: "2%", fontSize: "4.8vw" },
    mobileStyle: { top: "42%", right: "5%", transform: "translateY(-50%)", width: "28vw" },
    mobileTextStyle: { top: "5vh", left: "3.5%", fontSize: "4.5vw" },
    line1Color: "#ffffff",
    line2Color: "#6181ccff",
    line1Text: "FIELDS OF PASSION",
    line2Text: "GROUNDS OF GLORY",
  },
  {
    bg: sportsBg7,
    player: player7,
    style: { top: "45%", right: "10%", transform: "translateY(-50%)", width: "28vw" },
    textStyle: { top: "22vh", left: "1%", fontSize: "4.5vw" },
    mobileStyle: { top: "42%", right: "10%", transform: "translateY(-50%)", width: "28vw" },
    mobileTextStyle: { top: "5vh", left: "3%", fontSize: "4.5vw" },
    line1Color: "#ffffff",
    line2Color: "#ff5252",
    line1Text: "FIELDS OF PASSION",
    line2Text: "GROUNDS OF GLORY",
  },
  {
    bg: sportsBg8,
    player: player8,
    style: { top: "50%", left: "8%", transform: "translate(0%, -50%)", width: "30vw" },
    textStyle: { top: "22vh", right: "3%", fontSize: "4.2vw" },
    mobileStyle: { top: "42%", left: "5%", transform: "translate(0%, -50%)", width: "30vw" },
    mobileTextStyle: { top: "5vh", right: "4%", fontSize: "4.3vw" },
    line1Color: "#ffffff",
    line2Color: "#ff5252",
      line1Text: "FIELDS OF PASSION",
      line2Text: "GROUNDS OF GLORY",
    },
];

 const facilityGrid = [
  { image: sportsbg1,
  title: "Athletic Track",
 
  description: `The institute’s open-air stadium features a standard 400-meter, 8-lane grassy athletic track, designed to host training sessions, practice, and high-level competitions. The facility is equipped with a pavilion and grandstand seating for up to 1,500 spectators, offering an excellent viewing experience for athletic meets.
The stadium regularly hosts the University Inter-College Athletic Meet as well as the Annual College Athletic Meet, serving as a hub for budding athletes to showcase their skills. With floodlights for night events and modern amenities including retiring rooms, washrooms, changing facilities, and a media balcony, the venue ensures comfort for both athletes and spectators.`,
  id:"athletictrack",
},
 {
  image: sportsbg2,
  title: "Football Ground",
  description: `The institute features a standard-sized grassy football ground measuring 110m × 70m, providing an excellent playing surface for training, practice sessions, and competitive matches. The natural turf ensures a safe and comfortable experience for players, while the spacious dimensions meet the requirements for inter-college tournaments and friendly fixtures.
The facility is equipped with goalposts, boundary markings, and ample open space around the field to ensure smooth conduct of games. The ground is regularly used for college intramurals, inter-college football championships, and recreational play, making it a central hub for football enthusiasts.
With its well-maintained grass surface and open-air setting, the football ground also serves as a venue for fitness drills, physical education programs, and community sporting activities.`,
  id: "footballground",
},
 {
  image: sportsbg3,
  title: "Hockey Field",
  description: `The institute is equipped with a standard grassy hockey field measuring 91.40m × 55m, designed as per official specifications. The natural turf offers excellent grip and ball control, ensuring players experience the traditional style of the game on grass.
The ground is used for regular training sessions, skill development, and competitive fixtures, including college intramurals and inter-college tournaments. Its well-kept surface and spacious layout create the right environment for both beginners and advanced players to enhance their performance.
Beyond tournaments, the facility also supports recreational play, physical education classes, and fitness drills, making it an integral part of the institute’s sporting infrastructure and hockey culture.`,
  id: "hockeyfield",
},
 {
  image: sportsbg4,
  title: "Lawn Tennis Courts",
  description: `The institute has three standard-sized lawn tennis courts, each measuring 33m × 17m, with a hard acrylic surface court. This type of surface provides a consistent bounce, medium-paced play, and requires minimal maintenance, making it ideal for both training and competitive matches.
The courts are used regularly for practice sessions, coaching, and inter-college tournaments, encouraging participation from beginners to advanced players. Designed to accommodate both singles and doubles formats, the facility supports a wide range of competitive play.
With proper markings, durable surface quality, and open-air surroundings, the tennis courts serve as a central venue for recreational play, fitness drills, and competitive events, contributing significantly to the sporting culture of the campus.`,
  id: "lawntenniscourts",
},
  {
  image: sportsbg5,
  title: "Basketball Courts",
  description: `The institute offers two full-sized cemented basketball courts, each measuring 28m × 15m, built as per standard specifications. One of the courts is equipped with floodlights, enabling evening practice sessions and matches, while the other serves as a regular daytime facility.
The durable cemented surface ensures excellent grip and consistent play, making the courts suitable for training, recreational matches, and inter-college competitions. With clear boundary markings, sturdy rings, and spacious surroundings, the facility supports smooth conduct of both practice and tournament-level games.
These courts are regularly used for college intramurals, inter-college basketball championships, and fitness drills, providing a vibrant atmosphere for basketball enthusiasts and contributing actively to the institute’s sporting culture.`,
  id: "basketballcourts",
},
{
  image: sportsbg6,
  title: "Volleyball Court",
  description: `The institute has three standard-sized outdoor volleyball courts, each measuring 18m × 9m. Out of these, two courts are equipped with floodlights, allowing evening practice and competitions, while the third court serves as a regular daytime facility.
The courts are used extensively by both boys and girls for intramural and extramural activities, including practice sessions, friendly matches, and inter-college tournaments. With durable outdoor surfaces, proper boundary markings, and lighting arrangements, the facility provides an excellent environment for both training and competitive play.
These courts play a vital role in fostering a strong sporting culture on campus and remain a hub of activity throughout the year.`,
  id: "volleyballcourt",
},

{
  image: sportsbg7,
  title: "Cricket Pitches",
  description: `The institute offers excellent cricket infrastructure for both matches and training. At the center of the Sports College Stadium, a clay pitch (20.12m × 3.05m) with a 50-yard boundary hosts intramural, extramural, and inter-college tournaments. The stadium is an open-air grassy turf arena with 1,500 seating capacity, a pavilion with stair access, and floodlights for evening play.
For practice, there are two hard pitches with nets, providing a professional setup for batting, bowling, and skill development. Supporting facilities include players’ retiring rooms, washrooms, changing areas, and a media balcony, while the adjoining pavilion building houses offices, guest rooms, indoor games spaces, and a gymnasium.`,
  id: "cricketpitches",
},

 {
  image: sportsbg8,
  title: "Multi Exercise Hall",
  description: `The Sports Complex houses a spacious and modern Gymnasium/Multi-Exercise Hall spread across two levels. Hall 1, located on the Ground Floor with an expansive area of 4600 sq.ft, and Hall 2, situated on the First Floor with 2500 sq.ft, together provide a state-of-the-art fitness environment designed to meet the needs of athletes, fitness enthusiasts, and beginners alike.
The facility is equipped with comprehensive strength and conditioning apparatus, including a smith machine, hack squat, cable cross, Olympic lifting platform, wall bars, three multi-stations, and seven specialized single stations such as bicep curl, chest press, shoulder press, peck deck, seated rowing, leg press, and lats pull down. In addition, a dedicated free weight section, versatile benches, and a spacious stretching area are provided for complete workouts and essential cool-down sessions.
This modern fitness center ensures a balanced mix of cardio, strength, flexibility, and recovery training, making it a hub for holistic health and performance enhancement.`,
  id: "multiexercisehall",
},

   {
  image: sportsbg9,
  title: "Swimming Pool",
  description: `Our campus swimming pool is an environmentally sustainable facility designed to serve athletic training, competitive events, and leisure activities. The pool measures 25m x 12m with a uniform depth ranging from 4 ft at the shallow end to 6 ft at the deeper end, accommodating 50–60 swimmers at a time. While there is no diving facility, it provides ample space for lap swimming and water-based training.
The water is kept fresh and free from chlorination, ensuring it is gentle on the skin and eyes. Instead, the pool is disinfected and maintained using alum and bleaching powder, with a thorough cleaning carried out every week. Once used, the water is recycled for irrigation purposes, supplying the hockey ground, football ground, and surrounding lawns, thus supporting the campus’s eco-friendly practices.
The facility also includes accessible washrooms, changing rooms, and storage areas, making it convenient and comfortable for all users.`,
  id: "swimmingpool",
},

  {
  image: sportsbg10,
  title: "Table Tennis Hall",
  description: `The institute provides a well-maintained Table Tennis facility consisting of 3 professional-grade tables, ensuring that multiple games can be played simultaneously. The facility has been designed to cater to both recreational and competitive needs, offering students ample opportunities to practice, refine their skills, and engage in friendly matches or tournaments.
With sufficient playing space around each table, the setup ensures smooth movement, comfort, and safety for players during intense rallies. The tables are equipped with high-quality nets, and provisions are made for proper lighting, ventilation, and seating for spectators. This facility not only promotes physical fitness but also helps students develop agility, quick reflexes, concentration, and strategic thinking.
By encouraging regular practice sessions, intra-college competitions, and recreational matches, the institute’s Table Tennis facility fosters a sporting culture, teamwork, and enthusiasm among students.`,
  id: "tabletennishall",
},

    {
  image: sportsbg11,
  title: "Kabaddi Ground",
  description: `The college has a dedicated Kabaddi ground measuring 13m × 10m, built in accordance with standard dimensions suitable for competitive play. The ground is located within the Sports College Stadium, providing players with a professional environment surrounded by athletic facilities. It is a well-maintained open-air ground designed to cater to both North/South Kabaddi formats.
This facility serves as a central training space where the college boys’ Kabaddi team regularly conducts their technical and tactical practice sessions. The layout of the ground ensures ample space for drills, strategies, and competitive matches, making it ideal for skill development and physical conditioning. The strategic positioning of the Kabaddi ground within the stadium allows for easy access to additional sports resources, further enhancing the overall training experience.`,
  id: "kabaddiground",
}, 

{
  image: sportsbg12,
  title: "Billiard Room",
  description: `The college has a dedicated Billiards Room equipped with a standard-size billiards table that meets professional specifications. The room provides students with a comfortable and focused environment to practice cue sports. It is well-maintained with proper lighting arrangements, smooth flooring, and adequate space around the table to ensure ease of play. 
The facility is regularly used by students for recreational play as well as skill development, helping them enhance their concentration, precision, and strategic thinking. The Billiards Room adds to the variety of indoor sports infrastructure available in the institution, promoting both leisure and competitive spirit among students.`,
  id: "billiardroom",
},

{
    image: sportsbg13,
    title: "Shooting Range",
    description: `The institution is equipped with a state-of-the-art 10m Shooting Range designed to meet standard training and practice requirements. The range is structured with well-marked shooting lanes, target systems, and proper safety measures to ensure a professional and secure environment for athletes. Adequate lighting, ventilation, and soundproofing enhance the comfort and focus of the shooters. The facility supports both air rifle and air pistol events, allowing students to train in accordance with national and international standards. Regular practice sessions at the range help students in developing accuracy, discipline, concentration, and mental endurance, while also preparing them for inter-college and competitive championships.`,
     id: "badmintoncourts" ,
},
{
    image: sportsbg14,
    title: "Chess",
    description: `The college provides a dedicated Chess facility that encourages the development of strategic thinking, concentration, and decision-making skills among students. Equipped with standard tournament-size chess boards and pieces, the room offers a calm and focused environment for practice and competitions. The facility is designed to host inter-class, inter-college, and competitive chess tournaments, giving players the opportunity to refine their skills in a professional setup. With proper seating arrangements and a peaceful atmosphere, the chess facility serves as an ideal space for students to engage in intellectual growth, patience, and sportsmanship through the game of chess.`,
     id: "chess" ,
},


 



 

 



    
  
];

const CarouselSlider = () => {
  const cardsContainerRef = useRef(null);
  const cardInfosContainerRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);



  const cardsData = [
    
    {
      id: 1,
      cardImage: cricket,
      url:"#cricketpitches",
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'CRICKET',
      overlayColor: '#164dc2',
      location: 'Indian Ocean',
      description: 'Paradise on earth',
    },
    {
      id: 2,
      cardImage: football,
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'FOOTBALL',
      overlayColor: '#b94000',
      url:"#footballground",
      location: 'Greece',
      description: 'Blue & white bliss',
    },
    {
      id: 3,
      cardImage: billard,
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'BILLIARDS ',
      url:"#billiardroom",
      overlayColor: '#c50d00',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
    {
      id: 4,
      cardImage: swimming,
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'SWIMMING',
      url:"#swimmingpool",
       overlayColor: '#cb0000',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
  {
      id:5,
      cardImage: athlete,
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'ATHLETICS',
       overlayColor: '#c00088',
       url:"#athletictrack",
      location: 'Greece',
      description: 'Blue & white bliss',
    },  
  {
      id: 6,
      cardImage: hockey,
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'HOCKEY',
      url:"#hockeyfield",
       overlayColor: '#00871a',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
  {
      id:7,
      cardImage: lawn,
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'LAWN TENNIS',
      url:"lawntenniscourts",
      overlayColor: '#00728f',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
  {
      id:8,
      cardImage: basketball,
      url:"#basketballcourts",
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'BASKETBALL',
      overlayColor: '#164dc2',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
  {
      id: 9,
      cardImage: volleyball,
      url:"#volleyballcourt",
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'VOLLEYBALL',
      overlayColor: '#b94000',
      location: 'Greece',
      description: 'Blue & white bliss',
    },
  {
      id: 10,
      cardImage: gym,
      url:"#multiexercisehall",
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'GYMNASTIC',
      overlayColor: '#c50d00',
      location: 'Greece',
      description: 'Blue & white bliss',
    },    
   {
      id: 11,
      cardImage: tennis,
      url:"#tabletennishall",
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'TABLE TENNIS',
      overlayColor: '#cb0000',
      location: 'Greece',
      description: 'Blue & white bliss',
    },         
   {
      id: 12,
      cardImage: kabaddi,
      url:"#kabaddiground",
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'KABADDI',
      overlayColor: '#c00088',
      location: 'Greece',
      description: 'Blue & white bliss',
    },       
{
      id: 13,
      cardImage: badminton,
      url:"#badmintoncourts",
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
      name: 'BADMINTON',
      overlayColor: '#00871a',
      location: 'Greece',
      description: 'Blue & white bliss',
    },        
{
      id: 14,
      cardImage: chess,
     
      bgImage: 'https://sports.gndec.ac.in/sites/default/files/1.jpg',
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
    return 'info';
  };

  const swapCards = useCallback((direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'right') return (prevIndex + 1) % totalCards;
      else return (prevIndex - 1 + totalCards) % totalCards;
    });
  }, [totalCards]);

  useEffect(() => {
    const interval = setInterval(() => swapCards('right'), 3500);
    return () => clearInterval(interval);
  }, [swapCards]);

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
    <section className="carousel-section">
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
    <div
  onClick={() => {
    if (card.url) {
      const el = document.getElementById(card.url.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }}
  className={getClassName(index)}
  style={{ cursor: "pointer" }}
>
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

      <div className="infoList1">
        <div ref={cardInfosContainerRef} className="info__wrapper1">
  {cardsData.map((card, index) => (
    <div
      key={card.id}
      className={getInfoClassName(index)}
      style={{ color: card.overlayColor }} // dynamic text color
    >
      <h1 className="text name">{card.name}</h1>
      {/* <h4 className="text location">{card.location}</h4> */}
    </div>
  ))}
</div>
      </div>

      {/* SVG icons */}
      <svg className="icons" style={{ display: 'none' }}>
        <symbol id="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <polyline
            points="328 112 184 256 328 400"
            style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px' }}
          />
        </symbol>
        <symbol id="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <polyline
            points="184 112 328 256 184 400"
            style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px' }}
          />
        </symbol>
      </svg>
    </section>
  );
};

function Facilities() {
  return (
    <>
      <HeroSection slides={homeSlides} />
      

     {/* Grid Section */}
     <div className="facilities-container">
       <p className="facilities-subtitle">
        Intra Mural Activities foster teamwork, leadership, and healthy competition,
        giving students a platform to showcase their talent and build lifelong memories on campus
      </p>
  {facilityGrid.map((item, index) => {
    const isEven = index % 2 === 0;
    return (
      <div
        key={index}
        id={item.id} 
        className={`facility-row ${!isEven ? "reverse" : ""}`}
      >
        <div className="facility-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="facility-text">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </div>
    );
  })}
</div>


       {/* ✅ Heading alag section me rakhi */}
       <CarouselSlider/>
    
    </>
  );
}

export default Facilities;
