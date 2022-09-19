import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

export const Statistics = ({title, stats}) => {
  return (
    <> {title && <StatisticTitle>{title}</StatisticTitle> }
      <StatisticsList>
        {stats.map(({ title, total, id, icon }) =>
          <StatisticItem
            key={id}
            total={total}
            title={title}
            icon={<IconElement icon={icon} />} />)}
      </StatisticsList>
    </>
  );
}

const IconElement = ({ icon }) => {
const mapIcons = new Map([
  [`one`, <FaRegThumbsUp fontSize={30} />],
  [`two`, <MdPeople fontSize={30} />],
  [`three`, <MdOutlineProductionQuantityLimits fontSize={30} />],
  [`four`, <GiTreeDoor fontSize={30} />]
])
  return mapIcons.get(icon);
}