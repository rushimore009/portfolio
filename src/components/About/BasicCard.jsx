import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './BasicCard.css'


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, backgroundColor:'transparent',color:'white'}} className='shadow'>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Hello!
        </Typography> */}
        <div>
          <h3 className='typed' sx={{overflowWrap:'break-word'}}>I'm Rushikesh Avinash More</h3>
        </div>
        <div  className='p-3'>
          <h5>Equipped with a solid understanding of key programming languages and technologies.
        I am eager to contribute my fresh perspective, adaptability, and enthusiasm to deliver innovative solutions. </h5>
        </div>
        <div variant="body2">
          <h4>I am excited to embark on a fulfilling journey in software development.</h4>
        </div>
      </CardContent>
    </Card>
  );
}
