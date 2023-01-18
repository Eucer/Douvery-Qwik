import { component$ } from '@builder.io/qwik';

export const Stars = component$(({ props }: any) => {
  const { rating, size } = props;

  const starsColor = '#FF2E4C';
  const startNoFull = (
    // eslint-disable-next-line qwik/single-jsx-root
    <svg
      width={size || '20'}
      height={size || '20'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M5.73937 16C5.84937 15.51 5.64937 14.81 5.29937 14.46L2.86937 12.03C2.10937 11.27 1.80937 10.46 2.02937 9.76C2.25937 9.06 2.96937 8.58 4.02937 8.4L7.14937 7.88C7.59937 7.8 8.14937 7.4 8.35937 6.99L10.0794 3.54C10.5794 2.55 11.2594 2 11.9994 2C12.7394 2 13.4194 2.55 13.9194 3.54L15.6394 6.99C15.7694 7.25 16.0394 7.5 16.3294 7.67L5.55937 18.44C5.41937 18.58 5.17937 18.45 5.21937 18.25L5.73937 16Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M18.7008 14.4619C18.3408 14.8219 18.1408 15.5119 18.2608 16.0019L18.9508 19.0119C19.2408 20.2619 19.0608 21.2019 18.4408 21.6519C18.1908 21.8319 17.8908 21.9219 17.5408 21.9219C17.0308 21.9219 16.4308 21.7319 15.7708 21.3419L12.8408 19.6019C12.3808 19.3319 11.6208 19.3319 11.1608 19.6019L8.23078 21.3419C7.12078 21.9919 6.17078 22.1019 5.56078 21.6519C5.33078 21.4819 5.16078 21.2519 5.05078 20.9519L17.2108 8.79185C17.6708 8.33185 18.3208 8.12185 18.9508 8.23185L19.9608 8.40185C21.0208 8.58185 21.7308 9.06185 21.9608 9.76185C22.1808 10.4619 21.8808 11.2719 21.1208 12.0319L18.7008 14.4619Z"
        fill="#292D32"
      />
    </svg>
  );
  const startMdFull = (
    <svg
      width={size || '20'}
      height={size || '20'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.73937 16C5.84937 15.51 5.64937 14.81 5.29937 14.46L2.86937 12.03C2.10937 11.27 1.80937 10.46 2.02937 9.76C2.25937 9.06 2.96937 8.58 4.02937 8.4L7.14937 7.88C7.59937 7.8 8.14937 7.4 8.35937 6.99L10.0794 3.54C10.5794 2.55 11.2594 2 11.9994 2C12.7394 2 13.4194 2.55 13.9194 3.54L15.6394 6.99C15.7694 7.25 16.0394 7.5 16.3294 7.67L5.55937 18.44C5.41937 18.58 5.17937 18.45 5.21937 18.25L5.73937 16Z"
        fill={starsColor}
      />
      <path
        opacity="0.4"
        d="M18.7008 14.4599C18.3408 14.8199 18.1408 15.5099 18.2608 15.9999L18.9508 19.0099C19.2408 20.2599 19.0608 21.1999 18.4408 21.6499C18.1908 21.8299 17.8908 21.9199 17.5408 21.9199C17.0308 21.9199 16.4308 21.7299 15.7708 21.3399L12.8408 19.5999C12.3808 19.3299 11.6208 19.3299 11.1608 19.5999L8.23078 21.3399C7.12078 21.9899 6.17078 22.0999 5.56078 21.6499C5.33078 21.4799 5.16078 21.2499 5.05078 20.9499L17.2108 8.7899C17.6708 8.3299 18.3208 8.1199 18.9508 8.2299L19.9608 8.3999C21.0208 8.5799 21.7308 9.0599 21.9608 9.7599C22.1808 10.4599 21.8808 11.2699 21.1208 12.0299L18.7008 14.4599Z"
        fill="#292D32"
      />
    </svg>
  );

  const startFull = (
    <svg
      width={size || '20'}
      height={size || '20'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.73937 16C5.84937 15.51 5.64937 14.81 5.29937 14.46L2.86937 12.03C2.10937 11.27 1.80937 10.46 2.02937 9.76C2.25937 9.06 2.96937 8.58 4.02937 8.4L7.14937 7.88C7.59937 7.8 8.14937 7.4 8.35937 6.99L10.0794 3.54C10.5794 2.55 11.2594 2 11.9994 2C12.7394 2 13.4194 2.55 13.9194 3.54L15.6394 6.99C15.7694 7.25 16.0394 7.5 16.3294 7.67L5.55937 18.44C5.41937 18.58 5.17937 18.45 5.21937 18.25L5.73937 16Z"
        fill={starsColor}
      />
      <path
        d="M18.7008 14.4619C18.3408 14.8219 18.1408 15.5119 18.2608 16.0019L18.9508 19.0119C19.2408 20.2619 19.0608 21.2019 18.4408 21.6519C18.1908 21.8319 17.8908 21.9219 17.5408 21.9219C17.0308 21.9219 16.4308 21.7319 15.7708 21.3419L12.8408 19.6019C12.3808 19.3319 11.6208 19.3319 11.1608 19.6019L8.23078 21.3419C7.12078 21.9919 6.17078 22.1019 5.56078 21.6519C5.33078 21.4819 5.16078 21.2519 5.05078 20.9519L17.2108 8.79185C17.6708 8.33185 18.3208 8.12185 18.9508 8.23185L19.9608 8.40185C21.0208 8.58185 21.7308 9.06185 21.9608 9.76185C22.1808 10.4619 21.8808 11.2719 21.1208 12.0319L18.7008 14.4619Z"
        fill={starsColor}
      />
    </svg>
  );
  return (
    <div class="flex">
      {rating >= 1 ? startFull : rating >= 0.5 ? startMdFull : startNoFull}{' '}
      {rating >= 2 ? startFull : rating >= 1.5 ? startMdFull : startNoFull}{' '}
      {rating >= 3 ? startFull : rating >= 2.5 ? startMdFull : startNoFull}{' '}
      {rating >= 4 ? startFull : rating >= 3.5 ? startMdFull : startNoFull}{' '}
      {rating >= 5 ? startFull : rating >= 4.5 ? startMdFull : startNoFull}{' '}
    </div>
  );
});
