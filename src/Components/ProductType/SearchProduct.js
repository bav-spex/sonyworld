import React from 'react'
import "./../../SCSS/ProductType/_searchProduct.scss"
import {Link} from "react-router-dom"
import Heading6 from '../Font/Heading6'
import Text4 from '../Font/Text4'
import Text3 from '../Font/Text3'
import RatingBlock from '../MostSharedComponent/RatingBlock'
function SearchProduct({product}) {
  return (
    <div className="row search__product__block">
        <div className="col-2 search__product__image__block">
            <img className='search__product__image' src={product.image} alt={product.productName} />
        </div>
        <div className="col-10 search__product__detail__block">
            <Heading6 text={product.productName} marginBottom={20} />
            <Text4 text="ZH8 SERIES" color="#808080" marginBottom={20}/>
            <RatingBlock rating={product.rating}totalRatings={product.totalRatings}/>
            <Text3 text={product.categoryTagline} marginBottom={20}/>
            <div className="row search__product__hightlight__link">
                <Link to="/products/1" className="col-3 search__product__link">Reviews and Ratings</Link>
                <Link to="/products/1" className="col-3 search__product__link">Related Products</Link>
                <Link to="/products/1" className="col-3 search__product__link">Specifications</Link>
                <Link to="/products/1" className="col-3 search__product__link">Support</Link>
            </div>
        </div>
    </div>
  )
}

export default SearchProduct