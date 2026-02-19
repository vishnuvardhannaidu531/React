// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import List from '../List.jsx'
// import Clock from '../clock.jsx'

// // console.log(<h1>Hello</h1>)

// //To check for thrje how react elements are light weighted elements
// // const element=document.createElement("h1")
// // element.textContent="Hello"
// // console.dir(element)


// createRoot(document.getElementById('root')).render(
//   // // <App>
//   // //   <Header></Header>
//   // //   <Main></Main>
//   // //   <FOOTER></FOOTER>
//   // // </App>
//   // <App/>
//         // <StrictMode>
//         //   <App/>
//         // </StrictMode>
//         // <List></List>

//         <Clock></Clock>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Clock from '../clock.jsx'

createRoot(document.getElementById('root')).render(
    <Clock></Clock>
)

