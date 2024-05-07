import { useState } from "react";

const CoachBasic = () => {
    const [count, setCount] = useState(1);

    return(
        <div>
            <br></br>
            <hr style={{border: "0", height: "0.5px", background: "#bbb"}}></hr>
            <br></br>
            <img src={`${process.env.PUBLIC_URL}/assets/img18.png`} style={{width: "500px", height: "60px"}}></img>
            <ui className="coachBase-list">
                <li className="coachBase-list-sub1">{count}. 운영개요</li>
                <li className="coachBase-list-sub2">대상 : 고등</li>
                <li className="coachBase-list-sub2">유형 : 학교방문형(장기)</li>
                <li className="coachBase-list-sub2">과정 : 1일 3차시 4회 진행 (주1회 권장)</li>
                <hr style={{border: "0", height: "0.5px", background: "#bbb", marginTop: "40px"}}></hr>
                <li className="coachBase-list-sub1">{count+1}. 수업 목표 및 기대 효과</li>
                <li className="coachBase-list-sub3">({count}) 수업 목표</li>
                <li className="coachBase-list-sub2">진로학업설계 지도 과정 중 학업관리지도 영역에서 학생들의 자기주도 학습 능력을 함양하는 것에 교육의 목적을 둔다.</li>
                <li className="coachBase-list-sub2">학생들은 주간플래닝의 원리를 배우고, 직접 실습하는 훈련을 거쳐 자신에게 알맞은 시간 관리법을 터득하며, 이를 통해 스스로 목표를 수립하고 성취하는 경험을 기대하며, 학교 생활에 자신감을 갖는다.</li>
                <li className="coachBase-list-sub3">({count+1}) 기대효과</li>
                <li className="coachBase-list-sub4">{count}) 주간시간설계표를 통해 자신의 가용시간을 인식하고 시간을 관리할 수 있다.</li>
                <li className="coachBase-list-sub4">{count+1}) 주간단위로 교과 학업 계획 및 비교과 활동 계획을 수립할 수 있다.</li>
                <li className="coachBase-list-sub4">{count+2}) 일일 및 주간 피드백 교육을 통해 자신의 삶을 성찰할 수 있다.</li>
                <li className="coachBase-list-sub4">{count+3}) 학종평가요소를 이해하고 창체활동 디자인을 작성할 수 있다.</li>
                <li className="coachBase-list-sub4">{count+4}) 교육기간동안 매일인증 과제를 통해 지속적인 플래닝 습관을 형성할 수 있다.</li>
                <hr style={{border: "0", height: "0.5px", background: "#bbb", marginTop: "40px"}}></hr>
                <li className="coachBase-list-sub1">{count+2}. 교육 커리큘럼</li>
                <li className="coachBase-list-sub3">({count}) 교육 계획</li>
                <div style={{float: "left", width: "50%"}}>
                <li className="coachBase-list-sub2">1회차 - 눈으로 직접 확인하고 인식하는 주간플래닝 (주간시간설계표)</li>
                <li className="coachBase-list-sub2">2회차 - 삶의 수준을 높이는 본깨적 독서법으로 배우는 주간플래닝(주간목표, 일일계획)</li>
                <li className="coachBase-list-sub2">3회차 - 학교활동 스케치와 피드백을 통해 디자인하는 나만의 자율활동</li>
                <li className="coachBase-list-sub2">4회차 - 학종 핵심 평가요소 및 CAT 디자인의 중요성</li>
                </div>
                <div style={{float: "right", width: "45%", marginTop: "-55px"}}>
                    <li className="coachBase-list-sub3">({count+1}) 세부내용 안내</li>
                    <img src={`${process.env.PUBLIC_URL}/assets/img19.png`} style={{width: "500px", height: "500px"}}></img>
                </div>
            </ui>
            <br></br>
            

        </div>
    );
};

export default CoachBasic;