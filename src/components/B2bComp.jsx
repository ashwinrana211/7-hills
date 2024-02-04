import React from 'react'
import ColorButton from './ColorButton'
import TableComp from './TableComp'

const B2bComp = () => {
  return (
    <>
      <div>
      <div className=" bg-white" style={{paddingTop:"10%"}}>
      <div className=" pt-20 px-5 max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div>
          <div className="text-4xl lg:text-6xl text-left w-full font-btnFont text-black pb-5">
             Himkund Cottages by 7 Hills, Manali
          </div>
        </div>
        <ColorButton text="Back to home" link="/" />
      </div> 
      </div>
      <TableComp />
    </div> 
    <div>
      <div className=" bg-white" style={{paddingTop:"10%"}}>
      <div className=" pt-20 px-5 max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div>
          <div className="text-4xl lg:text-6xl text-left w-full font-btnFont text-black pb-5">
             Sunset Villa, Kasauli
          </div>
        </div>
      </div> 
      </div>
      <TableComp />
    </div> 

    </>
  )
}

export default B2bComp
