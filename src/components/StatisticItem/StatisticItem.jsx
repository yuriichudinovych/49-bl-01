import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
  StatisticIcon,
} from './StatisticItem.styled';

export const StatisticItem = ({title, total, icon}) => {
  return   (<StatisticBox>
    <StatisticIcon>{icon}</StatisticIcon>
    <StatisticCounter>{total}</StatisticCounter>
    <StatisticText>{title}</StatisticText>
  </StatisticBox>);
};
