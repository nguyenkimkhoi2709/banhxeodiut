import CustomImage from "./CustomImage"

import pro1 from '../assets/pro1.jpg'
import pro2 from '../assets/pro2.jpg'
import pro3 from '../assets/pro3.jpg'

export default function HeroSection(){
    const images = [
        pro1,
        pro2,
        pro3,
        pro1,
        pro2,
        pro3,
        pro1,
        pro2,
        pro3
    ]
    return (
        <div className="section hero" style={{ paddingTop: '16px' }}>
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}