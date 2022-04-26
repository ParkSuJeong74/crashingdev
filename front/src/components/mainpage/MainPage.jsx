import styled from 'styled-components'
import bgImg from '../../srcAssets/img/main-Img.png'
import mainpage from '../../srcAssets/style/Mainpage.module.css'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import Chart from './Chart.jsx'
import bgVideo from '../video/bgVideo.mp4'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Intro from './Intro.jsx'

function MainPage() {
  const el = useRef(null)
  const typed = useRef(null)

  useEffect (() => {
    const options = {
        strings: [
            'Happy?', 'Unhappy?'
        ],
        typeSpeed: 100, 
        backSpeed: 100, 
        loop: true,
        showCursor: false,
    }

    typed.current = new Typed(el.current, options)

    return () => {
        typed.current.destroy()
    }
  }, [])

  return (
    <>
    {/* <MainImg /> */}
    <video autoPlay loop muted className={mainpage.bgVideo}>
      <source src={bgVideo} type="video/mp4" />
    </video>

    <div className={mainpage.greetingContainer}>
      <span className={mainpage.greetingWord1}>Are you </span>
      <p className = {mainpage.greetingWord2} ref={el}></p>
    </div>

    <div className={mainpage.decoration}></div>

    <div style={{fontSize: '110px'}}>
      <KeyboardArrowDownIcon fontSize="inherit" className={mainpage.scrollIcon1}/>
      <KeyboardArrowDownIcon fontSize="inherit" className={mainpage.scrollIcon2}/>
    </div>

    {/* <Chart></Chart> */}
    <Intro></Intro>
    </>
  )
}
export default MainPage

const MainImg = styled.div`
  background-image: url(${bgImg});
  height: 100vh;
  opacity: 0.8;
  background-size: cover;
  background-position: 60%;
  position: relative;
`;

