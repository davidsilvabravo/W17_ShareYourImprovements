import { useState, useEffect } from "react";
import * as API from "../services/getData";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import "./Home.css";

export function Home() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    API.getData()
      .then((res) => {
        setData(res.movies);
        setLoaded(true);
      })
      .catch(console.log);
  }, []);

  return (
    <>
    </>
  );
}
