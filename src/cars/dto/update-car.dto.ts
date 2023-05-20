import { IsString, IsUUID } from "class-validator";

export class UpdateCarDto {
     
    @IsString({})
    @IsUUID()
  readonly  id: string;


  @IsString({})
   readonly model: string;

}