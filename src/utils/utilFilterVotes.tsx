export function utilFilterVotes(param: any) {
  if (param.includes('Não existem dados para retornar')) return ''
  const total = param.map((el: { vote: number }) => el.vote)
  const totalVotes = total.reduce((acc: number, curr: number) => acc + curr, 0)
  return totalVotes
}
