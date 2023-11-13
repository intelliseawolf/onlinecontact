export default interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: Date;
  title: string;
  phone: string;
  address: string;
  avatar: string;
  created_at?: Date;
  updated_at?: Date;
}
