const Location = () => {
    return (
        <div className="location-box">
            <section>씨앗들애와 함께한 학교들</section>
            <br></br>
            <img src={`${process.env.PUBLIC_URL}/assets/img11.jpg`}></img>
            <p style={{textAlign: "center"}}><span>&#128522;</span>그 외에도 다양한 학교에서 수업을 진행하고 있습니다<span>&#128522;</span></p>
            <br></br>
            <section>활동 사진</section>
            <br></br>
            <img src={`${process.env.PUBLIC_URL}/assets/img12.jpg`} style={{width: "1000px"}}></img>
        </div>
    );
};

export default Location;