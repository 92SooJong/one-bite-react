import "./Body.css";

function Body({ children }) {
    
    console.log(children);

    return (
        <div className="body">
            {children}
        </div>
    );

}

// favorList 프로퍼티가 존재하지 않는 경우를 대비해서 default 세팅을 해줄 수 있다.
Body.defaultProps = {
    favorList: [],
};


export default Body;