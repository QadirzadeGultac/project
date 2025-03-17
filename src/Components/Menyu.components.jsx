import React, { useState } from 'react';
import './Menyu.css';
import { useNavigate } from 'react-router-dom';
import burgerMenu from "../assets/menu.png"
import residentsBlue from "../assets/residents-blue.png"
import residentsBlack from "../assets/residents-black.png"
import usersBlue from "../assets/users-blue.png"
import usersBlack from "../assets/users-black.png"
import priceListBlue from "../assets/price-list-blue.png"
import priceListBlack from "../assets/price-list-black.png"
import permissionsBlue from "../assets/permissions-blue.png"
import permissionsBlack from "../assets/permissions-black.png"
import calculationsBlue from "../assets/calculations-blue.png"
import calculationsBlack from "../assets/calculations-black.png"
import reportBlue from "../assets/report-blue.png"
import reportBlack from "../assets/report-black.png"
import logout from "../assets/logout.png"
const Menyu = ({ onResidentsClick, closeResidentsClick, onUsersClick, closeUsersClick }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (menu) => {
    // Əgər artıq açıq olan menyuya kliklənibsə, onu bağlayırıq
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div className="menu">
      <div className={isMenuOpen ? "small-container" : "container"}>
        <div className="menu-header">
          <h1>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img className="burger" src={burgerMenu} alt="burger menu" />
            </button>
            {!isMenuOpen && "NM SOFT"}
          </h1>
        </div>

        {/* Sakinlər */}
        <div className="menu-main" onClick={() => { toggleMenu("residents"); onResidentsClick(); closeUsersClick(); closePriceListClick(); }}>
          <div className="residents-div">
            <img
              className="residents"
              src={activeMenu === "residents"
                ? {residentsBlue}
                : {residentsBlack}}
              alt="residents"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "residents" ? "menu-p active-text" : "menu-p inactive-text"}>
                Sakinlər
              </p>
            )}
          </div>
        </div>

        {/* İstifadəçilər */}
        <div className="menu-main" onClick={() => { toggleMenu("users"); closeResidentsClick(); onUsersClick(); closePriceListClick();}}>
          <div className="users-div">
            <img
              className="users"
              src={activeMenu === "users"
                ? {usersBlue}
                : {usersBlack}}
              alt="users"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "users" ? "menu-p active-text" : "menu-p inactive-text"}>
                İstifadəçilər
              </p>
            )}
          </div>
        </div>

        {/* Qiymət Cədvəli */}
        <div className="menu-main" onClick={() => { toggleMenu("price-list"); closeResidentsClick(); closeUsersClick(); onPriceListClick();}}>
          <div className="price-list-div">
            <img
              className="price-list"
              src={activeMenu === "price-list"
                ? {priceListBlue}
                : {priceListBlack}}
              alt="price-list"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "price-list" ? "menu-p active-text" : "menu-p inactive-text"}>
                Qiymət Cədvəli
              </p>
            )}
          </div>
        </div>

        {/* İcazələr */}
        <div className="menu-main" onClick={() => { toggleMenu("permissions"); closeResidentsClick(); closeUsersClick(); closePriceListClick();}}>
          <div className="permissions-div">
            <img
              className="permissions"
              src={activeMenu === "permissions"
                ? {permissionsBlue}
                : {permissionsBlack}}
              alt="permissions"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "permissions" ? "menu-p active-text" : "menu-p inactive-text"}>
                İcazələr
              </p>
            )}
          </div>
        </div>

        {/* Hesablamalar */}
        <div className="menu-main" onClick={() => { toggleMenu("calculations"); closeResidentsClick(); closeUsersClick(); closePriceListClick();}}>
          <div className="calculations-div">
            <img
              className="calculations"
              src={activeMenu === "calculations"
                ? {calculationsBlue}
                : {calculationsBlack}}
              alt="calculations"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "calculations" ? "menu-p active-text" : "menu-p inactive-text"}>
                Hesablamalar
              </p>
            )}
          </div>
        </div>

        {/* Hesabat */}
        <div className="menu-main" onClick={() => { toggleMenu("report"); closeResidentsClick(); closeUsersClick(); closePriceListClick();}}>
          <div className="report-div">
            <img
              className="report"
              src={activeMenu === "report"
                ? {reportBlue}
                : {reportBlack}}
              alt="report"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "report" ? "menu-p active-text" : "menu-p inactive-text"}>
                Hesabat
              </p>
            )}
          </div>
        </div>
        <div>
          {!isMenuOpen ? (
            <>
              <button className='log-out' onClick={() => {
                handleLogout();
                closeResidentsClick();
                closeUsersClick();
              }} >Log out
                <img className='log-out-img' src={logout} alt="log out" />
              </button>
            </>
          ) : (
            <img
              style={{ marginTop: "180px" }}
              className='log-out-img' onClick={() => {
                handleLogout();
                closeResidentsClick();
                closeUsersClick();
              }} src={logout} alt="log out" />
          )}
        </div>

      </div>
    </div>
  );
};

export default Menyu;
