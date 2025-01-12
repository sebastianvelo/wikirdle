interface LoadingSpinProps {
    isLoading: boolean;
}

const LoadingSpin = (props: LoadingSpinProps) => {
  return (
    <>
      {props.isLoading && (
        <div className="h-full w-full flex align-center justify-center py-16">
          <div className="animate-spin-slow rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        </div>
      )}
    </>
  );
};

export default LoadingSpin;
