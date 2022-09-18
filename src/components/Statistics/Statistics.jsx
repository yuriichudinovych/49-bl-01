import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

export const Statistics = ({title, stats}) => {
  return (
    <> {title && <StatisticTitle>{title}</StatisticTitle> }
  
      <StatisticsList>
        {stats.map(({ title, total, id }) => <StatisticItem key={id} total={total} title={title} />)}
      </StatisticsList>
    </>
  );
};
