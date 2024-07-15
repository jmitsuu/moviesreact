interface typeVote {
  vote: number
}
export function utilFilterVotes(param: typeVote) {
  if (!Array.isArray(param)) return ''
  const total = param.map((el: { vote: number }) => el.vote)
  const totalVotes = total.reduce(
    (acc: number, curr: number) => acc + curr,
    0,
  )
  return totalVotes
}
