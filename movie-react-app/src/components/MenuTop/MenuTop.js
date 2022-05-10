import React from 'react';
import "./MenuTop.scss";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { useHistory } from 'react-router-dom';

export default function MenuTop() {
  const history = useHistory();
 
  return (
    <div className="menu-top">
      <div className="menu-top-logo">
          <Logo/>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{lineHeight:"64px"}}>
          <Menu.Item key="1">
              <a href='/' >Home</a>
          </Menu.Item>

          <Menu.Item key="2">
              <a href='/new-movies'>Ultimos Lanzamientos</a>
          </Menu.Item>

          <Menu.Item key="3">
              <a href="/popular">Populares</a>
          </Menu.Item>

          <Menu.Item key="4">
              <a href="/search">Buscador</a>
          </Menu.Item>
      </Menu>
    </div>
  )
}
