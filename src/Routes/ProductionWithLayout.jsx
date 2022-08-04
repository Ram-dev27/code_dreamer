import React from "react";

const ProductionWithLayout = (props) => {
  const { component:Component, layout :Layout } = props;
  return (
    <div>
      <Layout>
        <Component />
      </Layout>
    </div>
  );
};

export default ProductionWithLayout;
