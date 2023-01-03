import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const Player = (props: { url: string; active: boolean }) => {
  const { url, active } = props;
  const [player, setPlayer] = useState({
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: true,
    playbackRate: 1.0,
    loop: true,
    playsinline: true,
    onEnded: false,
  });

  const {
    pip,
    playing,
    controls,
    light,
    volume,
    muted,
    playbackRate,
    loop,
    playsinline,
  } = player;

  useEffect(() => {
    if (active) {
      setPlayer({ ...player, playing: active });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <>
      <ReactPlayer
        className="reactPlayer"
        url={url}
        pip={pip}
        playing={playing}
        controls={controls}
        light={light}
        // light={flyerInfo.thumbnailUrl}
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={muted}
        playsinline={playsinline}
      />
    </>
  );
};

export default Player;
