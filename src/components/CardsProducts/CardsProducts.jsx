import React from 'react';
import './cardsproducts.css';
import Swal from 'sweetalert2';

const CardsProducts = () => {

    function showAlert2 () {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Product Has Been Added",
            showConfirmButton: false,
            timer: 1500
          });
    }

    return (
        <>
            <section>
                <div className="container_product">
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                    <div className='card'>
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/ZC7ebwvPHCdPs0aZpzWcPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/animal_gourmet_468/fd8e18769595b0a88de2481966e130c1"
                            alt="Denim Jeans"
                            style={{ width: '100%' }}
                        />
                        <h2>Mole Tamale</h2>
                        <p className='price'>$19.99</p>
                        <p>Tamales with mole and chicken</p>
                        <p><button onClick={showAlert2}>Add to Cart</button></p>
                    </div>
                </div>
            </section>

        </>
    );
}

export default CardsProducts;
