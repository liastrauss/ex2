'use client'
import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import { useState } from 'react';


export default function PizzaPage() {
  const colors = ['rgb(247, 221, 184)', 'yellow', 'pink', 'green', 'purple', 'orange', 'blue'];

  const [bgColor, setBgColor] = useState(colors[0]);
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    const nextColorIndex = (colorIndex + 1) % colors.length;
    setBgColor(colors[nextColorIndex]);
    setColorIndex(nextColorIndex);
  };

  return (
      <div className="grid" style={{background: bgColor}}>
        <div className="center padding-2 text-xl">
          <span>
            <h1>Welcome to the Pizza Page!</h1>
            <div className='pizzaParty'>
            <Button variant="text" 
            endIcon={<CelebrationRoundedIcon />} 
            sx={{color: 'rgb(218, 17, 17)'}}
            onClick={changeColor}
            >
              MAKE IT A PIZZA PARTY
            </Button>
            </div>
          </span>
        </div>
        <div className='crustTutorial'>
          <h2>How to make a <br/>pizza crust?</h2>
          <br></br>
        <iframe width="450" height="250" src="https://www.youtube.com/embed/1-SJGQ2HLp8?si=3UbYHXfAmKLgJepd" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="center padding-2">
          <p>
          <strong>Here are ideas for three pizzas you can make:</strong> 
          </p>
        </div>
        
        <div className="cards">
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <img className="pizzaImg" src="https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <em>Pizza Margherita</em>
          </Typography>
          <ul>
            <li>Tomato sauce base</li>
            <li>Mozarella cheese</li>
            <li>Basil leaves</li>
          </ul>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="https://cookieandkate.com/margherita-pizza-recipe/" target="_blank">
          Recipe
        </a>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <img className="pizzaImg" src="https://www.acouplecooks.com/wp-content/uploads/2019/05/Spinach-Artichoke-Pizza-004.jpg"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <em>Spinach and Artichoke</em>
          </Typography>
          <ul>
            <li>Spinach base</li>
            <li>Chopped artichoke</li>
            <li>Mozarella cheese</li>
          </ul>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="https://www.cookingclassy.com/spinach-artichoke-pizza/" target="_blank">
          Recipe
        </a>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <img className="pizzaImg" src="https://tastesbetterfromscratch.com/wp-content/uploads/2020/10/White-Pizza-6.jpg"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <em>Pizza Bianca</em>
          </Typography>
          <ul>
            <li>Garlic base</li>
            <li>Mozarella cheese</li>
            <li>Pecorino cheese</li>
          </ul>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="https://tastesbetterfromscratch.com/white-pizza/" target="_blank">
          Recipe
        </a>
      </CardActions>
    </Card>
        </div>


      </div>
  )
}
