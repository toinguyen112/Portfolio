import React from 'react'
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
    return (
        <div className="works">
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    isbum is simpley dummy text of printing
                    <br />
                    isbum is simpley dummy text of printing of printing
                    <br />
                    isbum is simpley dummy text
                </span>

                <button className="button s-button">Download CV</button>

                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>

                {/* background Circles */}
                <div className="w-backCircle blueCircle">

                </div>
                <div className="w-backCircle yellowCircle">

                </div>
            </div>
        </div>
    )
}

export default Works