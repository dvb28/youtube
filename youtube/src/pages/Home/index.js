import React from 'react'
import MyModal from '~/components/DragDropdown'

export default function Home() {
  return (
    <>
      Home
      <div>
        <MyModal 
          dropdownStyle={{width: 360, height: 602.4, top: 0, left: 0}}
          title='Trợ giúp'
          parent={
            <div>Button</div>
          }
        >
          Childrent
        </MyModal>
      </div>
    </>
  )
}
