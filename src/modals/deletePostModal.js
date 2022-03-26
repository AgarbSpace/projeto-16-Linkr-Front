import Swal from 'sweetalert2';
import api from '../services/api';

function confirmDelete (post, auth) {
  Swal.fire({
    html: `<h1 style = 'color: #fff'>Are you sure you want to delete this post?</h1>`,
    showDenyButton: true,
    width: '50%',
    backdrop: 'rgba(244, 244, 244, 0.8)',
    background: '#333',
    denyButtonColor: '#fff',
    confirmButtonColor: '#1877f2',
    denyButtonText: `<h1 style = 'color: #1877f2'>Yes, delete it</h1>`,
    confirmButtonText: `<h1 style = 'color: #fff'>No, go back</h1>`,
  }).then((result) => {
    if (!result.isConfirmed) {
      api.deletePublication(auth.token, post.id)
        .then(() => window.location.reload())
        .catch((err) => {
          Swal.fire({
            html: `<h1 style = 'color: #fff'>Something went wrong. Try again later!</h1>`,
            timer: 2000,
            background: '#333',
            timerProgressBar: true,
            showConfirmButton: false,
            position: 'center',
        });
        })
    }
  });
  
}

export {
    confirmDelete,
}