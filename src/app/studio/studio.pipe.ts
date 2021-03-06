import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'towerFilter'})

export class TowerFilterPipe implements PipeTransform {
    transform(value: string, towerList: any): string {
        const result = towerList.filter(item=> {return item.key === value})[0];
        return result ? result.name : '';
    }
}
