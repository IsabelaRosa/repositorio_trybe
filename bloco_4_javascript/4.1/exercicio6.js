let nomeDaPeca = "PAWN";
let novoNomeDaPeca = nomeDaPeca.toLowerCase();

switch (novoNomeDaPeca)
{
  case "king":
    console.log("The king moves exactly one vacant square in any direction: forwards, backwards, left, right, or diagonally.");
    break;

  case "queen":
    console.log("The queen moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.");
    break;

  case "rook":
    console.log("The rook moves any number of vacant squares forwards, backwards, left, or right in a straight line.");
    break;

  case "bishop":
    console.log("The bishop moves any number of vacant squares diagonally, consequently stays on the same color throughout a game.");
    break;

  case "knight":
    console.log("The knight moves every three squares, making an L-shaped movement and consequently changing the color of the square with each movement.");
    break;

  case "pawn":
    console.log("The pawn moves forward exactly one square, or optionally, two squares when on its starting square, toward the opponent's side of the board.");
    break;

  default:
    console.log("Esta peça digitada não pertence ao jogo de xadrez.")

}