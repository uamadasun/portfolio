import React from 'react'

export const Divider = (props) => {
    const {children, headerName} = props;
  return (
    <div class="flex flex-col w-full">
        {/* <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>  */}
        <div class="divider">{headerName}</div> 
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">{children}</div>
    </div>
  )
}
