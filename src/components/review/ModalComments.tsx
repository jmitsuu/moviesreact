import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"


import { useMutation } from "@tanstack/react-query";
import { review } from "@/http/instance";
import { X } from "lucide-react";
type Inputs = {
 inputDescription: string;
 inputVote: number;
};
interface typeComments {
  formatted_title:string,
 title: string;
 id: string,
 refetch?:any
}

export function ModalComments({id, title, refetch, formatted_title }:typeComments) {
 const [ctrlComments, setCtrlComents] = useState(false);
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<Inputs>();

 const onSubmit: SubmitHandler<Inputs> = ({
  inputVote,
  inputDescription,
 }: Inputs) => {
  const newTodo = {
    formatted_title:formatted_title,
   title: title,
   movieId: id,
   vote: inputVote,
   description: inputDescription,
  };
  mutation.mutate(JSON.stringify(newTodo));
 };
 const mutation = useMutation({
  mutationFn: (newTodo: any) => {
   return review.post("/movie", newTodo);
  },
  onSuccess: () => {
   setCtrlComents(false)
   refetch()
  },
 });
 return (
  <Dialog open={ctrlComments}>
    
      <DialogTrigger asChild>
        <Button variant="outline" onClick={()=>setCtrlComents(true)}>Novo Comentario</Button>
      </DialogTrigger>
      <DialogContent className="p-10 w-full  " >
      <X className="h-4 w-4 absolute right-3 top-4  cursor-pointer" onClick={()=>setCtrlComents(false)} />
        <DialogHeader className="mt-10">
     
          <DialogTitle>Novo Comentario</DialogTitle>
          <DialogDescription>
            Descreva a sua experiencia em relação ao filme, mas lembre-se de ser cordial :) 
          </DialogDescription>
       
        </DialogHeader>
        <form
       onSubmit={handleSubmit(onSubmit)}
       className=" h-full flex flex-col m-auto  gap-4 mt-10"
      >
       <Textarea
        {...register("inputDescription", { required: true })}
        className="resize-none w-96"
       />
       {errors.inputDescription && <span>Campo Obrigatório</span>}
       <Input
        {...register("inputVote", { required: true })}
        className="mt-4 w-44"
        placeholder="voto 1-5"
        type="number"
        max={5}
       />
       {errors.inputVote && <span>Campo Obrigatório</span>}

       <Button className="w-44 m-auto">Enviar</Button>
      </form>
      </DialogContent>
    </Dialog>
 );
}
