import React from 'react';
import { Row, Col, Bottom } from "antd";
import { useParams } from 'react-router-dom';
import moment from 'moment';
import useFetch from "../../hooks/useFetch"
import {URL_API, API} from "../../utils/constant";
import Loading from "../../components/Loading";

import "./Movie.scss";

export default function Movie() {
  const {id} = useParams();
  const movieInfo = useFetch(
    `${URL_API}/movie/${id}?api_key=${API}&language=es-ES`
  );

  if(movieInfo.loading || !movieInfo.result){
    return ( <Loading/>)
  }else{

    return(
      <RenderMovie movieInfo={movieInfo.result}/>
    )

  }
  
}

function RenderMovie(props){
  const { movieInfo: {title, backdrop_path} } = props;
  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  
  return (
    <div className="movie" style={{backgroundImage: `url('${backdropPath}')`}}>
      <div className="movie-dark"/>
     <Row>
       <Col span={8} offset={3} className="movie-poster">
         Caratula
       </Col>
       <Col span={10} className="movie-info">
          more info ...
       </Col>
     </Row>
    </div>
  )
}
