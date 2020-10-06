class CriptografiaDomain implements ICriptografiaDomain
{
    criptografar(texto: string): string {
        return texto;
    }

}

interface ICriptografiaDomain
{
    criptografar(texto:string):string
}