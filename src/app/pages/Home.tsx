export function Home() {

  // const url = 'https://jairo3478.c35.integrator.host/images/reviews/bg1.jpg'
  return (
    <div className=" ml-16 h-96 container rounded-xl">
      <img
        src="https://jairo3478.c35.integrator.host/images/reviews/bg1.jpg"
        className="h-96 w-screen object-cover rounded"
      />
      <div
        className={` w-full flex  justify-between  bg-no-repeat bg-center p-10  `}
      >
        <div className="text-center w-full">
          <h1 className="text-8xl text-gray-100 font-bold">Bem vindos </h1>
          <h2 className="text-4xl text-yellow-300 font-bold">
            {' '}
            ao portal Pipocando
          </h2>
          <p className="text-2xl text-gray-200 font-bold">
            Aqui voce pode saber mais sobre o filme desejado e opinar sobre
            filmes que ja assistiu.
          </p>
        </div>
      </div>
    </div>
  )
}
