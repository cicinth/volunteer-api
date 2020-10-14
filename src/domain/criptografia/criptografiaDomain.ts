export class CriptografiaDomain implements ICriptografiaDomain
{
    criptografar(texto: string): string {
        return texto;
    }

}
 
export interface ICriptografiaDomain
{
    criptografar(texto:string):string
}