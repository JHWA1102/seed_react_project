import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Greetings = () => {

    return (
        <div className="greetings-box">
            <img src={`${process.env.PUBLIC_URL}/assets/img4.png`} style={{width: "1000px"}}></img>
            <p>안녕하세요, 씨앗들애입니다.</p>
            <br></br>
            <br></br>
            <p>씨앗들애는 모든 학생들을 ‘가능성의 씨앗’으로 보고 각자의 분야에서 싹이 발현될 수 있도록 돕는 다양한 교육 프로그램을 제공하고 있습니다. 진로와 비전이 없는 학생들, 동기는 있지만 방법을 모르는 학생들, 방법을 알아도 실행에 어려움을 겪는 학생들이 각자의 방법대로 성장할 수 있도록 돕는 것이 저희의 사명입니다.</p>
            <br></br>
            <br></br>
            <p>씨앗들애에서 제공하는 교육은 안산 경안고등학교 진로진학상담부장님께서 개발하신 LSP (Life Scale Planning) 프로그램으로부터 시작되었습니다. 공교육의 회복을 위해 학교 현장에서 10년이상 꿋꿋하게 운영하신 선생님의 헌신 덕분에 교육을 제공받은 학생들은 어느덧 자신의 삶을 주체적으로 이끌어나가는 리더의 모습을 갖춘 어른들로 각자의 삶을 꾸려 나가고 있습니다. 이들은 당장의 입시 결과에 연연하기 보다는 장기적인 진로 철학을 가질 수 있게 되었고, “학교와 선생님” 덕분에 자신의 삶이 온전히 변화될 수 있었다고 말합니다.</p>
            <br></br>
            <br></br>
            <p>학창시절 받았던 사랑과 관심을 모교의 후배들 뿐 아니라 다양한 지역에 있는 학생들에게 흘려보내기 위해 씨앗들애가 탄생하게 되었습니다. 씨앗들애의 모든 강사진은 이러한 교육철학과 비전을 공유하고 있으며, 학습코칭 프로그램을 모두 경험하고 씨앗들애에서 자체적으로 운영하는 강사과정까지 성실하게 이수한 분들로 구성되어 있습니다. 씨앗들애의 교육을 받는 학생들은 열정과 에너지 넘치는 젊은 강사님들 덕분에 회복하고, 변화하고, 성장하고, 성숙해갈 수 있게 될 것입니다.</p>
            <br></br>
            <br></br>
            <p>이 세상 모든 학생들이 가능성의 싹을 틔울 수 있도록 헌신하겠습니다. 감사합니다.</p>
            <br></br>
            <br></br>
            <p style={{textAlign: "center", marginTop: "10px"}}>- 씨앗들애 대표 최희수 드림 -</p>
            <br></br>
            <section style={{}}>대표 강사 소개</section>
            <br></br>
            <img src={`${process.env.PUBLIC_URL}/assets/img5.jpg`} style={{width: "750px", height: "450px"}}></img>
            <br></br>
            <p className="greetings-box-middle">현) 씨앗들애 대표 (학습코칭, 고교학점제 진로학업설계)</p>
            <br></br>
            <p className="greetings-box-middle">전) 안산경안고등학교 진로진학상담교사</p>
            <br></br>
            <p className="greetings-box-middle">전) 공주대학교 산학협력단 교육강사</p>
            <br></br>
            <p className="greetings-box-middle">- 교육부, 한국청년기업가정신재단, 아름다운커피, 현대해상, 한국창업진흥원, 강원랜드사회공헌재단 협력 강사</p>
            <br></br>
            <p className="greetings-box-middle">- 비바샘 원격교수연수원 촬영 / 강좌명 : 책임교육의 첫 단추, 최소 성취수준 보장 지도</p>
            <br></br>
            <img src={`${process.env.PUBLIC_URL}/assets/img6.png`} style={{width: "750px", height: "450px"}}></img>
            <br></br>
            <br></br>
            <Link target="_blank" to="https://mt.vivasam.com/mdvs/menu01sub?lcode=t23-016">
                <button className="greetings-box-button">대표 강사 연수 바로가기</button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <section style={{backgroundColor: "#C3C3C3"}}>씨앗들애 탄생에 도움을 주신 분들</section>
            <br></br>
            <p className="greetings-box-bottom">곽충훈 선생님(경안고, 진로진학상담부장)</p>
            <br></br>
            <p className="greetings-box-bottom">김현섭 소장님(수업디자인연구소)</p>
            <br></br>
            <p className="greetings-box-bottom">이정은 선생님(영생고, 진로)</p>
            <br></br>
            <p className="greetings-box-bottom">박형우 선생님(경안고, 영어)</p>
            <br></br>
            <p className="greetings-box-bottom">엄보용 선생님(경안고, 수학)</p>
            <br></br>
            <p className="greetings-box-bottom">박웅기 선생님(경안고, 수학)</p>
            <br></br>
            <p className="greetings-box-bottom">조은영 선생님(경안고, 진로)</p>
            <br></br>
            <p className="greetings-box-bottom">이도봉 선생님(광신방송예술고, 진로)</p>
            <br></br>
        </div>
    );
};
export default Greetings;