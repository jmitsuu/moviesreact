

interface ArrayReview {
  title: string;
  vote: number;
}

interface Accumulator {
  [title: string]: {
    title: string;
    vote: number;
    totalVotes: number;
    totalTitles: number;
  };
}

export function useGroupByTitle(array: ArrayReview[]) {

  return array.reduce((acc: Accumulator, val: ArrayReview) => {
    const title = val.title;
    if (!acc[title]) {
      acc[title] = {
        ...val,
        totalVotes: val.vote,
        totalTitles: 1,
      };
    } else {
      acc[title].totalVotes += val.vote;
      acc[title].totalTitles += 1;
    }
    return acc;
  }, {});
}
