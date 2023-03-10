import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './view4.css?inline';
import { ContaineRatingProgress } from './components/container-rating-progress/container-rating-progress';
import { ContainerBoxQuestionsAnswered } from './components/container-box-questions-answered/container-box-questions-answered';
import { ContainerBoxInputComments } from './components/container-box-input-comments/container-box-input-comments';
import { ContainerBoxComments } from './components/container-box-comments/container-box-comments';
export const View4 = component$(({ product }: any) => {
  product;
  useStylesScoped$(styles);
  return (
    <div class="ctnr-view-4">
      {' '}
      <div class="crrts-title">
        <div class="ofrs">
          <hs-sr3>Opiniones & ratings del producto</hs-sr3>
          <div class="srs-v">
            <a class="ps-sr1">Saber mas</a>
          </div>
        </div>
        <p class="ps-sr1">Ahorra dinero al comprar en conjunto</p>
        <div class="srs-md">
          <a class="ps-sr1">Saber mas</a>
        </div>
      </div>
      <div class="content">
        {' '}
        <div class="viewleft">
          <div class="part-1">
            <ContaineRatingProgress props={product} />
            <ContainerBoxQuestionsAnswered />
          </div>
          <div class="part-2">
            <div class="crrts-title">
              <div class="ofrs">
                <hs-sr3>Puedes agregar un comentario</hs-sr3>
              </div>
              <p class="ps-sr1">Comparte y comenta tu mas sincera opinion</p>
            </div>
            <ContainerBoxInputComments />
            {product.ratings == '' ? (
              <div></div>
            ) : (
              <>
                {' '}
                <ContainerBoxComments product={product} />
              </>
            )}
          </div>
        </div>
        <div class="viewrigth"></div>
      </div>
    </div>
  );
});
