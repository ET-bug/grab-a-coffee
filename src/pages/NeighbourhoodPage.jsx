import '../index.css';
import MapDisplay from '../components/Map.jsx'
import { useParams } from 'react-router-dom';


function NeighbourhoodPage() {
    //neighbourhood zoom should be closer 
    const neighbourhoodZoom = 14;

    const neighbourhoodData = {
        Kensington: {
            center: [-0.1905, 51.4934],
            description: "Kensington boasts a refined café scene with elegant spots serving artisanal coffee and classic British pastries. It's known for its upscale ambiance and proximity to the beautiful Kensington Gardens.",
        },
        Marylebone: {
            center: [-0.1580, 51.5205],
            description: "Marylebone is characterized by its chic cafés and gourmet food options, offering a trendy vibe perfect for brunching. It's famous for its unique boutiques and the nearby Baker Street.",
        },
        Mayfair: {
            center: [-0.1505, 51.5103],
            description: "Mayfair is known for its luxury cafés and fine dining experiences, catering to a sophisticated crowd. The area exudes elegance, with many venues featuring opulent interiors and exclusive menus.",
        },
        NottingHill: {
            center: [-0.1996, 51.4803],
            description: "Notting Hill is famous for its vibrant and eclectic café culture, with charming spots offering diverse cuisines. Known for its colorful houses and lively markets, the area attracts a trendy crowd.",
        },
        Clerkenwell: {
            center: [-0.1067, 51.5262],
            description: "Clerkenwell features a mix of hipster cafés and traditional coffee shops, attracting creatives and professionals alike. It's known for its historic charm and a rich culinary scene.",
        },
        CityOfLondon: {
            center: [-0.0890, 51.5155],
            description: "The City of London offers a unique blend of historic pubs and modern cafés, serving the busy work crowd. It's known for its fast-paced atmosphere and innovative food options.",
        },
        LiverpoolStreet: {
            center: [-0.0852, 51.5200],
            description: "Liverpool Street is home to a bustling café scene, ideal for quick bites and after-work meet-ups. The area is vibrant, with a mix of business professionals and socialites enjoying the nightlife.",
        },
        Holborn: {
            center: [-0.1132, 51.5183],
            description: "Holborn features a variety of cafés ranging from cozy spots to stylish eateries, popular among students and office workers. It's known for its central location and proximity to legal and educational institutions.",
        },
        Soho: {
            center: [-0.1357, 51.5124],
            description: "Soho is renowned for its lively and diverse café scene, with trendy spots offering global cuisines and artisanal coffees. The area is famous for its vibrant nightlife and cultural experiences.",
        },
        Bloomsbury: {
            center: [-0.1260, 51.5200],
            description: "Bloomsbury is known for its quaint cafés and literary vibe, making it a favorite among students and academics. The area is celebrated for its historic charm and proximity to the British Museum.",
        },
        CoventGarden: {
            center: [-0.12348, 51.51403],
            description: "Covent Garden features a bustling café scene with a mix of street performers and boutique shops. It's famous for its vibrant atmosphere and diverse dining options, attracting both tourists and locals.",
        },
        Chelsea: {
            center: [-0.16337, 51.48761],
            description: "Chelsea is known for its upscale cafés with a chic atmosphere, perfect for a leisurely afternoon tea. The area is characterized by its stylish residents and beautiful riverside views.",
        },
    };

    //receive the parameter name from the router link
    const {name} = useParams();
    //extract the correct neighbourhood
    const currentNeighbhourhood = neighbourhoodData[name] 
    
    return (
        <>
            <div className="header">
                <h1>{name}</h1>
                <h2>{currentNeighbhourhood.description}</h2>
            </div>

            
            <div id="map">
                { MapDisplay(currentNeighbhourhood.center,neighbourhoodZoom) }          
            </div>
            
        
        </>
    );



}

export default NeighbourhoodPage;