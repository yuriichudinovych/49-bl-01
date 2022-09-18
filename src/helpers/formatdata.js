import { formatDistanceToNow } from 'date-fns';

export const formatData = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};
