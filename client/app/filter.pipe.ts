import {Pipe} from '@angular/core'

@Pipe({name: 'filter'})
export class FilterArrayPipe {
    transform(glasses, args) {
        if(!args[0]) {
            return glasses;
        }
        else if(glasses) {
            return glasses.filter(item => {
                for(let key in item) {
                    if((typeof item[key] === 'string' || item[key] instanceof String) && (item[key].includes(args))) {
                        return true;
                    }
                }
            });
        }
    }
}