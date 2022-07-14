export default function Footer(){
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">Bánh xèo Dì Út</p>
                <p>FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
                <p>&copy; 2022 | NKK</p>
            </div>
            <div className="footer-section">
                <p className="title">Liên Hệ</p>
                <p><a style={{ color: '#ffffff', textDecoration: 'underline' }} href="mailto:email@example.com">banhxeodiut@gmail.com</a></p>
                <p><a style={{ color: '#ffffff', textDecoration: 'underline' }} href="tel:(+84)339062279">(+84)339062279</a></p>
                <p>102c8 Giảng Võ - Ba Đình - Hà Nội</p>
            </div>
            <div className="footer-section">
                <p className="title">Mạng Xã Hội</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
    )
}