import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  nextIsX = true;
  win = {
    isWin: false,
    figure: '',
  };
  squares!: any[];
  disabled = false;

  ngOnInit() {
    this.restartGame();
  }

  markSquare(index: number) {
    if (!this.disabled) {
      this.squares[index].figure = this.nextIsX ? 'X' : 'O';
      this.nextIsX = !this.nextIsX;
      this.validateWin();
    }
  }

  validateWin() {
    if (
      this.squares[0].figure &&
      this.squares[1].figure &&
      this.squares[2].figure &&
      this.squares[0].figure === this.squares[1].figure &&
      this.squares[0].figure === this.squares[2].figure
    ) {
      this.win = {
        isWin: true,
        figure: this.squares[0].figure,
      };
      this.squares[0].background = 'green';
      this.squares[1].background = 'green';
      this.squares[2].background = 'green';
    } else if (
      this.squares[3].figure &&
      this.squares[4].figure &&
      this.squares[5].figure &&
      this.squares[3].figure === this.squares[4].figure &&
      this.squares[3].figure === this.squares[5].figure
    ) {
      this.win = {
        isWin: true,
        figure: this.squares[3].figure,
      };
      this.squares[3].background = 'green';
      this.squares[4].background = 'green';
      this.squares[5].background = 'green';
    } else if (
      this.squares[6].figure &&
      this.squares[7].figure &&
      this.squares[8].figure &&
      this.squares[6].figure === this.squares[7].figure &&
      this.squares[6].figure === this.squares[8].figure
    ) {
      this.win = {
        isWin: true,
        figure: this.squares[6].figure,
      };
      this.squares[6].background = 'green';
      this.squares[7].background = 'green';
      this.squares[8].background = 'green';
    } else if (
      this.squares[0].figure &&
      this.squares[3].figure &&
      this.squares[6].figure &&
      this.squares[0].figure === this.squares[3].figure &&
      this.squares[0].figure === this.squares[6].figure
    ) {
      this.win = {
        isWin: true,
        figure: this.squares[0].figure,
      };
      this.squares[0].background = 'green';
      this.squares[3].background = 'green';
      this.squares[6].background = 'green';
    } else if (
      this.squares[1].figure &&
      this.squares[4].figure &&
      this.squares[7].figure &&
      this.squares[1].figure === this.squares[4].figure &&
      this.squares[1].figure === this.squares[7].figure
    ) {
      this.win = {
        isWin: true,
        figure: this.squares[1].figure,
      };
      this.squares[1].background = 'green';
      this.squares[4].background = 'green';
      this.squares[7].background = 'green';
    } else if (
      this.squares[2].figure &&
      this.squares[5].figure &&
      this.squares[8].figure &&
      this.squares[2].figure === this.squares[5].figure &&
      this.squares[2].figure === this.squares[8].figure
    ) {
      this.win = {
        isWin: true,
        figure: this.squares[2].figure,
      };
      this.squares[2].background = 'green';
      this.squares[5].background = 'green';
      this.squares[8].background = 'green';
    } else if (
      this.squares[0].figure &&
      this.squares[4].figure &&
      this.squares[8].figure &&
      this.squares[0].figure === this.squares[4].figure &&
      this.squares[0].figure === this.squares[8].figure
    ) {
      this.win = {
        isWin: true,
        figure: this.squares[0].figure,
      };
      this.squares[0].background = 'green';
      this.squares[4].background = 'green';
      this.squares[8].background = 'green';
    } else if (
      this.squares[2].figure &&
      this.squares[4].figure &&
      this.squares[6].figure &&
      this.squares[2].figure === this.squares[4].figure &&
      this.squares[2].figure === this.squares[6].figure
    ) {
      this.win = {
        isWin: true,
        figure: this.squares[2].figure,
      };
      this.squares[2].background = 'green';
      this.squares[4].background = 'green';
      this.squares[6].background = 'green';
    }

    if (this.win.isWin) {
      this.messageWin();
    }

    this.validateFillAllSquares();
  }

  validateFillAllSquares() {
    let allFill = this.squares.filter((x) => !x.figure);
    if (allFill.length === 0) {
      this.message('Nadie ganó', 'warning');
    }
  }

  message(title: string, icon: any) {
    Swal.fire({
      title: title,
      text: '¿Quiere jugar otra partida?',
      icon: icon,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.restartGame();
      } else {
        this.disabled = true;
      }
    });
  }

  messageWin() {
    this.message(
      `Ha ganado: ${this.win.figure} 🎈🎈🎈. Felicitaciones!!`,
      'success'
    );
  }

  restartGame() {
    this.squares = [
      { figure: '', background: 'white' },
      { figure: '', background: 'white' },
      { figure: '', background: 'white' },
      { figure: '', background: 'white' },
      { figure: '', background: 'white' },
      { figure: '', background: 'white' },
      { figure: '', background: 'white' },
      { figure: '', background: 'white' },
      { figure: '', background: 'white' },
    ];

    this.disabled = false;
    this.nextIsX = true;
    this.win = {
      isWin: false,
      figure: '',
    };
  }
}
