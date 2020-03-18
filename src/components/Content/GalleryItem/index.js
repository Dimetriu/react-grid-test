import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Avatar,
} from './GaleryItem.styles';
import { COLORS } from '../../../styles/global';

import Loader from '../../Loader';
import SplitPane from '../../SplitPane';
import Picture from './Picture';
import { HeartIcon, ChatIcon } from '../../../ui/Icons';

export default function GalleryItem({
  image,
  text,
  ownerName,
  ownerImage,
  likes,
  comments
}) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const likedByOwner = false;
  const commentedByOwner = false;

  const leftPanel = (
    <Avatar>
      <img src={ownerImage} alt={ownerName} />
      <p>{ownerName}</p>
    </Avatar>
  );
  const rightPanel = (
    <>
      <span className="icon-group">
        <HeartIcon
          color={likedByOwner ? COLORS.primary : COLORS.textDarken}
        />
        <div
          color={likedByOwner ? COLORS.primary : COLORS.textDarken}
        >
          {likes}
        </div>
      </span>
      <span className="icon-group">
        <ChatIcon
          color={commentedByOwner ? COLORS.primary : COLORS.textDarken}
        />
        <div
          color={commentedByOwner ? COLORS.primary : COLORS.textDarken}
        >
          {comments}
        </div>
      </span>
    </>
  );

  return (
    <Card>
      {error && <></>}
      {loading && <Loader />}
      {!error && (
        <>
          <Picture
            onError={() => {
              setError(true);
              setLoading(false);
            }}
            onLoad={() => {
              setLoading(false);
            }}
            className="card-picture"
            src={image}
            alt={text}
          />
          <CardBody>
            <h5 className="H5">{text}</h5>
          </CardBody>
          <CardFooter>
            <SplitPane
              leftPanel={leftPanel}
              rightPanel={rightPanel}
            />
          </CardFooter>
        </>
      )}
    </Card>
  );
}
