import { useState } from 'react';

type CroppedDescriptionProps = {
  description: string;
  maxLength?: number;
}

const CroppedDescription = ({description, maxLength = 140}: CroppedDescriptionProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false);

  if (description.length <= maxLength) {
    return <span className="item-details__text">{description}</span>;
  }

  const displayedText = isOpened ? description : description.slice(0, maxLength);

  const handleReadMoreClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="item-details__text-wrapper">{displayedText}
      {isOpened ? '' : (
        <button className="item-details__more" onClick={handleReadMoreClick}><span className="visually-hidden">Читать полностью</span>
          <svg width="27" height="17" aria-hidden="true">
            <use xlinkHref="#icon-more"></use>
          </svg>
        </button>)}
    </div>
  );
};

export default CroppedDescription;

