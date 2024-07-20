import logo from '../../assets/images/logo.png'
import './logoslogan.css';

const LogoSloganComponent = () => {
    return (
        <>
            <section>
                <div className="container_logo_description">
                    <div>
                        <div className="logo_tamales">
                            <img src={logo} alt="tamales gourmet" />
                        </div>
                        <p>Discover the Artisanal Flavor in Each Tamal!</p>
                    </div>
                    <div className="description_logo">
                        This logo is representative of a business that specializes in gourmet tamales, transmitting an image of high quality, authenticity and tradition. The combination of vibrant colors, detailed tamale design and decorative elements suggest that "Tamales Delight Gourmet" offers carefully crafted products with a special touch.
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogoSloganComponent