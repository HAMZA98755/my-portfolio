'use client'
import {type Locale, translations } from "./translations";
import { BiLogoCPlusPlus } from "react-icons/bi";
import {FaLaptopCode, FaMobile} from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
export const  getServicesData = (lang: Locale)  => {
    const t = translations[lang];
    const services = [
    {name: t.homePage.feature1Title, icon:  <FaLaptopCode></FaLaptopCode>, desc: t.homePage.feature1Desc},
    {name: t.homePage.feature2Title, icon: <BiLogoCPlusPlus className='text-5xl'></BiLogoCPlusPlus>, desc: t.homePage.feature2Desc},
    {name: t.homePage.feature3Title, icon: <HiLightningBolt className='text-5xl'></HiLightningBolt>, desc: t.homePage.feature3Desc},
  ];

  return services;
}