import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { IoStar } from 'react-icons/io5'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { useMutation } from '@tanstack/react-query'
import { review } from '@/http/UrlRequest'
import { X } from 'lucide-react'
type Inputs = {
  inputDescription: string
  inputVote: number
}
interface typeComments {
  formatted_title: string
  title: string
  id?: string
  poster_path: string
  backdrop_path: string
  movieId?: string
  vote?: number
  description?: string
}

export function ModalComments({
  id,
  title,

  formatted_title,
  poster_path,
  backdrop_path,
}: typeComments) {
  const [ctrlComments, setCtrlComents] = useState(false)
  const [star, setStar] = useState(0)
  const SelectStars = [1, 2, 3, 4, 5]
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ({
    inputDescription,
  }: Inputs) => {
    if (star === 0) return
    const newTodo: typeComments = {
      formatted_title: formatted_title,
      poster_path: poster_path,
      backdrop_path: backdrop_path,
      title: title,
      movieId: id,
      vote: star,
      description: inputDescription,
    }
    mutation.mutate(newTodo)
  }
  const mutation = useMutation({
    mutationFn: (newTodo: typeComments) => {
      return review.post('/movie', newTodo)
    },
    onSuccess: () => {
      setCtrlComents(false)
    },
  })

  return (
    <>
      <Dialog open={ctrlComments}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            onClick={() => setCtrlComents(true)}
          >
            Novo Comentario
          </Button>
        </DialogTrigger>
        <DialogContent className="p-10 w-full  ">
          <X
            className="h-4 w-4 absolute right-3 top-4  cursor-pointer"
            onClick={() => setCtrlComents(false)}
          />
          <DialogHeader className="mt-10">
            <DialogTitle className="mb-8">
              Novo Comentario
            </DialogTitle>
            <DialogDescription>
              Descreva a sua experiencia em relação ao filme, mas
              lembre-se de ser cordial :)
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" h-full flex flex-col m-auto  gap-4 mt-10"
          >
            <Textarea
              {...register('inputDescription', { required: true })}
              className="resize-none w-96 mb-5"
            />
            {errors.inputDescription && (
              <span className="text-xs">Campo Obrigatório</span>
            )}
            {star !== 0 ? (
              <span>Sua avaliação: {star}</span>
            ) : (
              <span>Quantas estrelas esse filme merece?</span>
            )}
            <div className="flex ">
              {SelectStars.map((el: number, index) => {
                return (
                  <div key={el + 1}>
                    <IoStar
                      onClick={() => setStar(index + 1)}
                      className="flex cursor-pointer text-xl m-1 hover:border border-yellow-500 rounded text-yellow-500"
                      key={el}
                    />
                  </div>
                )
              })}
            </div>
            {star === 0 && (
              <span className="text-xs">Campo Obrigatório</span>
            )}
            <Button className="w-44 m-auto">Enviar</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
