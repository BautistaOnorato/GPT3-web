import React from 'react'
import { companies } from './imports'
import './brand.css'

export const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {
        companies.map(company => (
          <div key={company.id}>
            <img src={company.img} alt={company.alt} />
          </div>
        ))
      }
    </div>
  )
}
