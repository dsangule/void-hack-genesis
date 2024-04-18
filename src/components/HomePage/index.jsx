import Navbar from "../Navbar"

function HomePage() {


  return (
    <div className="bg-[url('/emergency-bg.png')] bg-fixed h-screen overflow-scroll overflow-x-hidden">
      <Navbar />
      <div className="bg-white bg-opacity-70 w-3/4 max-h-3/4 mx-auto mt-[10vh] mb-4 px-24 py-[5vw]">
        <p className=" text-xl mb-5 text-center" style={{
          fontSize:'55px',
          fontWeight: 'bold'
        }}>
         First Responders Alliance
        </p>
        <p className="text-center " style={{
          fontSize:'25px',
          fontWeight:'bolder',
          marginBottom: '30px',
          marginTop: '30px'
        }}>
          Uniting for rapid action.
        </p>
        <p className="text-justify " style={{
          fontSize:'17px',
          

        }}>
          The SOS button serves as a direct link to the vehicle's emergency assistance system. When you press it, you are immediately connected to a 24/7 response center. An agent at the dispatch center receives your call and assesses the situation. They can then dispatch the necessary emergency service providers to your precise location. Simultaneously, the system uses GPS technology to determine your exact position.
          The GPS coordinates are transmitted to the operator, eliminating the need for you to know your location. Ambulance Services: If you or someone else requires medical attention.Hospital Directions: While it doesn't directly show nearby hospitals, the dispatched emergency services can guide you to the nearest medical facility. Remember, pressing the red SOS button should be reserved for genuine emergencies. It's a powerful tool that can save lives by swiftly connecting you to the help you need when seconds count.
        </p>
        <center>
          <button className="w-36 h-12 rounded-2xl bg-red-600 text-3xl font-bold text-white mt-5">
            SOS
          </button>
        </center>
      </div>
    </div>
  )
}

export default HomePage