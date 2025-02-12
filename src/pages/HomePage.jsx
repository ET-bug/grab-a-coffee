import '../index.css';
import MapDisplay from '../components/Map.jsx';
import { Link } from 'react-router-dom';

function NeighbourhoodButton({text}) {
    return (
        <Link className="neighbourhood__button" to={`/neighbourhood/${text}`}>{text}</Link>
    );
}

function HomePage() {
    const neighbourhoods = ["Chelsea","Kensington","Marylebone","Mayfair","Notting Hill","Clerkenwell","City of London","Liverpool Street","Holborn","Soho","Bloomsbury","Covent Garden"];
    const london = [-0.11302, 51.51862];
    const londonZoom = 12;
    
    return (
        <>
            <div className="header">
                <h1>London's best cafes mapped!</h1>
                <h2>Whether you're on the hunt for a spacious place for a coffee chat, 
                    plugs and wifi for working or simply just the best coffee in town, find it here.</h2>
            </div>
        
            <div id="map">
                { MapDisplay(london,londonZoom) }          
            </div>
          
            <div className="neighbourhood">
                {neighbourhoods.map((item) => (
                    <NeighbourhoodButton key={item} text={item} />
                    ))}
            </div>
        </>
    );
}

export default HomePage;

