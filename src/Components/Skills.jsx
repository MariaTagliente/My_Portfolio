export default function Skills({data}){
    return(
        <>
          <div className="grid md:grid-cols-3 gap-6">
            {data.groups.map((group)=>(
                <div key={group.id} className="border border-(--turchese)/40 rounded-lg bg-(--violetLight)/40 backdrop-blur-lg p-4 md:p-5 shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-(--turchese) hover:shadow-xl">
                    <h3 className="text-(--turchese) uppercase text-lg">
                        {group.category}
                    </h3>
                    
                    <ul className="mt-4 text-gray-300 flex flex-wrap gap-3 text-sm md:text-base">
                        {group.skills.map((skill, i) =>(
                            <li key={i} className="bg-white/10 rounded-md px-2.5 py-1">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
          </div>
        </>
    )
}