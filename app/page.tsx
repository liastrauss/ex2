import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, CardActions } from '@mui/material';
// import { useState, useEffect } from 'react';
import PizzaPage from './pizzaPage';


export default function Home() {

  return (
    <WebsiteScreen>
      <PizzaPage/>
    </WebsiteScreen>
  )
}
