import React from "react";
import photo from "../../src/funny.png";
import Button from "./Button";
import background from "../background.jpg";

const Joke = () => {
    const [joke, setJoke] = React.useState("");

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    return (
        <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundSize: "cover", backgroundPosition: "center" }}>
            <img className="card-img-top" src={photo} alt="Card image cap" style={{ width: "20%", height: "20%" }} />
            <div className="card-body" style={{ textAlign: "center" }}>
                <p style={{ backgroundColor: "black", color: "yellow", fontSize: "large", padding: "10px", borderRadius: "5px" }}>{joke}</p>
                <Button callApi={fetchApi} />
            </div>
        </div>
    );
};

export default Joke;
