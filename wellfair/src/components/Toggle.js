import { useState } from "react";
import { useTransition, animated, config } from "react-spring";
import Wraith from "./images/wraith.png";
import WraithBlink from "./images/wraith-blink.png";

function Toggle() {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 100,
    config: config.molasses,
    onRest: () => set(!toggle),
  });
  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div
        style={{
          position: "absolute",
          left: "-50px",
          top: "230px",
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        <img src={Wraith} />
      </animated.div>
    ) : (
      <animated.div
        style={{
          position: "absolute",
          left: "-50px",
          top: "230px",
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}
      >
        <img src={WraithBlink} />
      </animated.div>
    )
  );
}

export default Toggle;
