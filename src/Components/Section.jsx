export default function Section({icon: Icon, title, children}){
    return(
        <article className="flex flex-col pb-7 border-b border-(--turchese)/30">
                        
            <div className="flex items-start gap-6">
                <span className="border border-(--turchese) rounded-lg px-4 py-2">
                    <Icon className="text-2xl text-(--turchese)" />
                </span>
                                           
                <div className="mt-2">
                    <h1 className="text-white uppercase text-xl font-semibold">
                        {title}
                    </h1>
                </div>        
            </div>

            <div className="md:pl-20 mt-8 md:mt-4">
                {children}                   
            </div>                
        </article>
    )
}