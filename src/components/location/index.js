import React from 'react'

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4610.020835769744!2d-43.3212505130634!3d-23.007702465328716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd0a2b175eff7%3A0x480600f274e0e0b4!2sR.+Zaco+Paran%C3%A1%2C+126+-+Barra+da+Tijuca%2C+Rio+de+Janeiro+-+RJ%2C+22620-250!5e0!3m2!1sen!2sbr!4v1549856258536" width="100%" 
        height="500px" 
        frameborder="0" 
        style={{border:"0"}} 
        allowfullscreen></iframe>
        <div className="locatio_tag">
            <div>Location</div>
        </div>
    </div>
  )
}

export default Location
