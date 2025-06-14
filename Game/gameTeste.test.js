const Game = require('./game');

describe('Jogo da Velha', () => {

    let jogo;

    beforeEach(() => {
      jogo = new Game();
    });

    test('verifica se X existe na posicao dada', () => {
      jogo.jogar(0, 0); 
      expect(jogo.tabuleiro[0][0]).toBe('X');
    });

    test('verifica se O existe na posicao dada', () => {
      jogo.jogar(0, 0);
      jogo.jogar(0, 2);
      expect(jogo.tabuleiro[0][2]).toBe('O');
    });

    test('verifica se a terceira jogada é X', () => {
      jogo.jogar(0, 0);
      jogo.jogar(0, 2);
      jogo.jogar(1, 1);
      expect(jogo.tabuleiro[1][1]).toBe('X');
    });
    
    test('verifica se o vencedor na primeira linha é X', () => {
      jogo.jogar(0, 0); 
      jogo.jogar(1, 0);
      jogo.jogar(0, 1); 
      jogo.jogar(1, 1);
      jogo.jogar(0, 2);
      jogo.verificarLinhas();

      expect(jogo.temUmVencedor).toBe(true);
      expect(jogo.quemEOVencedor).toBe('X');
    });

    test('verifica se o vencedor na segunda coluna é O', () => {
      jogo.jogar(0, 0);
      jogo.jogar(0, 1);
      jogo.jogar(1, 0); 
      jogo.jogar(1, 1);
      jogo.jogar(2, 2); 
      jogo.jogar(2, 1);
      jogo.verificarColunas();
      
      expect(jogo.temUmVencedor).toBe(true);
      expect(jogo.quemEOVencedor).toBe('O');
    });

    test('verifica se o vencedor na diagonal principal é X', () => {
      jogo.jogar(0, 0); 
      jogo.jogar(0, 1);
      jogo.jogar(1, 1); 
      jogo.jogar(0, 2);
      jogo.jogar(2, 2); 
      jogo.verificarDiagonais();

      expect(jogo.temUmVencedor).toBe(true);
      expect(jogo.quemEOVencedor).toBe('X');
    });
    
    test('verifica se o vencedor na diagonal secundária é O', () => {
      jogo.jogar(0, 0); 
      jogo.jogar(0, 2);
      jogo.jogar(1, 0); 
      jogo.jogar(1, 1);
      jogo.jogar(2, 1);
      jogo.jogar(2, 0);
      jogo.verificarDiagonais();

      expect(jogo.temUmVencedor).toBe(true);
      expect(jogo.quemEOVencedor).toBe('O');
    });

    test('não deve permitir sobrescrever uma jogada existente', () => {
      jogo.jogar(1, 1); 
      expect(jogo.tabuleiro[1][1]).toBe('X');
      
      const rodadaAtual = jogo.numeroDaRodada;
      jogo.jogar(1, 1); 
      
      expect(jogo.tabuleiro[1][1]).toBe('X');
      expect(jogo.numeroDaRodada).toBe(rodadaAtual);
    });

     test('deve detectar empate', () => {
      jogo.jogar(0, 0);
      jogo.jogar(0, 1);
      jogo.jogar(0, 2);
      jogo.jogar(1, 1);
      jogo.jogar(1, 0);
      jogo.jogar(1, 2);
      jogo.jogar(2, 1);
      jogo.jogar(2, 0);
      jogo.jogar(2, 2);
      expect(jogo.temUmVencedor).toBe(false);
    });
});