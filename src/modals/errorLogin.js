import Swal from "sweetalert2";

export function errLogin() {
  Swal.fire({
    html: `<h1 style = 'color: #fff'>Username or password is invalid!</h1>`,
    timer: 2000,
    background: '#333',
    timerProgressBar: true,
    showConfirmButton: false,
    position: 'center',
  });
}