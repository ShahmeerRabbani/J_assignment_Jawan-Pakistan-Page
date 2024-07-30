import { Typography } from '@mui/material'

import React from 'react'

const Card = ({cardImg, title}) => {
  return (
    <div>
            <div className="course_card">
              <div className="card_img">
                <img src={cardImg} alt="" style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
              </div>
              <Typography sx={{fontSize: 20, fontWeight: 400}}>{title}</Typography>
            </div>
    </div>
  )
}

export default Card
