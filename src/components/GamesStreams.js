import React,{useState,useEffect} from 'react';
import './LiveStreams.css';
import "bootstrap/dist/css/bootstrap.css";
import api from '../api.js';

const GameStream=({match,location})=>{
    const [streamData, setStreamData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await api.get(
          `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
        );
        let dataArray = result.data.data;
        let finalArray = dataArray.map(stream => {
          let newURL = stream.thumbnail_url
            .replace("{width}", "300")
            .replace("{height}", "300");
          stream.thumbnail_url = newURL;
          return stream;
        });
        setStreamData(finalArray);
      };
      fetchData();
    }, [location.state.gameID]);
    return( <div>
            <div className="row">
            {streamData.map(stream => (
            
            <div className="column" key={stream.id}>
                <div className="card">
              <img className="image" alt="" src={stream.thumbnail_url} />
                <h5>{stream.user_name}</h5>
                <div className="live-viewers">
                 <button className="pulse-button"/>
                 <p style={{marginTop:"-7px",marginLeft:"6px"}}>{stream.viewer_count}</p>
                   </div>
                  <a
                    style={{textDecoration:"none"}}
                    href={"https://twitch.tv/" + stream.user_name}
                    target="_blank" rel="noopener noreferrer"
                  >
                     <button className="Game-button">Watch Live</button>
                  </a>
              
              </div>
            </div>
        
        ))}
            </div>
    </div>);
   

}
export default GameStream;