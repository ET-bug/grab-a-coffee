import '../index.css';
import MapDisplay from '../components/Map.jsx'


function NeighbourhoodPage() {
    
    const coventGarden = [-0.12348, 51.51403];
    
    return (
        <>
            <div className="header">
                <h1>Covent Garden</h1>
                <h2>Covent Garden is known for...</h2>
            </div>
        
            <div id="map">
                { MapDisplay(coventGarden) }          
            </div>
        
        </>
    );



}

export default NeighbourhoodPage;