import first from '../assets/First.jpg'
import second from '../assets/Second.jpg'
import third from '../assets/Third.jpg'
import fourth from '../assets/Fourth.jpg'
import fifth from '../assets/Fifth.jpg'
import sixth from '../assets/Sixth.jpg'
import { useState, useEffect } from "react"


const myImgs = [first, second, third, fourth, fifth, sixth]

function Videos() {
    const [count, setCount] = useState(0);

    const myStyle = {
        backgroundImage: `url(${myImgs[count]})`,
    }

    useEffect(() => {
        const id = setInterval(() => {
            setCount((count) => (count + 1) % 6);
        }, 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className='videos' style={myStyle}>
            
        </div>
    )
}

export default Videos