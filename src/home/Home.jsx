import React from "react";
import Slider from "./Slider";
import Singlefeatures from "./Singlefeatures";
import HomeServices from "./HomeServices";
import WhyChooseUs from "./WhyChooseUs";
import CounterBanner from "./CounterBanner";
import HomeDoctors from "./HomeDoctors";
import PatientSaid from "./PatientSaid";


export default function Home()
{
    return(
        <>
            <Slider/>
            <Singlefeatures/>
            <HomeServices/>
            <WhyChooseUs/>
            <CounterBanner/>
            <HomeDoctors/>
            <PatientSaid/>
        </>
    )
}