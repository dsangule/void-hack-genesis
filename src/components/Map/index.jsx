import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { useEffect, useState } from "react"

export default function Map(props) {
    const { position, zoom } = props
    const [healthcareData, setHealthcareData] = useState([]);
    const [dataLoaded,  setDataLoaded] = useState(false);

    useEffect(()=>{
        const apiUrl = 'https://api.geoapify.com/v2/places';
        const categories = 'healthcare';
        const apiKey = 'b1c0fb18abaf40feb68e733da9a18d3d';
        const limit = 30;
        const lng = position[1];
        const lat = position[0];
    
        const url = `${apiUrl}?categories=${categories}&apiKey=${apiKey}&limit=${limit}&filter=circle:${lng},${lat},5000&bias=proximity:${lng},${lat}`;
    
        fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("this", data.features);
            setHealthcareData(data.features)
            setDataLoaded(true);
            console.log("data loaded")
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    }, [])

    console.log("healthcareData", healthcareData)

    return (dataLoaded)?<MapContainer center={position} zoom={zoom} scrollWheelZoom={false} className="h-screen">
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {healthcareData.map((item)=>{
        return <Marker position={[item.properties.lat, item.properties.lon]}>
            <Popup>
                <b>
                    {item.properties.name}
                </b> <br />
                Address: {item.properties.address_line1}, {item.properties.address_line2} <br />
            </Popup>
        </Marker>
    })}
</MapContainer>:<div>Loading...</div>
}