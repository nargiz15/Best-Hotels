import Data from "./../Data/data.js"
import "./../assets/styles/mainMiddle.css"

const MainMiddle = () => {
  return (
    <>
      <div className="container">
        <div className="hotels">
            {Data.map((hotels, key)=>{
                return <div key={key} className="hotelDetails">
                    <img  src={hotels.img}alt="photo" />
                    <h2>{hotels.title}</h2>
                    <ul>
                    <li> <img src={hotels.rates} alt="stars" /></li>
                    <li> <img src={hotels.rates} alt="stars" /></li>
                    <li> <img src={hotels.rates} alt="stars" /></li>
                    <li> <img src={hotels.rates} alt="stars" /></li>
                    <li> <img src={hotels.rates} alt="stars" /></li>
                    </ul>
                
                    <button>{hotels.button}</button>
                    <p>{hotels.text}</p>
                </div>
            })}
        </div>
      </div>
    </>
  )
}

export default MainMiddle