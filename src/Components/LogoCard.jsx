const LogoCard = () => {
    return (
        <div className={`hidden items-end p-6 bg-headerBg bg-cover rounded-lg md:flex md:bg-tabletHeaderBg`}>
            <div className="flex flex-col">
                <p className="text-white font-bold">Frontend Mentor</p>
                <p className="text-sm text-white font-bold">Feedback Board</p>  
            </div>
        </div>
    )
}

export default LogoCard;