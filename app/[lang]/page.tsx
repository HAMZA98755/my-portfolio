import { translations } from '@/app/translations';
import { BiLogoCPlusPlus } from "react-icons/bi";
import {FaLaptopCode, FaMobile} from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import HomeClient from './component/pageClient'
import type { Props } from '../lib/types';

// This Function Take a Params and Store it in 'lang' to Use it in Client Page 
export default async function HomeClinet({ params }: Props) {
  const { lang } = await params;
  const t = translations[lang]; 
  // This is Array For Services To Display in Client Page
  const services = [
    {name: t.homePage.feature1Title, icon: <FaLaptopCode className='text-5xl'></FaLaptopCode>, desc: t.homePage.feature1Desc},
    {name: t.homePage.feature2Title, icon: <BiLogoCPlusPlus className='text-5xl'></BiLogoCPlusPlus>, desc: t.homePage.feature2Desc},
    // {name: t.homePage.feature3Title, icon: <HiLightningBolt className='text-5xl'></HiLightningBolt>, desc: t.homePage.feature3Desc},
    {name: t.homePage.feature4Title, icon: <FaMobile  className='text-5xl'></FaMobile >, desc: t.homePage.feature4Desc},
  ];

  return (
    <HomeClient t = {t} services = {services}></HomeClient>
  );
}
