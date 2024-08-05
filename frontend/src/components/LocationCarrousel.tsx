import React, { ReactNode, useRef } from 'react'
import Slider from 'react-slick'
import { Button } from '@mui/material'
import {
  ArrowRight,
  ArrowLeft,
  LocationOn as LocationIcon,
} from '@mui/icons-material'
import * as bookcarsHelper from ':bookcars-helper'
import * as bookcarsTypes from ':bookcars-types'
import env from '../config/env.config'
import { strings } from '../lang/location-carrousel'
import { strings as commonStrings } from '../lang/common'
import Badge from './Badge'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../assets/css/location-carrousel.css'

interface LocationCarrouselProps {
  locations: bookcarsTypes.Location[]
  onSelect?: (location: bookcarsTypes.Location) => void
}

const LocationCarrousel = ({
  locations,
  onSelect,
}: LocationCarrouselProps) => {
  const slider = useRef<Slider>(null)

  const sliderSettings = {
    arrows: false,
    dots: true,
    // eslint-disable-next-line react/no-unstable-nested-components
    appendDots: (dots: ReactNode) => (
      <div>
        <ul style={{ margin: '0px', padding: '0px' }}>
          <Button variant="text" className="btn-slider btn-slider-prev" onClick={() => slider?.current?.slickPrev()}>
            <ArrowLeft />
            {commonStrings.BACK}
          </Button>
          {' '}
          {dots}
          {' '}
          <Button variant="text" className="btn-slider btn-slider-next" onClick={() => slider?.current?.slickNext()}>
            {commonStrings.NEXT}
            <ArrowRight />
          </Button>
        </ul>
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      }
    ]
  }

  return (
    <div className="locations">
      <Slider ref={slider} {...sliderSettings}>
        {locations.map((location) => (
          <div key={location._id} className="box">
            <div className="location-image">
              {
                location.image ? (
                  <img alt="Tirana" src={bookcarsHelper.joinURL(env.CDN_LOCATIONS, location.image)} />
                )
                  : <LocationIcon className="location-icon" />
              }
            </div>
            <div className="title">
              <h2>{location.name}</h2>
              <Badge backgroundColor="#B3E5FC" color="#2D7AB3" text="New" />
              {/* <Badge backgroundColor="#FFE0B2" color="#EF8743" text="200 m from you" />
              <Badge backgroundColor="#FEEBEE" color="#F37977" text="-20% sale" /> */}
            </div>
            <p>{`${location.name}${location.parkingSpots && location.parkingSpots?.length > 0 ? ` · ${location.parkingSpots?.length} ${location.parkingSpots?.length === 1 ? strings.AVALIABLE_LOCATION : strings.AVALIABLE_LOCATIONS}` : ''}`}</p>
            <Button
              variant="text"
              color="inherit"
              className="btn-location"
              onClick={() => {
                if (onSelect) {
                  onSelect(location)
                }
              }}
            >
              {strings.SELECT_LOCATION}
            </Button>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default LocationCarrousel
