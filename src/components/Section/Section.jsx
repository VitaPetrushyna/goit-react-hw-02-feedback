const Section = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: '',
  children: [],
};

export default Section;
