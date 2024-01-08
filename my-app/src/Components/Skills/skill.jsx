import React from 'react'

const skill = ({img,name}) => {
  return (
  <>
    <div className="col-12 col-md-4" >
        <div className="img text-center">
          <img src={img} alt='htmllogo' style={{ maxWidth: '100px', height: 'auto' }}  />
          <h5>{name}</h5>
        </div>
      </div> 
  
  </>
  )
}

export default skill