import { useState } from 'react';
import styles from './EnquiryForm.module.css';

const CLASSES = ['Nursery', 'Class 1', 'Class 6', 'Class 11'];

const EMPTY = {
  studentName: '',
  classApplying: '',
  parentName: '',
  phone: '',
  email: '',
  message: '',
};

// Validation, sending to the API and success/error messages are added in step 9.
export default function EnquiryForm() {
  const [values, setValues] = useState(EMPTY);

  function handleChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h3 className={`${styles.full} ${styles.title}`}>Admission enquiry</h3>

      <div className={styles.field}>
        <label htmlFor="sname">Student&apos;s name</label>
        <input
          id="sname"
          name="studentName"
          type="text"
          value={values.studentName}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="class">Class applying for</label>
        <select
          id="class"
          name="classApplying"
          value={values.classApplying}
          onChange={handleChange}
        >
          <option value="">Select a class</option>
          {CLASSES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="pname">Parent&apos;s name</label>
        <input
          id="pname"
          name="parentName"
          type="text"
          value={values.parentName}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} />
      </div>

      <div className={`${styles.field} ${styles.full}`}>
        <label htmlFor="email">Email (optional)</label>
        <input id="email" name="email" type="email" value={values.email} onChange={handleChange} />
      </div>

      <div className={`${styles.field} ${styles.full}`}>
        <label htmlFor="msg">Anything we should know?</label>
        <textarea id="msg" name="message" rows="3" value={values.message} onChange={handleChange} />
      </div>

      <button type="submit" className={`${styles.full} ${styles.submit}`}>
        Send enquiry
      </button>
    </form>
  );
}
