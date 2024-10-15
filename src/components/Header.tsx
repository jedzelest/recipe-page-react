type HeaderProps = {
  headers: {
    headerTitle: string;
    headerParagraph: string;
    imageUrl: string;
  };
};

const Header = ({
  headers: { headerTitle, headerParagraph, imageUrl },
}: HeaderProps) => {
  return (
    <header className="heading">
      <img src={imageUrl} alt="Image of an Omelette" />
      <h1>{headerTitle}</h1>
      <p>{headerParagraph}</p>
    </header>
  );
};

export default Header;
