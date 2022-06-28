export default function ContentSectionRowItem({ rowItem }) {
  const { image, title, description } = rowItem;

  return (
    <div className="item team">
      <img alt="" className="image" src={image} />
      {title && <div className="component-title title">{title}</div>}
      <div className="description">{description}</div>
    </div>
  );
}
