export default function AboutMe({data}){
    return(
        <>
            <div className="flex flex-col md:flex-row justify-between gap-10">
                
                <div className="max-w-md">
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {data.description}
                    </p>
                </div>

                
                <div className="flex flex-wrap gap-6">

                    {data.cards.map((card)=>{
                        const Icon = card.icon;
                        return(
                            <div key={card.id} className="w-46 h-55 border border-(--turchese)/50 rounded-lg flex flex-col justify-center items-center shadow-lg shadow-gray-900 hover:border-(--turchese) hover:scale-105 transition duration-300">
                                <Icon size={32} className="text-(--pink)"/>
                                <h3 className="text-(--turchese) uppercase text-lg mt-5"> 
                                    {card.title} 
                                </h3>

                                <ul className="text-gray-300 text-center mt-3 leading-relaxed">
                                    {card.items.map((item, i)=>(
                                        <li key={i}> {item} </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                           
                </div>                      
            </div>
        </>
    )
}