import { generes } from '@/helpers/Generes'

export function useGetDetails(param: any) {
  if (!param) return
  // console.log(param.genres)
  const filterIds = param.genres
  const lists = filterIds.map((item: any) => {
    console.log(item)
    const getGeneres = generes.filter((ids) => {
  
      if (item.genres.id.includes(ids.id)) {
        return ids.name
      }
    })

    return {
      ...item,
      genre_ids: getGeneres,
    }
  })

  return { lists }
}
