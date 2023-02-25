import './styles.css'
export default function SearchBar() {

    return (
        <>
            <form className="ct-searh-bar ct-container">
                <input className="ct-form-control" type="text" placeholder="Digite sua busca" />
                <button className="ct-search-bar-sudmit" type="submit">Buscar</button>
            </form>
        </>
    );
}