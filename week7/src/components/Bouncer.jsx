import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function Bouncer() {
    const {name} = useParams();
    const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {navigate("/lab");}, 2000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return(
    <div>
      <h2>Bouncer</h2>
      <p>Bounced Name: {name}</p>
    </div>
  );
}