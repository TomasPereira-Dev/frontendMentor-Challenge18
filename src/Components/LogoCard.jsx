const LogoCard = () => {
    return (
        <div className={`hidden p-6 bg-mobileHeaderBg bg-cover rounded-lg md:flex md:items-end md:bg-tabletHeaderBg 
        lg:relative lg:p-0 lg:bg-none `}>
            <img className="hidden w-full lg:block lg:rounded-lg" src="./suggestions/desktop/background-header.png" alt=" " />
            <div className="bottom-6 left-6 flex flex-col lg:absolute">
                <h1 className="text-white font-bold md:text-xl">Frontend Mentor</h1>
                <p className="text-sm text-white/75 font-semibold md:text-base">Feedback Board</p>  
            </div>
        </div>
    )
}

export default LogoCard;