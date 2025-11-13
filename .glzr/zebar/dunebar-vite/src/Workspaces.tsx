import type { GlazeWmOutput } from "zebar";

interface Props {
  glazewm: GlazeWmOutput | null;
}

const Workspaces = ({ glazewm }: Props) => {
  return (
    <div>
      {glazewm && (
        <div className="bar-block workspaces">
          {glazewm.currentWorkspaces.map((workspace) => (
            <button
              className={`workspace ${workspace.hasFocus && "focused"} ${workspace.isDisplayed && "displayed"}`}
              onClick={() =>
                glazewm?.runCommand(`focus --workspace ${workspace.name}`)
              }
              key={workspace.name}
            >
              {workspace.displayName ?? workspace.name}
            </button>
          ))}
          <button
            className={`workspace nf ${
              glazewm.tilingDirection === "horizontal"
                ? "nf-md-swap_horizontal"
                : "nf-md-swap_vertical"
            }`}
            onClick={() => glazewm?.runCommand("toggle-tiling-direction")}
          ></button>
        </div>
      )}
    </div>
  );
};

export default Workspaces;
