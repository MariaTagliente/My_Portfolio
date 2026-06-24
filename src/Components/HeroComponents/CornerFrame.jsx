export default function CornerFrame({ children }) {
  return (
    <>
      <div className="relative aspect-square">
        <div className="pointer-events-none absolute inset-0 z-20">
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-(--turchese)"/>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-(--pink)" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-(--turchese)"/>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-(--pink)"/>
        </div>
        
        {children}

      </div>
    </>
    
  );
}