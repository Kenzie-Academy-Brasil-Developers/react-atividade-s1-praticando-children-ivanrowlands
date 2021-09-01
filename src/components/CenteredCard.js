import "./centeredCard.css";

function CenteredCard({ children }) {
  return (
    <div className="divPai">
      <h3>{children}</h3>
    </div>
  );
}

export default CenteredCard;
