import { Header } from '@/components/Header'
import { PiSmileySad } from 'react-icons/pi'

export function Error404() {
  return (
    <div className=" relative w-screen bg-[#ddd8e1] h-screen">
      <div className="">
        <Header />
        <div className="flex flex-col items-center text-black justify-center w-full ">
          <h1 className="text-6xl mb-10">Desculpe!</h1>
          <PiSmileySad className="text-6xl" />
          <h1>#404 pagina não encontrada.</h1>
          <p>Aguarde um momento...</p>
        </div>
      </div>
    </div>
  )
}
