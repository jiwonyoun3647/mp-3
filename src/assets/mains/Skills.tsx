import styled from "styled-components";

const StyledLangLogos = styled.div`
    display: flex;
    justify-content: center;

    img{
        width: 19%;
        margin: 1%;
        margin-bottom: 4%;
    }
`;

export default function Skills() {
    return(
        <>
            <title>Skills | Youn's Resume</title>
            <h3><strong>Technical Skills & Coursework</strong></h3>
            <StyledLangLogos>
                <img src="/python_logo.png" alt="Python Logo"/>
                <img src="/java_logo.png" alt="Java Logo"/>
                <img src="/c_logo.png" alt="C Logo"/>
            </StyledLangLogos>

            <p>
                <strong><u>Programming Languages: </u></strong>
                <strong>Python, Java, C, SQL, HTML/CSS</strong>
            </p>
            <p>
                <strong><u>Systems & Tools: </u></strong>
                <strong>Git, Linux, GDB, Valgrind, Make, SQLite, x86-64 Assembly, MongoDB </strong>
            </p>
            <p>
                <strong><u>Relevant Coursework: </u></strong>
                <strong>Computer Systems, Geometric Algorithms, Statistics, Data Structure, Database Systems</strong>
            </p>
        </>
    )
}
