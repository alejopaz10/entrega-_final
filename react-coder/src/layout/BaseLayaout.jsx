const Baselayout = ({children})=>{
return(
    <>
    <header>
    <p>header del site</p>
    </header>
    {children}
    <footer>
    <p>footer del site</p>
    </footer>
    </>
);
};

export default Baselayout;