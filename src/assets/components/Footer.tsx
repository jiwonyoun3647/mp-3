import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding-left: 1%;
    background-color: #8b9a6e;
`;

export default function Footer() {
    return(
        <StyledFooter>
            <p>All Rights Reserved by Jiwon Youn <a href="">Credits</a>&#169;</p>
        </StyledFooter>
    )
}