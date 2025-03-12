import React from 'react'
import { useHref } from 'react-router-dom'

const Text1 = () => {
  return (
    <div class="heading-box">
  <p className="head1">Color Battle</p>
  
  <p className="head2">"Test your reflexes in Color Battle! Match colors fast, rise to the top, and claim victory in this adrenaline-pumping challenge!" </p>
     <a href='https://play.google.com/store/apps/details?id=com.BeanBot.ColorBattle'>
      <button className='linkb'>Play now</button>
      </a>
     </div>
  )
}

export default Text1
