import styled from "styled-components";

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    
    img{
        width: 30%;
    }
`;

export default function Education() {
    return(
        <>
            <h3><strong>Education</strong></h3>
            <StyledLogo>
                <img src="/bu_logo.png" alt="university-logo"/>
                <img src="/catslogo.png" alt="highs-logo"/>
            </StyledLogo>
            <p>
                <strong><em><u>Boston University </u></em> <br/>Boston, MA </strong>
                <br/>Bachelor of Arts in Computer Science, Minor in Economics
                <br/> September 2022 - May 2028 (Expected Graduation)
            </p>

            <p>
                <strong><em><u>CATS Academy Boston</u></em> <br/>Braintree, MA </strong>
                <br/>High School Diploma
                <br/>September 2020 - May 2022
            </p>
        </>
    )

}