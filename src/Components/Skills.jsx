export default function Skills({data}){
    return(
        <>
          <div className="grid md:grid-cols-3 gap-6">
            {data.groups.map((group)=>(
                <div key={group.id} className="border border-(--turchese)/50 rounded-lg bg-(--violetLight)/40 backdrop-blur-md p-5 shadow-lg shadow-gray-900">
                    <h3 className="text-(--turchese) uppercase text-lg">
                        {group.category}
                    </h3>
                    
                    <ul className="mt-4 text-gray-300 flex flex-wrap gap-3">
                        {group.skills.map((skill, i) =>(
                            <li key={i} className="bg-white/10 rounded-box px-2.5 py-1.5">
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