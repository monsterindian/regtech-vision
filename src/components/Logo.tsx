import React from 'react';

type Props = {
  className?: string;
};

const Logo: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={"inline-block " + className} aria-hidden>
      <span className="inline-flex items-baseline font-extrabold text-2xl leading-none">
        <span className="text-2xl text-foreground">G</span>
        <span className="text-red-600 text-xs font-extrabold -translate-y-1 ml-0.5">ai</span>
        <span className="text-2xl text-foreground ml-0.5">igentic</span>
        <span className="ml-3 text-base font-semibold text-foreground">AI</span>
      </span>
    </div>
  );
};

export default Logo;
