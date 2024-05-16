import React from 'react'
import './style.css'
function Loading() {
  return (
    <div className='loading'>
        <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loading