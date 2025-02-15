import React from "react";
import "./home.css";

export default function CounterBanner() {
  return (
    <>
      <div className="col-12 CounterBox">
        <div className="CounterInner text-light d-flex align-items-center justify-content-evenly flex-wrap">
            <h1><img src="/images/vaccinationchart.webp" alt="" />vaccination chart</h1>
            <h1><img src="/images/babycare.webp" alt="" />बाळाची काळजी कशी घ्याल‌?</h1>
        </div>
      </div>
    </>
  );
}
