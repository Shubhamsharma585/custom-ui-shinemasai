import React, { useState } from 'react'

import { ExampleComponent } from '@shubhamsharma585/custom-ui-shinemasai'
import '@shubhamsharma585/custom-ui-shinemasai/dist/index.css'




const App = () => {

  
function getbundle(output)
{
     console.log(output)
}


  return (
    <div>
       <ExampleComponent getbundle={getbundle} />
    </div>
  )
}



export default App


 