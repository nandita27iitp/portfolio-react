import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="row-gh" style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-head" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="nandita27iitp"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
