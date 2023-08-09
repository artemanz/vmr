import React from "react";
import {
  Cases,
  Features,
  Form,
  Hero,
  Prices,
  Process,
  Realisation,
  Tasks,
} from "@/layout";

type Props = {};

const Root = (props: Props) => {
  return (
    <main>
      <Hero />
      <Features />
      <Process />
      <Realisation />
      <Tasks />
      <Prices />
      <Cases />
      <Form />
    </main>
  );
};

export default Root;
