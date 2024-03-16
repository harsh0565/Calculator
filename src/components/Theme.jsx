import React from "react";

const Theme = (props) => {
    // const [Mode, setMode] = useState("Light");
    // const toggleMode = () => {
    //   if (Mode === "Light") {
    //     setMode("Dark");
    //     document.body.style.backgroundColor = "rgba(5, 5, 5, 0.799)";
        
    //   } else {
    //     setMode("Light");
    //     document.body.style.backgroundColor = "rgba(0, 0, 0, 0.141)";
    //   }
    // };
  return (
    <div>
      <div class="form-check form-switch">
        <input
          class={`form-check-input bg-${props.mode==="Light"?"light":"dark"}`}
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          onClick={props.toggleMode}
        />
        <label class={`form-check-label text-${props.mode==="Light"?"dark" : "light"}`} for="flexSwitchCheckChecked">{props.mode === "Light" ? "Dark" : "Light"}</label>
      </div>
    </div>
  );
};

export default Theme;
