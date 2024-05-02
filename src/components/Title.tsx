interface typeTitle{
  title:string,
  description?:string
}

export function Title({title, description}: typeTitle) {
  return(
    <div>
    <header className="">
      <h1 className="text-6xl text-gray-700 uppercase mb-10 font-bold">{title}</h1>
      <p className="text-xl text-gray-600">{description}</p>
    </header>
    </div>
  )
}