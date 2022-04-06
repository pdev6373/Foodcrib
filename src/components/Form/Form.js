import React, { useEffect, useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FormBody } from "./FormBody";
import { FormHeader } from "./FormHeader";

export const Form = () => {
  const { viewForm, toggleFormClass } = useContext(DataContext);

  useEffect(() => window.scrollTo(0, 0), [viewForm]);

  const formBodyDetails = [
    {
      containerClass: "form-container--signup",
      formTitle: "Create An Account",
      buttonText: "SIGN UP",
      hasAccount: false,
      formOption: "or use email for registration",
    },

    {
      containerClass: "form-container--login",
      formTitle: "Sign In Now",
      buttonText: "LOGIN",
      hasAccount: true,
      formOption: "or use your email account",
    },
  ];

  const formHeaderDetails = [
    {
      title: "Welcome back !",
      description:
        "To keep connected with us please login with your personal info",
      buttonText: "Sign in",
      switchHidden: true,
      switchClass: "switch__container switch__container--one",
    },

    {
      title: "Hello Friend !",
      description: "Enter your personal details and start your journey with us",
      buttonText: "sign up",
      switchClass: "switch__container switch__container--two",
      switchHidden: false,
    },
  ];

  return (
    <section className={viewForm ? "form-wrapper" : "invisible"}>
      <div className={toggleFormClass ? "switch switch--is-txr" : "switch"}>
        <div
          className={
            toggleFormClass
              ? "switch__circle switch__circle--is-txr"
              : "switch__circle"
          }
        ></div>
        <div
          className={
            toggleFormClass
              ? "switch__circle switch__circle--t switch__circle--is-txr"
              : "switch__circle switch__circle--t"
          }
        ></div>
        {formHeaderDetails.map((formDetails) => (
          <FormHeader
            key={formDetails.buttonText}
            title={formDetails.title}
            description={formDetails.description}
            buttonText={formDetails.buttonText}
            switchClass={formDetails.switchClass}
            switchHidden={formDetails.switchHidden}
          />
        ))}
      </div>

      {formBodyDetails.map((form) => (
        <FormBody
          key={form.hasAccount}
          containerClass={form.containerClass}
          formId={form.formId}
          formTitle={form.formTitle}
          buttonText={form.buttonText}
          hasAccount={form.hasAccount}
          formOption={form.formOption}
        />
      ))}
    </section>
  );
};
