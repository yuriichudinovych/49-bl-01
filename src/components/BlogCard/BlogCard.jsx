// import { formatDistanceToNow } from 'date-fns';

import { formatData } from '../../../src/helpers/formatdata';

import {
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardBody,
  Tag,
  CardFooter,
  UserBox,
  UserInfo,
  Avatar,
  Date,
  UserName,
  CardPoster,
} from './BlogCard.styled';

export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  userName,
  avatar,
  postedAt,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt="card__image" />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt="Jane Doe" />
          <UserInfo>
            <UserName>{userName}</UserName>
            <Date>{formatData(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
