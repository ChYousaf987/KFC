import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductLoader = () => {
  return (
    <>
      <div className="row mx-auto container py-5">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <div className="col-lg-3">
              <Skeleton width={"100%"} height={150} />
              <div className="d-flex justify-content-between">
                <Skeleton width={80} height={25} />
                <Skeleton width={40} height={25} />
              </div>
              <Skeleton width={"100%"} count={2} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductLoader;
