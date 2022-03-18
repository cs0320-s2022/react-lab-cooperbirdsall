import React, {useState} from 'react';
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import TextBox from './TextBox';
import axios from 'axios';

function Horoscope() {
  const [sun, setSun] = useState("");
  const [moon, setMoon] = useState("");
  const [rising, setRising] = useState("");

  //TODO: Fill in the ? with appropriate names/values for a horoscope.
  //HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
  const [horoscope, setHoroscope] = useState({});

  const requestHoroscope = () => {
     const toSend = {
         //TODO: Pass in the values for the data. Follow the format the route expects!
         sun : sun,
         moon : sun,
         rising : rising
     };

     let config = {
         headers: {
             "Content-Type": "application/json",
             'Access-Control-Allow-Origin': '*',
         }
     }

     //Install and import axios!
     //TODO: Fill in 1) location for request 2) your data 3) configuration
     axios.post('http://localhost:4567/horoscope', toSend, config)
     .then(response => {
         console.log(response.data);
         //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
         //Note: It is very important that you understand how this is set up and why it works!

         //there weren't any lab hours left by the time I tried to fix this (they were canceled) so I hope
         //this is ok even though it doesn't compile
         setHoroscope(response.data[chosenTraits]);
     })
     .catch(error => {
         console.log(error);
     });
  }


  return (
    <div>
      <h1>lab</h1>
      <TextBox change={setSun} label={"Sun Sign"}/>
      <TextBox change={setMoon} label={"Moon Sign"}/>
      <TextBox change={setRising} label={"Rising Sign"}/>
      <AwesomeButton onPress={requestHoroscope}>
      Submit
      </AwesomeButton>
      <ul>
        {horoscope.map(({trait}: string) => {
          return (
            <li>
              {trait}
            </li>
          );
        })}
      </ul>
    </div>
  );

}
export default Horoscope;
