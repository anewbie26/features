import React from "react";
import data from "../data.json";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const Card = () => {
  const user = data[0].friends;
  const [isOn, steIsOn] = useState(false);
  const [searchInp, setSearchInp] = useState("");
  const [range, setRange] = useState([500, 4000]);

  
  user.slice().map((items) => {
    const num = items.balance.replace(/[^\d.-]/g, "");
    return (items.bal = num);
  });

  const minBal = range[0];
  const maxBal = range[1];

  const updateVal = (e, items) => {
    setRange(items);
  };

  return (
    <div>
      <header className="border flex justify-evenly py-8">
        <div>
          <Slider
            onChange={updateVal}
            valueLabelDisplay="on"
            min={500}
            max={4000}
            value={range}
            sx={{
              width: 300,
              color: "success.main",
            }}
          />
        </div>

        <div className="">
          <input
            className="bg-red-200"
            type="text"
            onChange={(e) => setSearchInp(e.target.value)}
          />
        </div>
        <div>
          <div className="flex items-center">
            <p className="text-gray-600">Male</p>
            <Switch onClick={() => steIsOn(!isOn)} />
            <p className="text-blue-400">Female</p>
          </div>
        </div>
      </header>
      {/* --------------------------------------------------- */}
      <div className="flex flex-wrap justify-center">
        {user
          .filter((gender) => gender.gender === `${isOn ? "female" : "male"}`)
          .filter((value) => {
            if (searchInp == "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchInp.toLowerCase())
            ) {
              return value;
            }
          })
          .filter((item) => item.bal >= minBal && item.bal <= maxBal)
          .map((card) => (
            <div key={card.id}>
              <div className="bg-green-200 w-[250px] h-auto m-8 flex flex-col justify-center items-center p-8 rounded-xl ">
                <img src="./pro.png" alt="profile" className="pro-img" />
                <h3 className="">${card.name}</h3>
                <table className="">
                  <tbody>
                    <tr>
                      <td>id</td>
                      <td>
                        <strong>:</strong>
                      </td>
                      <td>{card.id}</td>
                    </tr>
                    <tr>
                      <td>gender</td>
                      <td>
                        <strong>:</strong>
                      </td>
                      <td>{card.gender}</td>
                    </tr>
                    <tr>
                      <td>isActive</td>
                      <td>
                        <strong>:</strong>
                      </td>
                      <td>{card.isActive}</td>
                    </tr>
                    <tr>
                      <td>eyecolor</td>
                      <td>
                        <strong>:</strong>
                      </td>
                      <td>{card.eyeColor}</td>
                    </tr>
                    <tr>
                      <td>balance</td>
                      <td>
                        <strong>:</strong>
                      </td>
                      <td>{card.balance}</td>
                    </tr>
                    <tr>
                      <td>favoriteFruit</td>
                      <td>
                        <strong>:</strong>
                      </td>
                      <td>{card.favoriteFruit}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
