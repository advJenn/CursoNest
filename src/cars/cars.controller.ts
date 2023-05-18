import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

constructor(
private readonly  carsService: CarsService
){}

//----------EndPoints--------//


@Get() //-> Decorador
getAllCars() {
    return this.carsService.findAll()
}

@Get(':id')
getCarById( @Param ('id', ParseIntPipe) id: number){
//PIPES = Transforman la data recibida en varios lugares. Ejemplo: transformar un string a numero.

return this.carsService.findOneById(id);
}

@Post(':id')
createCar( @Body() body: any) 
{
return body;
}

@Patch(':id')
updateCar( @Body() body: any) 
{
return body;
}

@Patch(':id')
deleteCar( @Param('id', ParseIntPipe) id: number){
return{
    method: 'delete',
    id
};
}
}




