import SignupForm from './components/Formik1';
import SignupForm2 from './components/Formik2';
import SignupForm3 from './components/Formik3';
import SignupFormYup from './components/FormikYup';
import FormikYupGetFieldProps from './components/FormikYupGetFieldProps';
import FormikUseField from './components/FormikUseField';

function App() {
  return (
    <main>
      <h2>Formik Test 1</h2>
      <SignupForm />
      <br />
      <h2>Formik Test 2</h2>
      <SignupForm2 />
      <br />
      <h2>Formik Test 3</h2>
      <SignupForm3 />
      <br />
      <h2>Formik Test Yup</h2>
      <SignupFormYup />
      <br />
      <h2>Formik Test GetFieldProps</h2>
      <FormikYupGetFieldProps />
      <br />
      <h2>Formik Test Use Field</h2>
      <FormikUseField />
      <br />
    </main>
  );
}

export default App;
