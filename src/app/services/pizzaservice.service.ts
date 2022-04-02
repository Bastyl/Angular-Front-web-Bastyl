import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PizzaserviceService {

  constructor(private http: HttpClient) { }

  public URL_API: string = environment.backendUrl;

  getData() {

    var headers = new Headers();
    headers.set('Accept', 'application/json; charset=utf-8');
    headers.set('content-Type', 'application/json; charset=utf-8');

    const url: string = this.URL_API + "/api/Pizza";
    return this.http.get(url);
  }

  delData(id:string){
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json; charset=utf-8');
    headers.append('content-Type', 'application/json; charset=utf-8');
    const url: string = this.URL_API + "/api/Pizza/"+id;

    return this.http.delete<any>(url, {headers:headers});
  }

  addData(nombrePersona:string, apellidoPersona:string, direccion:string ,celular:string,nota:string,
    masa: string, proteina: string, salsa:string , cantCoca:number, cantSprite: number, agregados: string[], 
    tipo: string, cant: number, monto: number
    
    ) {

    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json; charset=utf-8');
    headers.append('content-Type', 'application/json; charset=utf-8');
    const url: string = this.URL_API + "/api/Pizza";

    var date = new Date;
    var date_text = date.toLocaleString().split(",")

    var body = {
      "nombrePersona": nombrePersona,
      "apellidoPersona": apellidoPersona,
      "celular": celular,
      "direccion": direccion,
      "nota": nota,
      "masa": masa,
      "proteina": proteina,
      "salsa": salsa,
      "agregados": agregados,
      "cocacola": cantCoca,
      "sprite": cantSprite,
      "cantidad": cant,
      "monto": monto,
      "tipo": tipo,
      "fecha": date_text[0]
    }
    console.log(JSON.stringify(body));
    return this.http.post(url,body,{headers: headers});
    
  }

}
