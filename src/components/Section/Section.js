import PropTypes from 'prop-types';

import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={css.section}>
      <h3 className={css.title}>{title}</h3>
      <div className={css.content}>{children}</div>
    </section>
  );
}

export default Section;

Section.proptype = {
  title: PropTypes.string.isRequired,
};
