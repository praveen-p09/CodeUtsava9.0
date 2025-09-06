import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import introLoop from "../../assets/gifs/start_smooth.webm";
import introOpen from "../../assets/gifs/transit_smooth.webm";

export default function Intro() {
  const [playTransition, setPlayTransition] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const loopRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (playTransition && videoRef.current) {
      videoRef.current.onended = () => {
        navigate("/hero");
      };
      videoRef.current.muted = isMuted;
    }
  }, [playTransition, navigate, isMuted]);

  useEffect(() => {
    if (loopRef.current) loopRef.current.muted = isMuted;
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-black">
      {/* Looping video */}
      <video
        ref={loopRef}
        src={introLoop}
        autoPlay
        preload="auto"
        loop
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover 
          transition-opacity duration-[1500ms] ease-in-out 
          ${playTransition ? "opacity-0" : "opacity-100"}`}
      />

      {/* Transition video */}
      {playTransition && (
        <video
          ref={videoRef}
          src={introOpen}
          autoPlay
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Title + Enter button */}
      {!playTransition && (
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 sm:space-y-8 px-4">
          {/* Title */}
          <div className="backdrop-blur-lg bg-green-200/5 px-8 py-6 rounded-2xl shadow-lg text-center border border-white/20">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-arcade uppercase tracking-wider 
                         bg-gradient-to-r from-blue-400 via-pink-400 to-green-400 
                         text-transparent bg-clip-text"
            >
              CODEUTSAVA
            </h1>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-arcade uppercase mt-2
                         bg-gradient-to-r from-green-400 via-blue-400 to-pink-400
                         text-transparent bg-clip-text"
            >
              9.0
            </h1>
          </div>

          {/* Enter Button */}
          <button
            onClick={() => setPlayTransition(true)}
            className="
              relative px-8 py-4 sm:px-12 sm:py-5 text-lg sm:text-2xl
              font-arcade uppercase tracking-widest
              backdrop-blur-lg bg-green-400/10 border border-white/20 rounded-xl
              text-white shadow-md
              hover:bg-gradient-to-r hover:from-blue-400 hover:via-pink-300 hover:to-green-300
              hover:text-white hover:shadow-lg
              active:scale-95 
              transition-all duration-300 ease-in-out
            "
          >
            Enter
          </button>
        </div>
      )}

      {/* Pixelated Sound Button (bottom-right) */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
        <Box
          onClick={() => setIsMuted(!isMuted)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(74, 222, 128, 0.1)", 
            px: { xs: 1.5, sm: 2 },
            py: { xs: 1, sm: 1 },
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              background:
                "linear-gradient(90deg,#89b4f9 , #f17eb7)", // blue then pink
              color: "white",
            },
            fontFamily: "'Press Start 2P', cursive",
          }}
        >
          {isMuted ? (
            <VolumeOffIcon fontSize="medium" />
          ) : (
            <VolumeUpIcon fontSize="medium" />
          )}
        </Box>
      </div>
    </div>
  );
}
