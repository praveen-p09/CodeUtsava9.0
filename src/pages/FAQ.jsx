import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import bgVideo from "../assets/background/carnival_bg.mp4"; 
import FAQimg from "../assets/images/FAQimg.png";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const colors = [
  "bg-red-300",
  "bg-green-300",
  "bg-blue-300",
  "bg-yellow-300",
  "bg-pink-300",
  "bg-purple-300",
  "bg-orange-300",
  "bg-teal-300",
  "bg-indigo-300",
  "bg-cyan-300",
];

  const faqs = [
    {
      q: "HOW DO I REGISTER FOR THE HACKATHON?",
      a: "Visit our registration page and fill out the required details. You’ll receive a confirmation email once you’re registered.",
    },
    {
      q: "WHAT IS THE PARTICIPATION FEE?",
      a: (
        <>
          Participation is <b>completely free</b>! There are no charges at any
          stage of the hackathon.
        </>
      ),
    },
    {
      q: "WHAT IF I DON’T HAVE A TEAM OR IDEA?",
      a: "No worries! You can register solo and find teammates during the team formation phase, or get inspired by our problem statements.",
    },
    {
      q: "WHO CAN PARTICIPATE?",
      a: "Anyone who is a student (undergraduate or postgraduate) can participate, regardless of experience level.",
    },
    {
      q: "WHEN AND HOW WILL THE TEAMS BE SHORTLISTED?",
      a: "Teams will be shortlisted based on their idea submissions. Check the timeline on our website for announcement dates.",
    },
    {
      q: "WHAT IS THE IDEAL TEAM SIZE?",
      a: "Teams should consist of 2-4 Members.",
    },
    {
      q: "WHY SHOULD I PARTICIPATE IN CODEUTSAVA?",
      a: "Winners get cash prizes, and all participants will have excellent networking opportunities, learn new skills, and get cool swag ;)",
    },
    {
      q: "WHAT OTHER PERKS ARE PROVIDED?",
      a: "Accommodations and meals will be provided, and travel expenses up to Rs.1500 per individual will be reimbursed for all the selected teams participating in CodeUtsava 9.0!",
    },
    {
      q: "HOW WILL THE TEAMS BE JUDGED?",
      a: (
        <>
          Teams will be judged on viability, technical complexity, presentation
          skills, guidelines, and most importantly, creativity.{" "}
          <a
            href="./Judgement Criteria.pdf"
            className="text-blue-500 underline"
            download="Judgement Criteria"
          >
            Judgment Criteria
          </a>
        </>
      ),
    },
    {
      q: "WHAT IS THE CODE OF CONDUCT?",
      a: "To ensure a positive experience for all participants, we follow the SIH Code of Conduct. Please review it before the event.",
    },
  ];

  return (
   <div
  className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center py-12 "
  
>
    {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Black overlay */}
  <div className="absolute inset-0 bg-black/40 -z-10"></div>


        <Navbar/>
      <div className="max-w-3xl w-full bg-gradient-to-r from-blue-400/40 via-pink-500/40 to-green-500/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 my-16">
        {/* Header */}
<div className="flex flex-col items-center mb-12">
  {/* Top Heading */}
  <h1 className="text-6xl text-white ['font-serif'] drop-shadow-lg text-center mb-8 font-bold">
    FAQs
  </h1>

  {/* Bottom Row: text + image */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-4xl">
    {/* Left text */}
    <p className="text-lg text-white font-['Unica One'] leading-relaxed">
      <b className="font-['Protest Revolution'] text-3xl block mb-2">
        Have a question?
      </b>
      New to hackathon? <br />
      Don’t worry! We’ve got you covered with all the basic information.
    </p>

    {/* Right image */}
    <img
      src={FAQimg}
      alt=""
      className="h-48 w-auto mx-auto object-contain"
    />
  </div>
</div>


        {/* Accordion */}
        <div className="space-y-4">
            
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-white/60 bg-gradient-to-r from-blue-500/80 via-pink-500/80 to-green-500/80 rounded-lg shadow-md"
            >
              <div
                className="cursor-pointer flex justify-between items-center px-4 py-3 text-white font-['Unica One'] text-lg font-bold"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.q}
                <span className="relative w-4 h-4 flex items-center justify-center">
    {/* Horizontal bar */}
    <span className="absolute w-4 h-0.5 bg-white transition-transform duration-300"></span>
    {/* Vertical bar */}
    <span
      className={`absolute w-0.5 h-4 bg-white transition-all duration-300 ${
        openIndex === idx ? "opacity-0 rotate-270" : "opacity-100 rotate-0"
      }`}
    ></span>
  </span>
              </div>
              {openIndex === idx && (
                <div className="px-4 py-3 bg-gradient-to-r from-blue-500/60 via-pink-500/60 to-green-500/60 text-white font-sans font-semibold text-base">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

