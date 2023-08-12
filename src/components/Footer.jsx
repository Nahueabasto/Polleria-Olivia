import React from "react";

//Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StorefrontIcon from "@mui/icons-material/Storefront";

import "./Footer.css"

export default function Footer(){
    
    return(
        <div className="footer">
        <div className="footer-container">

          <div className="left">
            <a href="https://www.instagram.com/polleria_olivia/">
              <div className="location">
                <InstagramIcon
                  className="mui"
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                <div>
                  <p>polleria_olivia/</p>
                </div>
              </div>
            </a>
            
              <div className="phone">
                <h4 className="h4">
                  <PhoneIcon
                    className="mui"
                    size={20}
                    style={{ color: "#fff", marginRight: "2rem" }}
                  />
                  +54 9 3434 17-5351
                </h4>
              </div>
           
            <div className="email">
              <h4 className="h4">
                <EmailIcon
                className="mui"
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                nahuel7474@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            {/* <h4>Sobre Mí</h4> */}
            <p>
              
            </p>
            <div className="location">
              <h4 className="h4">
                <LocationOnIcon
                className="mui"
                  size={20}
                  style={{ color: "#fff", marginLeft: "2rem" }}
                />
                Viale, Entre Rios. Argentina. 
              </h4>
            </div>
            <div className="location">
              <h4 className="h4">
                <StorefrontIcon
                className="mui"
                  size={20}
                  style={{ color: "#fff", marginLeft: "2rem" }}
                />
                25 de Mayo - 960 
              </h4>
            </div>
          </div>
        </div>
        <hr /> {/* Línea separadora */}

        <p className="rights">
      &copy; 2023 PolleriaOlivia | All Rights Reserved
    </p>
      </div>
    )
}