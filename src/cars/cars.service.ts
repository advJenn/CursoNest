import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from 'src/interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
    {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla'
    },
    {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla'
    },
    {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla'
    },
];

findAll(){
    return this.cars;
}
findOneById(id: string){
    const car = this.cars.find( car => car.id === id);

    if ( !car ){
        throw new NotFoundException(`Car with id '${id}' not found `);
    }
    return{}
}

create( createCarDto: CreateCarDto){

    const car : Car = {
        id: uuid(),
        ...createCarDto
        //brand: createCarDto.brand,
       // model: createCarDto.model,
        }

        this.cars.push(car)
    return car;

}
update( id:string, updateCarDto: UpdateCarDto){


    let carDB = this.findOneById( id);
    this.cars = this.cars.map( car => {

        if (car.id === id ) {

            carDB = {
                ...carDB,
                ...updateCarDto,
                id,
            }
        }
        return car;
    })

    return carDB; //Carro actualizado
}
}
