interface LoadingSpinProps {
  isLoading: boolean;
}

const LoadingSpin = ({ isLoading }: LoadingSpinProps) => {
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-r-4 border-b-4 border-primary-500"></div>
        </div>
      )}
    </>
  );
};

export default LoadingSpin;
