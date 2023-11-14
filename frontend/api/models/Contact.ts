export default interface Contact {
  id: number;
  user_id: number;
  name: string;
  email: string;
  title: string;
  phone: string;
  address: string;
  avatar: string;
  created_at?: Date;
  updated_at?: Date;
}
