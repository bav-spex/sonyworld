import React from 'react'
import "./../SCSS/_services.scss"
function Services({servicesData}) {
  return (
    <div className="container-fluid services__container">
    <div className="services__block">
     
      <div className="row services__row">
        {servicesData.map((service, blogIndex) => {
          return (
            <div key={service.id} className="col-6 col-sm-6 col-md-3 service">
              <div className="service__image__block">
                <img src={service.image} alt="" className="service__image" />
              </div>
              <p className="service__title">{service.title}</p>
              <p className="service__description">{service.description}</p>
             
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default Services