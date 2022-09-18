import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns'

export const formatData = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};

export const formatHistory = data => {
  return format(new Date(data), 'MM/dd/yyyy', { addSuffix: true })
}
