import Swal from 'sweetalert2';

function errorEdit (post, auth) {
 Swal.fire({
    html: `<h1 style = 'color: #fff'>Something went wrong. Try again later!</h1>`,
    timer: 2000,
    background: '#333',
    timerProgressBar: true,
    showConfirmButton: false,
    position: 'center',
});
  
}

export {
    errorEdit,
}