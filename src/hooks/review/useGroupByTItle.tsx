
export function useGroupByTitle(array:any){
  return array.reduce((acc:any, val:{title:string, vote:number}) =>{
    const title = val.title;
    if(!acc[title]){
      acc[title] ={
        ...val,
        totalVotes:val.vote,
        totalTitles: 1
      };
    } else{
      acc[title].totalVotes += val.vote;
      acc[title].totalTitles += 1;
    }
    return acc;
  }, {});
}