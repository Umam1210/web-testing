import { Server } from '../helpers/api';

export const fetchCurrentOnline = async () => {
  const response = await Server.get('/misc/active-online');
  const onlineUsers = response.data;
  return onlineUsers;
};
