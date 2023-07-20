// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slideToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planet-slider-container">
      <h1 className="heading" data-testid="planets">
        PLANETS
      </h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} item={each} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
