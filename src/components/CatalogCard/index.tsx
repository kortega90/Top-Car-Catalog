import './styles.css'
import CarImg from '../../assets/car-card.png'
import ButtonPrimary from '../ButtonPrimary';

export default function CaralogCard() {
    return (
        <>
            <div className="ct-card ct-container">
                <img src={CarImg} alt="carNodel" />
                <h3>Audi Supra TT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                <ButtonPrimary/>
            </div>
        </>

    );
}