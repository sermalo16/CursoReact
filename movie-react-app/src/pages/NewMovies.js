import React, { useState, useEffect} from 'react';
import { Row, Col } from "antd";
import {URL_API, API} from "../utils/constant";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";
import PaginationMovie from "../components/PaginationMovie"

export default function NewMovies() {
  const [ movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/now_playing?api_key=${API}&language=es-Es&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  },[page])

  const onChangePage = page =>{
    setPage(page);
  }

  console.log(movieList.total_results)

  return (
    <Row>
      <Col span="24" style={{textAlign: 'center', marginTop:25}}>
        <h1 style={{fontSize: 35, fontWeight: 'bold'}}>
          Ultimo Lanzamientos
        </h1>
      </Col>

      {movieList.results ? (
        <Row>
          <Col span="24" style={{display: "flex", flexWrap: "wrap"}}>
            <MovieCatalog movies={movieList}/>
          </Col>
          <Col span="24">
            <PaginationMovie 
            currentPage={movieList.page}
            totalItems={movieList.total_results}
            onChangePage={onChangePage}
             />
          </Col>
        </Row>
        
      ): (
        <Col span="24"><Loading/></Col>
      )}
      


      <Col span={24}>
        <Footer/>
      </Col>
    </Row>
  );
}
