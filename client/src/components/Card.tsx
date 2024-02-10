/* eslint-disable @typescript-eslint/no-unused-vars */
interface CardProps {
  _id: string;
  title: string;
  description: string;
  // Add other props as needed
}

const Card: React.FC<CardProps> = ({ _id, title, description }) => {
  return <div>card</div>;
};

export default Card;
export type { CardProps };
