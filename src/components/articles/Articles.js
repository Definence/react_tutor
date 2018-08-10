import React from 'react'
import Article from './Article'

export default class Archives extends React.Component {
  render() {
    const randomInt = ({ min=0, max }) => {
                        return Math.floor(Math.random() * (max - min) + min)
                      }

    const headers = [ 'Spot #1',
                      'Spot #2',
                      'Spot #3',
                      'Spot #4',
                      'Spot #5',
                      'Spot #6' ]

    return (
      <div className='row'>
        {headers.map((item, i) => {
          let header = headers[randomInt({max: headers.length})]
          return <Article key={i} header={header} />
        })}
      </div>
    )
  }
}
