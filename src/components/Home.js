import styled from 'styled-components';
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import award from './Award';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import Award from './Award';

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let awards = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        console.log("hello");
        db.collection("movies").onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            console.log(awards);
            switch (doc.data().type) {
              case "awards":
                awards = [...awards, { id: doc.id, ...doc.data() }];
                break;
    
              case "new":
                newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                break;
    
              case "original":
                originals = [...originals, { id: doc.id, ...doc.data() }];
                break;
    
              case "trending":
                trending = [...trending, { id: doc.id, ...doc.data() }];
                break;
            }
          });
       
          dispatch(
            setMovies({
              award: awards,
              newDisney: newDisneys,
              original: originals,
              trending: trending,
            })
          );
        });
      }, [userName]);


    return (
        <Container>
           <ImgSlider />
           <Viewers />
           <Award />
           <NewDisney />
           <Originals />
           <Trending />
        </Container>
    )
};


const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    
    &:before{
        background: url("/images/home-background.png") center center /cover no-repeat fixed;
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;

    }
    
`
export default Home;