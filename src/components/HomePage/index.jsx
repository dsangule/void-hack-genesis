"use client";
import Navbar from "../Navbar"
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

function HomePage() {

  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  const [mensen, setMensen] = useState([]);
  const [location, setLocation] = useState([]);

  const fetchApiData = async ({ latitude, longitude }) => {
      const res = await fetch(`https://openmensa.org/api/v2/canteens?near[lat]=${latitude}&near[lng]=${longitude}&near[dist]=50000`);
      const data = await res.json();
      setMensen(data);
  };

  useEffect(() => {
      if('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(({ coords }) => {
              const { latitude, longitude } = coords;
              setLocation([ latitude, longitude ]);
          })
      }
  }, []);

  useEffect(() => {
    if (location) {
        fetchApiData(location);
    }
  }, [location]);

  return (
    <div className="bg-[url('/emergency-bg.png')] bg-fixed h-screen overflow-scroll overflow-x-hidden">
      <Navbar />
      <div className="bg-white bg-opacity-70 w-3/4 max-h-3/4 mx-auto mt-[10vh] mb-4 px-24 py-[5vw]">
        <p className=" text-3xl mb-5 text-center" style={{
          fontWeight: 'bold'
        }}>
         First Responders Alliance
        </p>
        <p className="text-justify">
        First Responders Alliance is a user-friendly website dedicated to locating nearby healthcare services and offering essential information on common emergency procedures. It simplifies the process of finding hospitals, urgent care centers, and pharmacies based on proximity, ensuring quick access to medical assistance. Beyond listings, it provides clear instructions and visual aids for emergencies like CPR, burns, and allergic reactions, empowering users to act confidently in critical situations. Real-time updates and personalized features enhance user safety and convenience, making HealthTrackers an indispensable tool for staying informed and prepared during healthcare emergencies, whether at home or on the go.
        </p>
      </div>
      <Map position={location} zoom={14} />
    </div>
  )
}

export default HomePage