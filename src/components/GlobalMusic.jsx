import { useEffect, useRef, useState } from "react";

export default function GlobalMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("music");

    audioRef.current.volume = 0.35;

    if (saved === "on") {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          console.log("Autoplay blocked");
        });
    }
  }, []);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
      localStorage.setItem("music", "on");
      setPlaying(true);
    } else {
      audioRef.current.pause();
      localStorage.setItem("music", "off");
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 
                   bg-black/70 text-white px-4 py-2 rounded-full"
      >
        {playing ? "⏸ Music" : "▶ Music"}
      </button>
    </>
  );
}
