import React from 'react'

const Child = ({count}) => {
  console.log('Child is rendering')
  return (
    <div style={{ border:'red solid 1px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <header>I am the {count} child component</header> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat officia doloremque distinctio esse expedita dolor sequi tempore, soluta earum quas et deleniti, harum, fuga quam quis quo adipisci rem?</p>
    </div>
  )
}

export default React.memo(Child)