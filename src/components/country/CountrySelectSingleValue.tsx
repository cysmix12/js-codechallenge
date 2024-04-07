import { SingleValueProps, components } from 'react-select';

export const CountrySelectSingleValue = (props: SingleValueProps<any>) => {
  const { children, data } = props;

  return (
    <components.SingleValue {...props}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img
          src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${data.value.code}.svg`}
          height={32}
          width={32}
          loading="lazy"
        />
        <span>{children}</span>
      </div>
    </components.SingleValue>
  );
};
