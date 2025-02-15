import React from "react";
import Slider from "./Slider";
import Singlefeatures from "./Singlefeatures";
import HomeServices from "./HomeServices";
import WhyChooseUs from "./WhyChooseUs";


export default function Home()
{
    return(
        <>
            <Slider/>
            <Singlefeatures/>
            <HomeServices/>
            <WhyChooseUs/>
        </>
    )
}