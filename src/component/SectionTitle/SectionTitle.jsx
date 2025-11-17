const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="">
      <h1 className="text-green-600 text-2xl">{heading}</h1>
      <p className="font-semibold text-4xl">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
