class Game {
    constructor() {
      
      this.tabuleiro = [
          [null, null, null],
          [null, null, null],
          [null, null, null]
      ];
      
      this.quemEOProximoJogador = 'X';
      this.numeroDaRodada = 1;
      this.temUmVencedor = false;
      this.quemEOVencedor = '';
    }
    
    jogar(linha, coluna) {

      if (this.tabuleiro[linha][coluna] !== null || this.temUmVencedor) {
          return;
      }

      this.tabuleiro[linha][coluna] = this.quemEOProximoJogador;

      this.quemEOProximoJogador = (this.quemEOProximoJogador === 'X') ? 'O' : 'X';
      this.numeroDaRodada += 1;
    }

    verificarLinhas() {
      for (let index = 0; index < 3; index++) {
          if (
              this.tabuleiro[index][0] !== null &&
              this.tabuleiro[index][0] === this.tabuleiro[index][1] &&
              this.tabuleiro[index][0] === this.tabuleiro[index][2]
          ) {
              
              this.quemEOVencedor = this.tabuleiro[index][0];
              this.temUmVencedor = true;
              break; 
          }
      }
    }

    verificarColunas() {
      for (let index = 0; index < 3; index++) {
          if (
              this.tabuleiro[0][index] !== null &&
              this.tabuleiro[0][index] === this.tabuleiro[1][index] &&
              this.tabuleiro[0][index] === this.tabuleiro[2][index]
          ) {
              
              this.quemEOVencedor = this.tabuleiro[0][index];
              this.temUmVencedor = true;
              break; 
          }
      }
    }
    
    verificarDiagonais() {
        
      if (
          this.tabuleiro[0][0] !== null &&
          this.tabuleiro[0][0] === this.tabuleiro[1][1] &&
          this.tabuleiro[0][0] === this.tabuleiro[2][2]
      ) {
          this.quemEOVencedor = this.tabuleiro[0][0];
          this.temUmVencedor = true;
      }
      
      
      if (
          !this.temUmVencedor && 
          this.tabuleiro[0][2] !== null &&
          this.tabuleiro[0][2] === this.tabuleiro[1][1] &&
          this.tabuleiro[0][2] === this.tabuleiro[2][0]
      ) {
          this.quemEOVencedor = this.tabuleiro[0][2];
          this.temUmVencedor = true;
      }
    }
}

module.exports = Game;