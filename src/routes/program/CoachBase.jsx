const CoachBase = () => {
    return(
        <div>
            <br></br>
            <hr style={{border: "0", height: "0.5px", background: "#bbb"}}></hr>
            <img src={`${process.env.PUBLIC_URL}/assets/img16.png`} style={{width: "350px"}}></img>
            <ui>
                <ol>
                    <li>운영개요</li>
                    <li style={{listStyleType: "square", marginLeft: "20px"}}>대상 : 중, 고등</li>
                    <li style={{listStyleType: "square", marginLeft: "20px"}}>유형 : 학교방문형(단기)</li>
                    <li style={{listStyleType: "square", marginLeft: "20px"}}>과정 : 1일 3차시</li>
                </ol>
                <hr style={{border: "0", height: "0.5px", background: "#bbb"}}></hr>
                <ol>
                    <li>수업 목표 및 기대 효과</li>
                </ol>
            </ui>
            <br></br>
            

        </div>
    );
};

export default CoachBase;