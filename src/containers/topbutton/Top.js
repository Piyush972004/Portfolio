import React, {useEffect, useRef} from "react";
import "./Top.scss";

export default function Top() {
  const topButtonRef = useRef(null);

  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function scrollFunction() {
    const topButton = topButtonRef.current;
    if (!topButton) {
      return;
    }
    if (window.scrollY > 20) {
      topButton.style.visibility = "visible";
    } else {
      topButton.style.visibility = "hidden";
    }
  }

  useEffect(() => {
    scrollFunction();
    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <button
      ref={topButtonRef}
      onClick={TopEvent}
      id="topButton"
      title="Go to top"
      style={{visibility: "hidden"}}
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
