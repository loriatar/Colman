import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class GlassesService{
    constructor(private http:Http){
        console.log('Glasses service initialized...')
    }

    getGlasses(){
        return this.http.get('http://localhost:8080/api/glasses')
            .map(res => res.json());
    }

    addGlasses(newGlasses){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:8080/api/glasses',JSON.stringify(newGlasses),{headers})
            .map(res => res.json());
    }

    deleteGlasses(id){
        console.log("delete glasses " + id );
        return this.http.delete('http://localhost:8080/api/glasses/'+id)
            .map(res => res.json());
    }

    updateGlasses(updatedGlasses){
        var headers = new Headers();
        console.log("update glasses " + updatedGlasses._id );
        headers.append('Content-Type','application/json');
        return this.http.put('http://localhost:8080/api/glasses/'+updatedGlasses._id,JSON.stringify(updatedGlasses),{headers})
            .map(res => res.json());
    }

    getGlassesByBrand() {
        return this.http.get('http://localhost:8080/api/glassesbybrand')
            .map(res => res.json());
    }
}
