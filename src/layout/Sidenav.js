/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";
import { Menu, Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import navigation from "./_nav";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <div className="brand tw-flex tw-font-semibold tw-text-lg">
        <img src={logo} alt="" />
        <span>Muse Dashboard</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        {navigation.map((item) => {
          if (auth.isAuth && item.type === "protected") {
            return (
              <Menu.Item key={Math.random()}>
                <NavLink to={item.link}>
                  <span
                    className="icon"
                    style={{
                      background: page === item.identifier ? color : "",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span className="label">{item.name}</span>
                </NavLink>
              </Menu.Item>
            );
          } else if (!auth.isAuth && item.type === "unprotected"){
            return (
              <Menu.Item key={Math.random()}>
                <NavLink to={item.link}>
                  <span
                    className="icon"
                    style={{
                      background: page === item.identifier ? color : "",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span className="label">{item.name}</span>
                </NavLink>
              </Menu.Item>
            );
          } else {
            return <React.Fragment key={Math.random()}></React.Fragment>;
          }
        })}
      </Menu>
      {/* <div className="aside-footer">
        <div
          className="footer-box"
          style={{
            background: color,
          }}
        >
          <span className="icon" style={{ color }}>
            {dashboard}
          </span>
          <h6>Need Help?</h6>
          <p>Please check our docs</p>
          <Button type="primary" className="ant-btn-sm ant-btn-block">
            DOCUMENTATION
          </Button>
        </div>
      </div> */}
    </>
  );
}

export default Sidenav;
