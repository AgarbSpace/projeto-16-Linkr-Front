import Swal from 'sweetalert2';
import api from '../services/api';

function confirmDelete (post, auth) {
 console.log(post)
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
            Swal.fire(
                'Algo deu errado, tente novamente mais tarde!'
            );
        })
    }
  });
  
}

export {
    confirmDelete,
}