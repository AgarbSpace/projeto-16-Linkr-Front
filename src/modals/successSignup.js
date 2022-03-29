import Swal from "sweetalert2";

export function successSignUp() {
  Swal.fire({
    html: `<h1 style = 'color: #fff'>Successfully Registered!</h1>`,
    timer: 2000,
    background: '#333',
    timerProgressBar: true,
    showConfirmButton: false,
    position: 'center',
  });
}