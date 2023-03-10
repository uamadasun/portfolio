import React from 'react'

export const Divider = (props) => {
    const {children, headerName} = props;
  return (
    <div className="flex flex-col w-full">
        {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>  */}
        <div className="divider">{headerName}</div> 
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">{children}</div>
    </div>
  )
}
