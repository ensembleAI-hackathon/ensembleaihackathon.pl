import PropTypes from "prop-types";

const SectionWrapper = ({ children, direction = "fade-up" }) => {
  return (
    <div
      data-aos={direction}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
};

export default SectionWrapper;
