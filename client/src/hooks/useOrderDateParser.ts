import { OrderDate } from '../Utils/types/types';

export const useOrderDateParser = () => {
  const parseOrderDate = (dateString: string): OrderDate => {
    const parsedDate = new Date(dateString);
    const date: OrderDate = {
      year: parsedDate.getFullYear(),
      month: parsedDate.getMonth() + 1,
      day: parsedDate.getDate(),
      hour: parsedDate.getHours(),
      minute: parsedDate.getMinutes(),
    };
    return date;
  };

  return parseOrderDate;
};
