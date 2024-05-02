import { useState } from "react";

const CoachBase = () => {
    const [count, setCount] = useState(1);

    return(
        <div>
            <br></br>
            <hr style={{border: "0", height: "0.5px", background: "#bbb"}}></hr>
            <img src={`${process.env.PUBLIC_URL}/assets/img16.png`} style={{width: "350px"}}></img>
            <ui className="custom_number_list">
                <li>{count}. 운영개요</li>
                <li style={{listStyleType: "square", marginLeft: "10px"}}>대상 : 중, 고등</li>
                <li style={{listStyleType: "square", marginLeft: "10px"}}>유형 : 학교방문형(단기)</li>
                <li style={{listStyleType: "square", marginLeft: "10px"}}>과정 : 1일 3차시</li>
                <hr style={{border: "0", height: "0.5px", background: "#bbb"}}></hr>
                <li>{count+1}. 수업 목표 및 기대 효과</li>
                <li>({count}) 수업 목표</li>
                <li style={{listStyleType: "square", marginLeft: "10px"}}>진로학업설계 지도 과정 중 학업관리지도 영역에서 학생들의 자기주도 학습 능력을 함양하는 것에 교육의 목적을 둔다.</li>
                <li style={{listStyleType: "square", marginLeft: "10px"}}>학생들은 주간플래닝의 원리를 배우고, 직접 실습하는 훈련을 거쳐 자신에게 알맞은 시간 관리법을 터득하며, 이를 통해 스스로 목표를 수립하고 성취하는 경험을 기대하며, 학교 생활에 자신감을 갖는다.</li>
                <li>({count+1}) 기대효과</li>
                <li>{count}) 주간시간설계표를 통해 자신의 가용시간을 인식하고 시간을 관리할 수 있다.</li>
                <li>{count+1}) 주간목표 수립으로 교과와 비교과간의 균형 잡힌 학교생활을 계획할 수 있다.</li>
                <li>{count+2}) 일일 단위로 계획의 우선순위를 설정하여 실행할 수 있다.</li>
                <li>{count+3}) 피드백의 과정을 거쳐 자신이 작성한 계획을 점검·수정할 수 있다.</li>
                <li>{count+4}) 습관이 주는 유익을 이해하고, 지속가능한 학습 습관을 형성할 수 있다.</li>
                <hr style={{border: "0", height: "0.5px", background: "#bbb"}}></hr>
                <li>{count+2}. 교육 커리큘럼</li>
                <li>({count}) 교육 계획</li>
                <div style={{float: "left", width: "30%"}}>
                <li style={{listStyleType: "square", marginLeft: "10px"}}>1교시 - 눈으로 직접 확인하고 인식하는 주간플래닝 (주간시간설계표)</li>
                <li style={{listStyleType: "square", marginLeft: "10px"}}>2교시 - 균형 잡힌 학교생활을 위한 주간플래닝 (주간목표, 일일계획, 피드백)</li>
                <li style={{listStyleType: "square", marginLeft: "10px"}}>3교시 - 지속 가능한 실행을 위한 습관 형성 프로젝트 & 수업 회고</li>
                </div>
                <div style={{float: "right", width: "60%", marginLeft: "10px"}}>
                <img src={`${process.env.PUBLIC_URL}/assets/img17.jpg`} style={{width: "350px"}}></img>
                </div>
            </ui>
            <br></br>
            

        </div>
    );
};

export default CoachBase;