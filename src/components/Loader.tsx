import { Puff } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Puff height={80} width={80} radius={1} color="#D8954E" ariaLabel="puff-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    </div>
  );
};
