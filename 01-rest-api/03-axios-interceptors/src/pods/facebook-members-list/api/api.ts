import axios from 'axios';
import { Member } from './api.model';

export const getMembers = () =>
  axios
    .get<Member[]>('/orgs/facebook/members')
    .then((r) => r.data);
