import { useState } from "react";

const CoachFocus = () => {
    const [count, setCount] = useState(1);

    return(
        <div>
            <br></br>
            <hr style={{border: "0", height: "0.5px", background: "#bbb"}}></hr>
            <br></br>
            <img src={`${process.env.PUBLIC_URL}/assets/img22.jpg`} style={{width: "500px", height: "60px"}}></img>
            <ui className="coachBase-list">
                <li className="coachBase-list-sub1">{count}. 운영개요</li>
                <li className="coachBase-list-sub2">대상 : 고등</li>
                <li className="coachBase-list-sub2">유형 : 학교방문형(장기)</li>
                <li className="coachBase-list-sub2">과정 : 1일 3차시 4회</li>
                <li className="coachBase-list-sub2">내용 : 주간 플래닝 실습 / 본깨적 독서법 / 지속가능한 습관(수면, 휴식) / 목표 설정의 원리 & 분기 플래닝</li>
                <hr style={{border: "0", height: "0.5px", background: "#bbb", marginTop: "40px"}}></hr>
                <li className="coachBase-list-sub1">{count+1}. 수업 목표 및 기대 효과</li>
                <li className="coachBase-list-sub3">({count}) 수업 목표</li>
                <li className="coachBase-list-sub2">진로학업설계 지도 과정 중 학업관리지도 영역에서 학생들의 자기주도 학습 능력을 함양하는 것에 교육의 목적을 둔다.</li>
                <li className="coachBase-list-sub2">학생들은 플래닝의 원리를 배우고, 배운 것을 교육 기간동안 지속적으로 인증하는 훈련을 거쳐 스스로가 시간의 주체가 되어 자신에게 알맞은 시간 관리법을 터득한다.</li>
                <li className="coachBase-list-sub2">또한 장기·단기 계획을 체계적으로 작성해보는 활동을 통해 스스로 목표를 수립하고 성취하는 경험을 하며, 학교 생활에 자신감을 갖는다.</li>
                <li className="coachBase-list-sub3">({count+1}) 기대효과</li>
                <li className="coachBase-list-sub4">{count}) 주간시간설계표를 통해 자신의 가용시간을 인식하고 시간을 관리할 수 있다.</li>
                <li className="coachBase-list-sub4">{count+1}) 일일 및 주간 피드백 교육을 통해 자신의 삶을 성찰할 수 있다.</li>
                <li className="coachBase-list-sub4">{count+2}) 습관의 형성원리와 유익을 이해하고 균형잡힌 삶을 위한 목표를 구체화할 수 있다.</li>
                <li className="coachBase-list-sub4">{count+3}) 분기 로드맵을 수립하여 자신만의 효율적인 자기주도 학습 방법을 찾을 수 있다.</li>
                <li className="coachBase-list-sub4">{count+4}) 교육기간동안 매일인증 과제를 통해 지속적인 플래닝 습관을 형성할 수 있다.</li>
                <hr style={{border: "0", height: "0.5px", background: "#bbb", marginTop: "40px"}}></hr>
                <li className="coachBase-list-sub1">{count+2}. 교육 커리큘럼</li>
                <li className="coachBase-list-sub3">({count}) 교육 계획</li>
                <div style={{float: "left", width: "50%"}}>
                <li className="coachBase-list-sub2">1회차 - 눈으로 직접 확인하고 인식하는 주간플래닝 (주간시간설계표)</li>
                <li className="coachBase-list-sub2">2회차 - 균형 잡힌 학교생활을 위한 주간플래닝 (주간목표, 일일계획)</li>
                <li className="coachBase-list-sub2">3회차 - 삶의 수준을 높이는 피드백 & 지속 가능한 실행을 위한 습관 형성 전략 안내</li>
                <li className="coachBase-list-sub2">4회차 - 목표 설정의 원리 및 분기 플래닝 작성 실습 & 수업 회고</li>
                </div>
                <div style={{float: "right", width: "45%", marginTop: "-55px"}}>
                    <li className="coachBase-list-sub3">({count+1}) 세부내용 안내</li>
                    <img src={`${process.env.PUBLIC_URL}/assets/img23.jpg`} style={{width: "500px", height: "500px"}}></img>
                </div>
            </ui>
            <br></br>
            

        </div>
    );
};

export default CoachFocus;