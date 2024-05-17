import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function CardProject({ title, description, imageUrl, url }) {
  return (
    <Card sx={{ backgroundColor: 'transparent', color: 'white' }}>
      <CardActionArea component='a' href={url} target='_blank' rel='noopener noreferrer'>
        <CardMedia component='img' height='140' image={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='white'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
