import { useState, type ChangeEvent, type FocusEvent } from "react";
import type { AudioOutput } from "zebar";

interface Props {
  audio: AudioOutput;
}

const VolumeControl = ({ audio }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = (event: FocusEvent<HTMLElement>) => {
    // This if is needed to keep the control open if any element keeps the focus _inside_ the div, for example when we click on the mute button.
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const mute = () => {
    audio.setMute(!audio.defaultPlaybackDevice?.isMuted);
  };

  const changeVolume = (event: ChangeEvent<HTMLInputElement>) => {
    audio.setVolume(parseInt(event.target.value));
  };

  const volumeIconClass = audio?.defaultPlaybackDevice?.isMuted
    ? "nf-fa-volume_xmark"
    : audio?.defaultPlaybackDevice?.volume === undefined ||
        audio?.defaultPlaybackDevice?.volume < 20
      ? "nf-fa-volume_off"
      : audio?.defaultPlaybackDevice?.volume < 50
        ? "nf-fa-volume_low"
        : "nf-fa-volume_high";

  return (
    <div className="bar-block sound">
      {isOpen ? (
        <div onBlur={close}>
          <input
            autoFocus
            type="range"
            min="0"
            max="size"
            step="1"
            value={audio?.defaultPlaybackDevice?.volume}
            onChange={changeVolume}
          />
          <button onClick={mute} className="mute-button">
            <i className={`nf ${volumeIconClass}`}></i>
          </button>
        </div>
      ) : (
        <button onClick={open} className="sound-button">
          <i className={`nf ${volumeIconClass}`}></i>
        </button>
      )}
    </div>
  );
};

export default VolumeControl;
