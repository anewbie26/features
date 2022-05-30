import React from "react";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const Header = () => {
  const [isOn, steIsOn] = useState(false);
  return (
    <div>
      <header className="border flex justify-evenly pt-4">
        <div>
          <Slider
            defaultValue={30}
            sx={{
              width: 300,
              color: "success.main",
            }}
          />
        </div>

        <div className="">
          <input className="bg-red-200" type="text" />
        </div>
        <div>
          <div className="flex items-center">
            <p className="text-gray-600">Male</p>
            <Switch onClick={() => steIsOn(!isOn)} />
            <p className="text-blue-400">Female</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
