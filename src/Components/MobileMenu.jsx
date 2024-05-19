import Filter from "./Filter.jsx";
import RoadmapPreview from "./RoadmapPreview.jsx";

const MobileMenu = ({setSuggestions}) => {
   
    return (
        <div className="absolute top-[5.5rem] flex justify-end w-full h-full bg-black/50">
            <div className="flex flex-col p-6 gap-8 w-3/4 bg-background1">
                <Filter setSuggestions={setSuggestions}/>
                <RoadmapPreview />
            </div>
        </div>
    )
}

export default MobileMenu;
