import { TypeAnimation } from "react-type-animation";
import styles from '@/styles/Home.module.css';

export default function HomeScreen() {
    return (
    <>
            <div className="video-background">
                    <iframe src="https://www.youtube.com/embed/Y8m9UjjD0Zc?autoplay=1&mute=1&controls=0&showinfo=0&fs=0&vq=hd1080&nablejsapi=1&loop=1&playlist=Y8m9UjjD0Zc" width={'100%'} height='500px' 
          frameBorder='0'></iframe>
                <TypeAnimation
                style={{position:'absolute',left:'25%',top:'10%',fontSize:'2rem',fontFamily:'futura'}}
                    sequence={[
                        "ULISES MORA ", // Types 'One'
                        1000, // Waits 1s
                        "ULISES MORA COMPUTER ENGINEER ", // Types 'One'
                        1000,
                        "ULISES MORA COMPUTER ENGINEER & VIDEOGAME/AR/VR DEVELOPER ", // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                    ]}
                    wrapper="span"
                    cursor={true}

                    
                />
            </div>

          
            </>
            )
}
