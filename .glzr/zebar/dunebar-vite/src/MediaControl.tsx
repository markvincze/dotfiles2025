import type { MediaOutput } from "zebar";

interface MediaProps {
  media: MediaOutput;
}

const MediaControl = ({ media }: MediaProps) => {
  const playButtonIcon = media?.currentSession?.isPlaying
    ? "nf-md-pause"
    : "nf-md-play";

  const previous = () => {
    media.previous();
  };

  const togglePlay = () => {
    media.togglePlayPause();
  };

  const next = () => {
    media.next();
  };

  return (
    <div className="bar-block media">
      <span className="media-title">{media?.currentSession?.title}</span>
      <button onClick={previous} className="media-button">
        <i className="nf nf-md-skip_previous"></i>
      </button>
      <button onClick={togglePlay} className="media-button">
        <i className={`nf ${playButtonIcon}`}></i>
      </button>
      <button onClick={next} className="media-button">
        <i className="nf nf-md-skip_next"></i>
      </button>
    </div>
  );
};

export default MediaControl;
