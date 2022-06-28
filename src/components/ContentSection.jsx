import ContentSectionRowItem from "./ContentSectionRowItem";

export default function ContentSection({
  sectionClassName,
  badge,
  title,
  description,
  rowItems,
}) {
  return (
    <>
      <div className={`section ${sectionClassName}`}>
        <div className="component-section-header">
          <div className="title-badge">
            <div className="title-badge-title">{badge}</div>
          </div>

          <h2>
            <div className="component-title ">{title}</div>
          </h2>

          <div className="description">{description}</div>
        </div>

        <div className="component-usp-row">
          {rowItems.map((rowItem, index) => (
            <ContentSectionRowItem key={index} rowItem={rowItem} />
          ))}
        </div>
      </div>
      <div className="section-line">
        <div className="line "></div>
      </div>
    </>
  );
}
