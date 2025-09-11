import React from "react";
import HeroSection from "../components/HeroSection";
import Staff from "../components/Staff";

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
    line1Text: " INSPIRING MINDS",
    line2Text: "NURTURING FUTUREST",
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
    textStyle: { top: "22vh", left: "1%", fontSize: "4.7vw" },
    mobileStyle: { 
      top: "42%", 
      right: "5%", 
      transform: "translateY(-50%)", 
      width: "28vw" 
    },
    mobileTextStyle: { top: "5vh", left: "4%", fontSize: "4.5vw" },
    line1Color: "#ffffff",
    line2Color: "#778fff",
    line1Text: " INSPIRING MINDS",
    line2Text: "NURTURING FUTURES",
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
    textStyle: { top: "22vh", right: "2%", fontSize: "4.7vw" },
    mobileStyle: { 
      top: "45%", 
      left: "4%", 
      transform: "translate(0%, -50%)", 
      width: "30vw" 
    },
    mobileTextStyle: { top: "6vh", right: "5%", fontSize: "4.5vw" },
    line1Color: "#ffffff",
    line2Color: "#ffde59",
    line1Text: " INSPIRING MINDS",
    line2Text: "NURTURING FUTURES",
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
    textStyle: { top: "22vh", left: "1%", fontSize: "4.3vw" },
    mobileStyle: { 
      top: "40%", 
      right: "5%", 
      transform: "translateY(-50%)", 
      width: "28vw" 
    },
    mobileTextStyle: { top: "5.5vh", left: "2%", fontSize: "4.5vw" },
    line1Color: "#ffffff",
    line2Color: "#ffde59",
    line1Text: " INSPIRING MINDS",
    line2Text: "NURTURING FUTURES",
  },
  // Slides 5-8
  {
    bg: sportsBg5,
    player: player5,
    style: { top: "48%", left: "5%", transform: "translate(0%, -50%)", width: "30vw" },
    textStyle: { top: "25vh", right: "1%", fontSize: "4.4vw" },
    mobileStyle: { top: "42%", left: "10%", transform: "translate(0%, -50%)", width: "28vw" },
    mobileTextStyle: { top: "5.5vh", right: "4%", fontSize: "4vw" },
    line1Color: "#ffffff",
    line2Color: "#6181ccff",
    line1Text: " INSPIRING MINDS",
    line2Text: "NURTURING FUTURES",
  },
  {
    bg: sportsBg6,
    player: player6,
    style: { top: "45%", right: "8%", transform: "translateY(-50%)", width: "28vw" },
    textStyle: { top: "22vh", left: "2%", fontSize: "4.7vw" },
    mobileStyle: { top: "42%", right: "5%", transform: "translateY(-50%)", width: "28vw" },
    mobileTextStyle: { top: "5vh", left: "3.5%", fontSize: "4.5vw" },
    line1Color: "#ffffff",
    line2Color: "#6181ccff",
    line1Text: " INSPIRING MINDS",
    line2Text: "NURTURING FUTURES",
  },
  {
    bg: sportsBg7,
    player: player7,
    style: { top: "45%", right: "10%", transform: "translateY(-50%)", width: "28vw" },
    textStyle: { top: "22vh", left: "1%", fontSize: "4.3vw" },
    mobileStyle: { top: "42%", right: "10%", transform: "translateY(-50%)", width: "28vw" },
    mobileTextStyle: { top: "5vh", left: "3%", fontSize: "4.5vw" },
    line1Color: "#ffffff",
    line2Color: "#ff5252",
    line1Text: " INSPIRING MINDS",
    line2Text: "NURTURING FUTURES",
  },
  {
    bg: sportsBg8,
    player: player8,
    style: { top: "50%", left: "8%", transform: "translate(0%, -50%)", width: "30vw" },
    textStyle: { top: "22vh", right: "1%", fontSize: "4.3vw" },
    mobileStyle: { top: "42%", left: "5%", transform: "translate(0%, -50%)", width: "30vw" },
    mobileTextStyle: { top: "5vh", right: "4%", fontSize: "4.3vw" },
    line1Color: "#ffffff",
    line2Color: "#ff5252",
      line1Text: " INSPIRING MINDS",
      line2Text: "NURTURING FUTURES",
    },
];

function StaffPage() {
  return (
    <>
      <HeroSection slides={homeSlides} />
      <Staff/> </> 
  );
}

export default StaffPage;
