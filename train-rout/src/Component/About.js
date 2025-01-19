import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();//perpindahan antar halaman

    const hanleClick = () => {
        navigate('../Home');
    };
return (
    <>
        <h2>ini halaman about</h2>
        <br/>
        <button onClick={hanleClick}>
            klik menuju home
        </button>
    </>
)
};

export default About;