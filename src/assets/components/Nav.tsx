import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: #eae2d6;
    ul {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-direction: column;
    }

    li{
        background-color: #fff5f5;
        margin: 8%;
        padding: 3%;
        text-align: center;
    }

    a{
        color: #092328;
        text-decoration: none;
        font-size: calc(2px + 1.5vw);
    }

    @media screen and (max-width: 750px){
        width: 100%;

        ul{
            padding-left: 0;
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        li{
            margin: 0.6%;
            padding: 0.2%;
        }

        a{
            color: #124d1c;
        }
    }
`;

export default function Nav() {
    return(
        <StyledNav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/education"}>Education</Link></li>
                <li><Link to={"/skills"}>Technical Skills</Link></li>
                <li><Link to={"/experience"}>Work Experience</Link></li>
                <li><Link to={"/projects"}>Projects</Link></li>
                <li><Link to={"/activities"}>Activities</Link></li>
                <li><Link to={"/etc"}>Contact</Link></li>
            </ul>
        </StyledNav>
    )
}