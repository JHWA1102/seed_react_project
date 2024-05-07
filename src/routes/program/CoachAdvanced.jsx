import { useState } from "react";

const CoachAdvanced = () => {
    const [count, setCount] = useState(1);

    return(
        <div>
            <br></br>
            <hr style={{border: "0", height: "0.5px", background: "#bbb"}}></hr>
            <br></br>
            <img src={`${process.env.PUBLIC_URL}/assets/img20.png`} style={{width: "500px", height: "60px"}}></img>
            <ui className="coachBase-list">
                <li className="coachBase-list-sub1">{count}. 운영개요</li>
                <li className="coachBase-list-sub2">대상 : 고등 (기본과정을 이수한 그룹만 신청 가능)</li>
                <li className="coachBase-list-sub2">유형 : 학교방문형(장기)</li>
                <li className="coachBase-list-sub2">과정 : 1일 3차시 4회</li>
                <li className="coachBase-list-sub2">내용 : 월간 플래닝 & 프로젝트 피드백 / 지속가능한 습관(수면, 휴식) / 지배가치 찾기 & 사명 로드맵 / 목표 설정의 원리 & 분기 플래닝</li>
                <hr style={{border: "0", height: "0.5px", background: "#bbb", marginTop: "40px"}}></hr>
                <li className="coachBase-list-sub1">{count+1}. 수업 목표 및 기대 효과</li>
                <li className="coachBase-list-sub3">({count}) 수업 목표</li>
                <li className="coachBase-list-sub2">진로학업설계 지도 과정 중 학업관리지도 영역에서 학생들의 자기주도 학습 능력을 함양하는 것에 교육의 목적을 둔다.</li>
                <li className="coachBase-list-sub2">학생들은 습관의 형성원리를 배우고, 배운 것을 교육 기간동안 지속적으로 인증하는 훈련을 거쳐 스스로가 시간의 주체가 되어자신에게 알맞은 시간 관리법을 터득한다.</li>
                <li className="coachBase-list-sub2">또한 지필고사 계획을 체계적으로 작성해보는 훈련을 통해 스스로 목표를 수립하고 성취하는 경험을 하며, 학교 생활에 자신감을 갖는다.</li>
                <li className="coachBase-list-sub3">({count+1}) 기대효과</li>
                <li className="coachBase-list-sub4">{count}) 습관의 형성원리와 유익을 이해하고 균형잡힌 삶을 위한 목표를 구체화할 수 있다.</li>
                <li className="coachBase-list-sub4">{count+1}) 지필고사 로드맵을 수립하여 자신만의 효율적인 자기주도 학습 방법을 찾을 수 있다.</li>
                <li className="coachBase-list-sub4">{count+2}) 진로 철학 및 사명 로드맵 작성을 통하여 미래 방향성을 수립할 수 있다.</li>
                <li className="coachBase-list-sub4">{count+3}) 교육기간동안 매일인증 과제를 통해 지속적인 플래닝 습관을 형성할 수 있다.</li>
                <li className="coachBase-list-sub4">{count+4}) 교육기간동안 배운 내용을 바탕으로 학급 멘토링 역량을 배양할 수 있다.</li>
                <hr style={{border: "0", height: "0.5px", background: "#bbb", marginTop: "40px"}}></hr>
                <li className="coachBase-list-sub1">{count+2}. 교육 커리큘럼</li>
                <li className="coachBase-list-sub3">({count}) 교육 계획</li>
                <div style={{float: "left", width: "50%"}}>
                <li className="coachBase-list-sub2">1회차 - 지속 가능한 실행을 위한 습관 형성 전략 안내 및 플래닝 실습</li>
                <li className="coachBase-list-sub2">2회차 - 균형 잡힌 학교 생활을 위한 습관 형성 전략 안내 및 플래닝 실습</li>
                <li className="coachBase-list-sub2">3회차 - 인생을 설계하고 삶의 수준을 높이는 진로 로드맵</li>
                <li className="coachBase-list-sub2">4회차 - 목표 설정의 원리 및 분기 플래닝 작성 실습 & 수업 회고</li>
                </div>
                <div style={{float: "right", width: "45%", marginTop: "-55px"}}>
                    <li className="coachBase-list-sub3">({count+1}) 세부내용 안내</li>
                    <img src={`${process.env.PUBLIC_URL}/assets/img21.jpg`} style={{width: "500px", height: "500px"}}></img>
                </div>
            </ui>
            <br></br>
            

        </div>
    );
};

export default CoachAdvanced;