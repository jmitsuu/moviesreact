import { useParams } from 'react-router-dom'
import { IoStar } from 'react-icons/io5'
import { FetchReview } from '@/api/reviews/FetchReview'
import { ProfileReview } from '@/components/review/ProfileReview'
import { ModalComments } from '@/components/review/ModalComments'
import { BarProgressAvaliation } from '@/components/review/BarProgressAvaliation'
import { FindMovie } from '@/api/movies/FindMovie'
import { utilFilterVotes } from '@/utils/utilFilterVotes'
import { Spinner } from '@/components/Spinner'
import { CtrlPagination } from '@/components/CtrlPagination'

const urlImage = 'https://image.tmdb.org/t/p/original'

export function PageReview() {
  const { id } = useParams()

  const { search, isLoading } = FindMovie(`${id}`)
  const { response, refetch } = FetchReview(`${id}`)

  if (isLoading || !response) {
    return (
      <div className="text-2xl   ">
        <Spinner />
      </div>
    )
  }
  const { dados } = response

  const url = JSON.stringify(urlImage + search.backdrop_path)
  return (
    <main className="w-screen container xl:ml-16">
      <div className="h-full   bg-[#322d38] rounded-md p-5 ">
        <div
          style={{ backgroundImage: `url(${url})` }}
          className={` w-full flex  justify-between bg-black bg-cover p-10 rounded-md"
     `}
        >
          <div className="w-[600px]   p-4 bg-black/50 rounded-md text-white">
            <h1 className="font-bold text-4xl mb-10">
              {search.title}
            </h1>
            <div className="flex  gap-6">
              <img
                src={urlImage + search.poster_path}
                className="h-72  rounded-md "
              />
              <p className=" text-[0.9rem]">{search.overview}</p>
            </div>
            <div>
              <div className="flex gap-4 text-xs font-bold mt-4 ">
                <h1 className="flex items-center">
                  {(utilFilterVotes(dados) / dados.length).toFixed(1)}{' '}
                  - <IoStar className="text-yellow-500" />
                </h1>{' '}
                {dados.includes('Não existem dados para retornar') ? (
                  <h2> ((0) reviews)</h2>
                ) : (
                  <h2> ( ({dados.length}) reviews )</h2>
                )}
              </div>
              <div className="flex gap-2 mt-5">
                {search.genres.map((el: { name: string }) => {
                  return (
                    <h3 key={el.name} className=" font-semibold ">
                      {el.name}
                    </h3>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="bg-black/50 rounded-md text-white justify-center px-10  gap-10 p-8 flex flex-col">
            <h1>Avaliações</h1>
            <BarProgressAvaliation
              total={dados}
            />
          </div>
        </div>

        <div className=" min-h-80 mt-20 bg-white p-10  rounded-md   transition duration-500">
          <div className=" w-full ">
            <h1 className={`text-gray-700 uppercase text-4xl `}>
              Analises
            </h1>
            <div className="float-right">
              <ModalComments
                formatted_title={`${id}`}
                id={search.id}
                title={search.title}
                poster_path={search.poster_path}
                backdrop_path={search.backdrop_path}
                refetch={refetch}
              />
            </div>
          </div>
          <div
            className={`w-full   flex flex-col border-b pb-4 p-2   mt-20`}
          ></div>
          <div
            className={`w-full max-h-[900px] overflow-y-auto    flex flex-col border p-2 rounded-md mt-20 `}
          >
            {dados.includes('Não existem dados para retornar') ? (
              <div className="w-full mt-10 text-center  p-20">
                <h1 className="">Não há comentarios até o momento</h1>
              </div>
            ) : (
              <>
                {dados.map((profile: any) => {
                  return (
                    <ProfileReview
                      key={profile.createdAt}
                      vote={profile.vote}
                      comment={profile.description}
                      date={profile.createdAt}
                    />
                  )
                })}
              </>
            )}
          </div>
          <CtrlPagination />
        </div>
      </div>
    </main>
  )
}
