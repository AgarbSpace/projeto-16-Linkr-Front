import Swal from 'sweetalert2';
import api from '../services/api';

export default async function confirmRePost(postId, token, callback) {
  Swal.fire({
    html: `<h1 style = 'color: #fff'>Do you want to re-post this link?</h1>`,
    showDenyButton: true,
    width: '50%',
    backdrop: 'rgba(244, 244, 244, 0.8)',
    background: '#333',
    denyButtonColor: '#fff',
    confirmButtonColor: '#1877f2',
    denyButtonText: `<h1 style = 'color: #1877f2'>Yes, Share!</h1>`,
    confirmButtonText: `<h1 style = 'color: #fff'>No, cancel</h1>`,
  }).then(async (result) => {
    if (!result.isConfirmed) {
      try {
        await api.repost(token, postId)
        callback()
      } catch (err) {
        Swal.fire({
          html: `<h1 style = 'color: #fff'>Something went wrong. Try again later!</h1>`,
          timer: 2000,
          background: '#333',
          timerProgressBar: true,
          showConfirmButton: false,
          position: 'center',
        });
      }
    }
  });
}