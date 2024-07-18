import { generes } from '@/helpers/Generes'

interface genreItem{
  genres:{
    id:number[];
    
  }
  
}
export function useGetDetails(param: genreItem) {
  if (!param) return
  // console.log(param.genres)
  const filterIds = param.genres 
  const lists = filterIds.map((item:genreItem) => {

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
