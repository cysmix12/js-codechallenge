import { SingleValueProps, components } from 'react-select';

import { getFlagSVG } from '../../helpers';

export const CountrySelectSingleValue = (props: SingleValueProps<any>) => {
  const { children, data } = props;

  return (
    <components.SingleValue {...props}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img src={getFlagSVG(data.value.code)} height={32} width={32} loading="lazy" />
        <span>{children}</span>
      </div>
    </components.SingleValue>
  );
};
