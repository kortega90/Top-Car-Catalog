import './styles.css'
import CarImg from '../../../assets/car-card.png'
import ButtonPrimary from '../../../components/ButtonPrimary';
import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';
import CaralogCard from '../../../components/CatalogCard';

export default function Catalog() {

    return (
        <>
            <Header />
            <main className='ct-calog-main'>
                <section id="ct-catalog-section"   >

                    <div className="ct-search-bar-container ">
                        <SearchBar />
                    </div>


                    <div className="ct-catalog-cards-container">
                    <CaralogCard />
                    <CaralogCard />
                    <CaralogCard />
                    <CaralogCard />
                    <CaralogCard />
                    <CaralogCard />
                    <CaralogCard />
                    <CaralogCard />
                    <CaralogCard />
                    </div>

                </section>
            </main>

        </>
    );
}