"use client";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("Campo requerido"),
    password: Yup.string().required("Campo requerido")
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-center text-2xl mb-2">Iniciar Sesión</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
            console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <div className="flex flex-col w-4/6 mx-auto gap-2">
          <Field
            name="email"
            type="email"
            className="border-2 border-orange-300 rounded-md p-1"
            placeholder="Correo"
          />
          {/* TODO: add component param to ErrorMessage component */}
          <ErrorMessage name="email" />
          <Field
            name="password"
            className="border-2 border-orange-300 rounded-md p-1"
            type="password"
            placeholder="Contraseña"
          />
          <ErrorMessage name="password" />
          <button
            className="bg-orange-300 rounded-md p-1 border-2 border-orange-300 text-white font-semibold"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </div>
      </Formik>
    </div>
  );
};

export default Login;
