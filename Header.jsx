//let Header =() ={}
function Header() {
    let var1=[1,2,3];
    return(
        <div>
            <h1> 헤더 {var1}  </h1> 
        </div> //이런식으로 최상위 태그로 묶어주거나 블랭크 파일 <> </> 명칭이 없어도 묶어서 내보내줘야함

        // <div> hi </div>
        // <h1> goodbye </h1> 태그가 두개로 분리가 되면 안됨
        //<h1> 헤더 {var1%2 ===0? "짝수":"홀수"} </h1> 
        // 명시적 {String(var1)} 묵시적 형 변환
        // 오브젝트 var1={a:1,b:2}를 {var1} 통째로는 불가능 {var1.a}는 가능
    );
}

export default Header;