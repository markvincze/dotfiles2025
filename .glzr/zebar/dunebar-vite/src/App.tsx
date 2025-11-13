import { useEffect, useState } from "react";
import * as zebar from "zebar";
import VolumeControl from "./VolumeControl";
import MediaControl from "./MediaControl";
import Status from "./Status";
import Workspaces from "./Workspaces";

function App() {
  const providers = zebar.createProviderGroup({
    network: { type: "network" },
    glazewm: { type: "glazewm" },
    cpu: { type: "cpu" },
    date: { type: "date", formatting: "EEE d MMM t" },
    battery: { type: "battery" },
    memory: { type: "memory" },
    weather: { type: "weather" },
    keyboard: { type: "keyboard" },
    audio: { type: "audio" },
    media: { type: "media" },
  });

  const [output, setOutput] = useState(providers.outputMap);

  useEffect(() => {
    providers.onOutput(() => setOutput(providers.outputMap));
  }, []);

  return (
    <div className="bar">
      <Workspaces glazewm={output.glazewm} />

      <div className="bar-block window-title">
        {output.glazewm?.focusedContainer &&
          "title" in output.glazewm.focusedContainer && (
            <span>{output.glazewm.focusedContainer.title}</span>
          )}
      </div>

      {output.media?.currentSession ? <MediaControl media={output.media} /> : <div className="bar-block media" />}

      <Status
        network={output.network}
        memory={output.memory}
        cpu={output.cpu}
        battery={output.battery}
        keyboard={output.keyboard}
        weather={output.weather}
      />

      <div className="bar-block datetime">{output.date?.formatted}</div>

      {output.audio && <VolumeControl audio={output.audio} />}
    </div>
  );
}

export default App;
