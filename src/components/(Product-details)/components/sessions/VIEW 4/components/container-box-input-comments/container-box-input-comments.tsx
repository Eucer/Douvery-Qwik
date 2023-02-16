import { component$, useStylesScoped$ } from '@builder.io/qwik';
import style from './container-box-input-comments.css?inline';
import { ContainerBoxBser } from '../container-box-user/container-box-user';
export const ContainerBoxInputComments = component$(() => {
  useStylesScoped$(style);
  return (
    <div class="comments-box">
      <div>
        <label for="comentario">Comentario:</label>
        <ContainerBoxBser />

        <textarea
          id="comentario"
          name="comentario"
          aria-label="Comentario"
          placeholder="Escribe un comentario..."
          rows={3}
          cols={60}
        />
        <br></br>
        <div class="ctr-butr">
          <p-sr1>Al comentar, acepto los términos de comentarios.</p-sr1>
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
});
