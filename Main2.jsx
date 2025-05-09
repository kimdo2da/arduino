//let Header =() ={}
function Main2() {
    let cssVar = {
        backgroundColor:"yellow",
        color:"red"
    }
    return(
        <main style={cssVar}>
            
            <h1> 메인 </h1> 
        </main> //이런식으로 최상위 태그로 묶어주거나 블랭크 파일 <> </> 명칭이 없어도 묶어서 내보내줘야함

        // <div> hi </div>
        // <h1> goodbye </h1> 태그가 두개로 분리가 되면 안됨
    );
}

export default Main2;