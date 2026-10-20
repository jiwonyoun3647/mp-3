import styled from "styled-components";

const StyledHeader = styled.header`
    background-color:#8b9a6e;
    padding: 0.7%;

    h1 {
        margin-left: 4%;
    }

    p {
        margin-left: 5%;
    }
    
    @media screen and (max-width: 750px) {
        text-align: center;
        
        h1, p {
            margin-left: 0;
        }
    }
`;

export default function Header() {
    return(
        <StyledHeader>
            <h1>Jiwon Youn</h1>
            <p> Youn's Online Resume</p>
        </StyledHeader>
)
}