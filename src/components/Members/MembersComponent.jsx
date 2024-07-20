import gourmet from './members.module.css';
import juan from '../../assets/images/imagenes/juan.jpeg';
import dayana from '../../assets/images/imagenes/dayana.jpeg';
import guadalupe from '../../assets/images/imagenes/guadalupe.jpeg';
import baldo from '../../assets/images/imagenes/baldo_2.jpg';

const arreglos = [
    {
        id: 1,
        img: dayana,
        nombre: 'Dayana',
        pais: 'Mexico',
        cargo: 'Deliverwoman',
        empresa: 'Gourmet Tamales',
        testimonio: '"She will be in charge of receiving the orders and delivering them in the shortest time posible, keeping the tamales safe"'
    },
    {
        id: 2,
        img: juan,
        nombre: 'Juan',
        pais: 'Mexico',
        cargo: 'Chef',
        empresa: 'Gourmet Tamales',
        testimonio: '"He will ensure that all the tamales are prepared in the best way, so that they are made in the most tradicional way, preserring their flavor"'
    },
    {
        id: 3,
        img: guadalupe,
        nombre: 'Guadalupe',
        pais: 'Mexico',
        cargo: 'Saleswoman',
        empresa: 'Gourmet Tamales',
        testimonio: '"She Will be in change of selling and givivng the tamales an image, trying to be friendly to customers giving a Good image to the company"'
    },
    {
        id: 4,
        img: baldo,
        nombre: 'Baldomero',
        pais: 'Mexico',
        cargo: 'Developer',
        empresa: 'Gourmet Tamales',
        testimonio: '"He involves writing code to créate maintain or improve software, web, mobile or computer systems.This includes tasks such as designing, programming testing"'
    }
];

const MembersComponent = () => {
    return (
        <>
            {arreglos.map((testimonios) => (
                <section key='' className={gourmet.contenedor_testimonio}>
                    <img className={gourmet.imagen_testimonio} src={testimonios.img} alt="foto testimonio" />
                    <div className={gourmet.contenedor_texto}>
                        <p className={gourmet.nombre}><strong>{testimonios.nombre}</strong> from {testimonios.pais}</p>
                        <p className={gourmet.cargo}>{testimonios.cargo} of <strong>{testimonios.empresa}</strong></p>
                        <p className={gourmet.testimonio}>{testimonios.testimonio}</p>
                    </div>
                </section>
            ))}
        </>
    )
}

export default MembersComponent