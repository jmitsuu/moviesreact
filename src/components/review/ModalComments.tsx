import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// import { BarProgressAvaliation } from "@/components/BarProgressAvaliation";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
 Sheet,
 SheetContent,
 SheetHeader,
 SheetTitle,
 SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import {  review } from "@/http/instance";
type Inputs = {
  inputDescription: string;
  inputVote: number;
 };
 interface typeComments{
  title:string,
  movieId:number,
 }

export function ModalComments({title, movieId}:typeComments){
  const [ctrlComments, setCtrlComents] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
   } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = ({inputVote, inputDescription}) => {
mutation.mutate(void {
  "vote":inputVote,
  "description":inputDescription
})
  
   };
   const mutation =   useMutation({
    mutationFn:(newItems) =>{
      return review.post("/movie", {
        "title":title,
        "movieId":movieId,
        newItems

      })
    }
  })
  return (
    <Sheet open={ctrlComments}>
    <SheetTrigger onClick={()=>{setCtrlComents(true)}} >Open</SheetTrigger>
    <SheetContent  side={"bottom"}  className=" m-auto">
     <SheetHeader>
      <SheetTitle className="text-center mb-4">Comente sobre o filme?</SheetTitle>
      <X className="absolute cursor-pointer right-10 top-3 h-10 w-10" onClick={()=>{setCtrlComents(false)}} />
     </SheetHeader>
     <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[800px] h-full flex flex-col m-auto  gap-4"
     >
      <Textarea {...register("inputDescription", { required: true })} className="resize-none" />
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

      <Button className="w-44 m-auto" variant="outline">
       Cancel
      </Button>
     </form>
    </SheetContent>
   </Sheet>
  )
}