export function usePaginationReview(arr:[], max:number){

    const results = [[]]
    let group = 0
    for (let i = 0; i < arr.length; i++) {
      if (results[group] === undefined) {
        results[group] = []
      }
      results[group].push(arr[i]);
      if((i + 1) % max === 0){
        group = group + 1;
      }
    }
    return results;

}