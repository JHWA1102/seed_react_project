import { Link } from "react-router-dom";

const Introduce = () => {
    return(
        <div className="introduce-box">
            <br></br>
            <div style={{float: "left", width: "30%"}}>
                <img src={`${process.env.PUBLIC_URL}/assets/img14.jpg`} style={{width: "350px"}}></img>
            </div>
            <div style={{float: "right", width: "60%", marginLeft: "10px"}}>
                <span>&#127793;</span>
                <p style={{fontWeight: "bold", fontSize: "larger"}}>씨앗들애 프로그램의</p>
                <p style={{fontWeight: "bold", fontSize: "larger"}}>전체적인 개요를 소개하는 메뉴입니다.</p>
                <br></br>
                <p>** 씨앗들애의 모든 교육 프로그램은 <span style={{textDecorationLine: "underline", fontWeight: "600"}}>현직 교사분들의 자문</span>을 거친 검증된 프로그램입니다.</p>
            </div>
            <section style={{float: "inline-end", width: "100%"}}>프로그램 유형<div className="section_under_style">씨앗들애는 학생들의 자기주도성 함양을 목적으로 하는 "학습코칭 (플래닝 교육)"과 고교학점제 체제에서 학생들이 학교 생활에 자신감을 가질 수 있도록 돕는 "진로학업설계 지원 교육"으로 구성되어 있습니다. </div></section>
            <div style={{float: "inline-end", width: "100%"}}>
                <br></br>
                <ui>
                    <li style={{listStyleType: "square", marginLeft: "20px"}}>씨앗들애의 대표 프로그램으로, 1명의 강사님이 한 학급씩 담당하여 하루 3차시 수업을 운영하는 <span style={{fontWeight: "bold", textDecoration: "underline"}}>단기 과정(기초)</span>과 1명의 강사님이 수강을 희망하는 10~15명의 학생들을 한 그룹으로 묶어 회당 3차시, 총 4회동안 수업을 운영하는 <span style={{fontWeight: "bold", textDecoration: "underline"}}>장기 과정(기본, 심화, 집중)</span>이 있습니다.</li>
                </ui>
                <br></br>
                <img src={`${process.env.PUBLIC_URL}/assets/img15.jpg`} style={{width: "1000px", marginLeft: "20px"}}></img>
                <br></br>
                <br></br>
                <p style={{fontWeight: "bold"}}>** 학습코칭 <span style={{color: "blue"}}>기초과정</span>에서 <span style={{textDecorationLine: "underline"}}>동기편, 실행편</span>을 묶어서 신청하실 수 있습니다. (총 6차시)</p>
                <br></br>
                <p style={{fontWeight: "bold"}}>** 학습코칭 <span style={{color: "blue"}}>심화과정</span>은 학습코칭 <span style={{textDecorationLine: "underline"}}>기본과정을 이수한 그룹만</span> 신청 가능합니다.</p>
                <br></br>
                <p style={{fontWeight: "bold"}}>** 학습코칭 <span style={{color: "blue"}}>집중과정</span>은 기본과정, 심화과정 커리큘럼 중 <span style={{textDecorationLine: "underline"}}>플래닝 영역만</span> 집중해서 다뤄집니다.</p>
                <br></br>
                <p style={{fontWeight: "bold"}}>** <span style={{color: "blue"}}>장기 수업</span>을 신청하시는 경우, 학생들은 교육 기간동안 매일 인증 과제를 통해 학습 습관을 형성할 수 있습니다.</p>
                <br></br>
                <div style={{marginLeft: "60px"}}>
                    <table>
                        <tr>
                            <td><Link to="/program/coachBase"><button className="introduce-box-button" >기초과정(바로가기)</button></Link></td>
                            <td><Link to="/program/coachBasic"><button className="introduce-box-button">기본과정(바로가기)</button></Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/program/coachAdvanced"><button className="introduce-box-button">심화과정(바로가기)</button></Link></td>
                            <td><Link to="/program/coachFocus"><button className="introduce-box-button">집중과정(바로가기)</button></Link></td>
                        </tr>
                    </table>
                </div>
                <hr style={{border: "0", height: "0.5px", background: "#bbb"}}></hr>
                <br></br>
                <br></br>
                <ui>
                    <li style={{listStyleType: "square", marginLeft: "20px"}}>고교학점제 체제에서 학생들이 학교생활에 대한 이해도를 높이고 쉽게 적응할 수 있도록 돕는 내용으로 구성하였으며, 진로학업설계 지원 교육은 모두 1회 단기 (3차시) 형태로만 운영합니다.</li>
                </ui>
                <button className="introduce-box-button" style={{width: "1000px", marginLeft: "80px"}}>프로그램(바로가기)</button>
            </div>
        </div>
    );
};

export default Introduce;