import {createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import Projects from "./assets/mains/Projects.tsx";
import Experience from "./assets/mains/Experience.tsx";
import Education from "./assets/mains/Education.tsx";
import Contact from "./assets/mains/Contact.tsx";
import Skills from "./assets/mains/Skills.tsx";
import Home from "./assets/mains/Home.tsx";
import Activities from "./assets/mains/Activities.tsx";

import Footer from "./assets/components/Footer.tsx";
import Header from "./assets/components/Header.tsx";
import Nav from "./assets/components/Nav.tsx";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Trirong", Helvetica, sans-serif;
    }
`;

const StyledMain = styled.main`
    width:70%;
    font-size: calc(3px + 1.5vw);
    padding: 3%;
    background-color: #eeeeee;
    
    ul{
        list-style-type: square;
        padding-left: 3%;
    }

    li{
        padding-bottom: 1.3%;
    }

    p{
        margin-top: 3%;
    }

    h3 {
        margin-bottom: 2%;
        margin-left: 2%;
        font-size: calc(9px + 1.5vw);
        font-family: "Helvetica", "Arial", sans-serif;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
    
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const StyledWrapper = styled.div`
    background-color: #f7f2eb;
    width: 80%;
    margin: 0 auto;
`

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    min-height: 140vh;
    background-color: #eeeeee;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        min-height: 100vh;
    }
`

function Root() {
    return(
        <>
            <GlobalStyle />

            <StyledWrapper>
                <Header />
                <StyledContainer>
                    <Nav />
                    <StyledMain>
                        <Routes>
                            <Route path="/*" element={<Home/>}/>
                            <Route path="/projects/*" element={<Projects/>}/>
                            <Route path="/experience/*" element={<Experience/>}/>
                            <Route path="/education/*" element={<Education/>}/>
                            <Route path="/skills/*" element={<Skills/>}/>
                            <Route path="/activities/*" element={<Activities/>}/>
                            <Route path="/etc/*" element={<Contact/>}/>
                        </Routes>
                    </StyledMain>
                </StyledContainer>
                <Footer />
            </StyledWrapper>

        </>
    )
}

export default function App() {
  const router=createBrowserRouter(
      [
          {path:'*', Component:Root}
      ]
  )

    return (
      <RouterProvider router={router}/>
  );
}