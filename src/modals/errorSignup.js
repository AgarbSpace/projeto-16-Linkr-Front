import Swal from "sweetalert2";

export function errSignUp() {
  Swal.fire({
    html: `<h1 style = 'color: #fff'>Invalid data! Try again!</h1>`,
    timer: 2000,
    background: '#333',
    timerProgressBar: true,
    showConfirmButton: false,
    position: 'center',
  });
}