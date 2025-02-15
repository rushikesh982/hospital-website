import React from "react";
import './about.css';



export default function AboutBanner()
{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 banner">
                        <p className="fw-bold title text-dark">About us</p>
                        <p className="text-capitalize">you are <here />
                        <span className="text-uppercase">home</span>/<span className="text-uppercase">about</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}