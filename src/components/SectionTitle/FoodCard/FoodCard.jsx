import React from 'react'

const FoodCard = ({item}) => {
    const {name, image, price,receipe}=item

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={image}/>
                    
            </figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{receipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>)
}

export default FoodCard