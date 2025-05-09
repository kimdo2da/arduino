function Button({text, bgcolor="blue", children}) {
    const btnEvent=(e)=>{
        console.log(e);
        console.log({text},"클릭!");
    }
    return(
        <>
        
        <button onClick={btnEvent} style={{backgroundColor:bgcolor}}> 
        {text}
        {children}
        </button>
        </>
    )
}

export default Button;