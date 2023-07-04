import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>홈</h1>
            <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠</p>
            <ul>
                <li><Link to="/app">Link App</Link></li>
                <li><Link to="https://www.naver.com">Naver</Link></li>
                <li><a href="/app">App</a></li>
                <li><a href="https://www.naver.com">Naver</a></li>
            </ul>
        </div>
    );
}

export default Home;