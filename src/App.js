import "./styles.css";
import data from "./data.json";
export default function App() {
  // const cart = [];
  // const addToCart = (value) => {
  //   cart.push(value);
  //   return false;
  // };

  // console.log(cart);
  return (
    <div className="App">
      {data.map((e, i) => (
        <div key={i}>
          <h1>{e.eventTitle}</h1>
          <p>{e.eventSTD}</p>
          <p>{e.eventSED}</p>
          <p>{e.eventCity}</p>
          <p>{e.eventCountry}</p>
          {e.tickets.map((et, tIndex) => (
            <div key={tIndex}>
              <h3>{et.ticketTitle}</h3>
              <p>{et.price}</p>
              {et.extraServices.map((etx, xI) => (
                <div key={xI}>
                  <ul>
                    <li className="question">{etx.question}</li>
                    {etx.options.map((otx, otI) => (
                      <div key={otI} className="options">
                        <label htmlFor={otx.title}>{otx.title}</label>
                        <span>{`${tIndex}-${xI}-${et.ticketId}`}</span>
                        <input
                          name={`${tIndex}-${xI}-${et.ticketId}`}
                          value={otx.value}
                          type="radio"
                          // onChange={() => addToCart(otx.value)}
                        />
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          {/* {e.cart.map((ca, ic) => (
            <div key={ic}>
              <p>{ca.selectedMonth}</p>
            </div>
          ))} */}
        </div>
      ))}
    </div>
  );
}
