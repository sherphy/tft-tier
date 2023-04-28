import React from 'react'
import './Page.css'

const Page = () => {
  return (
    <div className='page-container'>
        <div className="page-header">
            <h1>TFT TIER LIST</h1>
            <h2>Set 8.5</h2>
        </div>
        <div className="page-body">
            <div className="page-filter">
                <div className="stage-filter">
                <button className='drop-menu'>Stage</button>
                <div className="stages">
                    <a href='#early'>Early</a>
                    <a href='#mid'>Mid</a>
                    <a href='#late'>Late</a>
                </div>
                </div>
            </div>
            <div className="page-tierlist">
                <div className="page-tierlist-early" id='early'>
                    <h1>Hello</h1>
                </div>
                <div className="page-tierlist-mid">
                    
                </div>
                <div className="page-tierlist-late">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page