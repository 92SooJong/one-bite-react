import "./Body.css";

function Body({name, location, favorList}) {
    
    console.log(name, location);

    return (
        <div className="body">
            {name}은 {location}에 거주합니다.
            <br/>
            {favorList.length}개의 음식을 좋아합니다.
        </div>
    );

}

// favorList 프로퍼티가 존재하지 않는 경우를 대비해서 default 세팅을 해줄 수 있다.
Body.defaultProps = {
    favorList: [],
};


export default Body;