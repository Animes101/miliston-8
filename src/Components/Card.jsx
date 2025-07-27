import React from 'react'

const Card = ({data}) => {
    const {name,description,price,category,tags,image}=data
  return (
    <div className=''>
        <div className="card shadow-sm border border-gray-200">
            <figure>
                <img
                src={image}
                alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{category}</h2>
                <h2 className="card-title">{tags}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{price}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card