import styled from "styled-components";

const StyledMe = styled.img`
    display: block;
    margin: auto;
    margin-bottom: 5%;
    max-width: 40%;
`;

export default function Home() {
    return(
        <>
            <title>Home | Youn's Resume</title>
            <h3><strong>Home</strong></h3>
            <StyledMe src="/my_img.jpeg" alt="Jiwon Youn Photo"/>
            <p>My name is Jiwon Youn, and I'm a student at Boston University majoring in Computer Science and minoring
                in Economics.
                <br/>I have strong interests in automation system integrating with LLMs and backend infrastructure.
                <br/> I am currently seeking for the summer internship program in 2027 as a software engineering intern,
                and I am prepared to continue my journey with my strong passion and responsibilities!
                <br/><br/> If you are interested, check out for more information about me!
                <br/> You can find my Education, Work Experience, Skills, etc.</p>
        </>
    )
}