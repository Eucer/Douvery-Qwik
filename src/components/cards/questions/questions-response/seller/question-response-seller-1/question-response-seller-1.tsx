import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './question-response-seller-1.css?inline';
import { DouveryArrowRigth1 } from '~/components/icons/arrow-right-1';
import { UseSellerAuthorized } from '~/components/use/sellerAuthorized/sellerAuthorized';
export const QuestionResponseSeller1 = component$(
  ({ res, sellerResponse, time }: any) => {
    useStylesScoped$(styles);
    return (
      <div class="crtr-resp">
        <div class="rrow">
          {' '}
          <DouveryArrowRigth1 />{' '}
        </div>
        <div class="response">
          <div class="header-response">
            {' '}
            <UseSellerAuthorized name={sellerResponse} /> -
            <p class="ps-sr1">{time}</p>
          </div>
          <p class="ps-sr1">{res}</p>
        </div>
      </div>
    );
  }
);
