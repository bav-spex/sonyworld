import React from 'react'
import "./../SCSS/_threeProducts.scss"
function ThreeProducts({threeProductsData}) {
  return (
    <div className="container-fluid three__products__container">
        <div className="container three__products__block">
          <div className="row three__products__row">
            {threeProductsData.slice(0, 3).map((product, productIndex) => {
              return (
                <div key={product.id}  className="col-4 three__product__block">
                  <div className="ineer__three__product__block">
                    <div className="three__product__image__block">
                      <img
                        src={product.image}
                        alt=""
                        className="three__product__image"
                      />
                    </div>
                    <p className="three__product__name">
                      {product.productName}
                    </p>
                    <p className="three__product__description">
                      Find out Why This Is the Go-To Lens for So many
                      Photographers
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  )
}

export default ThreeProducts