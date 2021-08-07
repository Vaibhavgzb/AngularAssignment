import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name : 'appFilter'})
export class FilterPipe implements PipeTransform{
    transform(item : any[] , searchText : string) : any[] {
        
        if(!item){
            return [] ;
        }
        if(!searchText){
            return item;
        }

        searchText = searchText.toLocaleLowerCase();

        return item.filter(f => {
            return f.employee_name.toLocaleLowerCase().includes(searchText);
        });
    }
    
}