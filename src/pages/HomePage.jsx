import '../index.css';
import MapDisplay from '../components/Map.jsx';
import { Link } from 'react-router-dom';

function NeighbourhoodButton({text,handleClick}) {
    return (
    <button className="neighbourhood__button" onClick={handleClick}>{text}</button>
    );
}

function buttonClick() {

}



function HomePage() {
    const neighbourhoods = ["Chelsea","Kensington","Marylebone","Mayfair","Notting Hill","Clerkenwell","City of London","Liverpool Street","Holborn","Soho","Bloomsbury","Covent Garden"];
    const london = [-0.11302, 51.51862];
    
    return (
        <>
            <div className="header">
                <h1>London's best cafes mapped!</h1>
                <h2>Whether you're on the hunt for a spacious place for a coffee chat, 
                    plugs and wifi for working or simply just the best coffee in town, find it here.</h2>
            </div>
        
            <div id="map">
                { MapDisplay(london) }          
            </div>
          
            <div className="neighbourhood">
                {neighbourhoods.map((item) => (
                    <NeighbourhoodButton key={item} text={item} handleClick={()=>buttonClick} />
                    ))}
            </div>
        
    
        
        </>
    );



}

export default HomePage;

