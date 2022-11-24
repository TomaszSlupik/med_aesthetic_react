import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function Photo() {

  const photo = [
    {
      img: '/img/one.jpg',
    },
    {
      img: '/img/two.jpg',
     
    },
    {
      img: '/img/three.jpg',
   
    },
    {
      img: '/img/wellness.jpg',
      title: 'Books',
    },
    {
      img: '/img/chair.jpg',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
  ];



  return (
    <div>

<ImageList sx={{ width: '100%', height: 450 }} variant="woven" cols={3} gap={8}>
      {photo.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={process.env.PUBLIC_URL + item.img}
            alt='Fotografia medyczna'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    </div>
  )
}
