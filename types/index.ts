import { ReactNode } from 'react';

export type Cards = {
icon?:ReactNode;
title:string,
price?:string,
cardPrice?:boolean,
desc:string
}

export type Card = {
  name: string;
  desc: string;
  imageSrc: string;
  quote: string;
}[];