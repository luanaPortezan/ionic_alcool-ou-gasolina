import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public resultado: string = 'Resultado';
  public precoAlcool: string = '';
  public precoGasolina: string = '';

  public calcular(): void {

    // Validar se os campos estão preenchidos
    if (this.precoAlcool && this.precoGasolina) {

      // variáveis
      const pAlcool: number = parseFloat(this.precoAlcool);
      const pGasolina: number = parseFloat(this.precoGasolina);
      const consumoAlcoolKmLitro:number = 8.6; // Consumo médio de álcool do Sandero 2016/2017 16v
      const consumoGasolinaKmLitro:number = 12.8; // Consumo médio de gasolina do Sandero 2016/2017 16v
      const poderCalorificoAlcool: number = 26.9; // Poder calorífico do álcool em MJ/L
      const poderCalorificoGasolina: number = 31.5; // Poder calorífico da gasolina em MJ/L

      // Cálculo da relação entre os preços
      const relacaoPreco: number = pAlcool / pGasolina;

      // Cálculo do consumo em relação aos preços
      const consumoRelativoAlcool: number = consumoAlcoolKmLitro / (pAlcool * poderCalorificoAlcool);
      const consumoRelativoGasolina: number = consumoGasolinaKmLitro / (pGasolina * poderCalorificoGasolina);

      // Verificação da vantagem de abastecer com álcool ou gasolina
      if (relacaoPreco >= 0.75 && consumoRelativoAlcool <= consumoRelativoGasolina) {
        this.resultado = 'Abasteça com Álcool';
      } else {
        this.resultado = 'Abasteça com Gasolina';
      }
    } else {
      this.resultado = "Preencha os campos corretamente"
    }
  }

  constructor() {}

}
