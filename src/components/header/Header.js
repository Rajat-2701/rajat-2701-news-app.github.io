import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import Logo from "../../assets/logo/sky-news.png";
import { useAPI } from "../../context/NewsContextProvider";

const Header = () => {
  const [show, setShow] = useState(false);
  const country = [
    {
      id: 1,
      name: "Business",
      path: "/business",
    },
    {
      id: 2,
      name: "Entertainment",
      path: "/entertainment",
    },
    {
      id: 3,
      name: "General",
      path: "/general",
    },
    {
      id: 4,
      name: "Health",
      path: "/health",
    },
    {
      id: 5,
      name: "Science",
      path: "/science",
    },
    {
      id: 6,
      name: "Sports",
      path: "/sports",
    },
    {
      id: 7,
      name: "Technology",
      path: "/technology",
    },
  ];

  return (
    <div className="top-header bg-white ml-auto mr-auto shadow-md p-0 pb-2 flex items-center justify-between">
      <div className="logo mr-auto ml-28 mt-2 w-full">
        {/* <HeaderIcon /> */}
        <img src={Logo} className="w-28 h-auto" alt="logo" />
      </div>
      <div className="menu-items hidden xl:grid grid-flow-col gap-10 mr-20 mt-2">
        {country?.map((item, index) => {
          return (
            <NavLink
              exact
              to={item.path}
              className={`${
                item.id === index
                  ? "active"
                  : "text-black text-lg font-medium uppercase nav-item text-center pt-[10px] pb-[10px]"
              }`}
              key={item?.id}
            >
              {item?.name}
            </NavLink>
          );
        })}
      </div>
      <Popup
        trigger={
          <div className="button block xl:hidden transition-all duration-700 ease-in-out mr-20 text-2xl">
            {" "}
            <i className='fas fa-bars'></i>{" "}
          </div>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <div className="menu-items xl:hidden grid grid-flow-row gap-10 mr-20 mt-2">
              {country?.map((item, index) => {
                return (
                  <NavLink
                    exact
                    to={item.path}
                    className={`${
                      item.id === index
                        ? "active"
                        : "text-white text-lg font-medium uppercase nav-item text-center pt-[10px] pb-[10px]"
                    }`}
                    key={item?.id}
                  >
                    {item?.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Header;
